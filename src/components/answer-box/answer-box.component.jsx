import React from 'react';

import './answer-box.styles.scss';
import AnswerOption from '../answer-option/answer-option.component';

 

class AnswerBox extends React.Component {

    constructor(props){
        super(props);
        this.state={

            selected: null,
            alreadySelectedCorrect:false
        }
    }

    selectOption = (index) => {
        this.setState({
            selected: index
        },()=>{
            if( this.state.selected >= 0){

                if(this.state.selected === (this.props.correctAnswer) ){
                      
                      if(!this.state.alreadySelectedCorrect){
                            this.setState({
                                alreadySelectedCorrect:true
                            },() => {
                                this.props.increaseScore();
                                if(this.props.correctAnswer === 1){
                                
                                }
                            })
                      }
                      else{

                      }
                    
                   
                }

                if(this.state.selected !== (this.props.correctAnswer) && this.state.alreadySelectedCorrect){
                     this.props.decreaseScore()
                    this.setState({
                        alreadySelectedCorrect:false
                    })
                    
                }
                 
            }
        })

        
    }

    

    render() {

        const {options, timeUp, correctAnswer} = this.props;

         
        return (
            <div className='answer-box'>
                {
                    options.map((option,index) => (
                        <AnswerOption
                        key={ index} 
                         optionIndex={index}
                        text={option} 
                        selectOption={()=>this.selectOption(index)} 
                        checked={this.state.selected === index}
                        timeUp={timeUp}
                        correctAnswer={correctAnswer}
                        />
                    ))
                }
            </div>
        )
        
    }
}
export default AnswerBox;