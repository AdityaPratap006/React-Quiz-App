import React from 'react';

import './answer-box.styles.scss';
import AnswerOption from '../answer-option/answer-option.component';

 

class AnswerBox extends React.Component {

    constructor(props){
        super(props);
        this.state={

            selected: null,
            alreadySelectedCorrect:false,
            disable:false
        }
    }

    selectOption = (index, timeUp) => {

        if(timeUp){
            this.setState({disable: true})
        }else{
            this.setState({disable:false})
        }

        this.setState({
            selected: index
        },()=>{
            if( this.state.selected >= 0){

                if(this.props.options[this.state.selected] === (this.props.correctAnswer) ){
                      
                      if(!this.state.alreadySelectedCorrect){
                            this.setState({
                                alreadySelectedCorrect:true
                            },() => {
                                this.props.increaseScore();
                               
                            })
                      }
                      
                    
                   
                }

                if(this.props.options[this.state.selected] !== (this.props.correctAnswer) && this.state.alreadySelectedCorrect){
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
            <div className='answer-box w-9/10 xs:h-45/100 sm:h-3/5 flex flex-col justify-center items-center'>
                {
                    options.map((option,index) => (
                        <AnswerOption
                        key={ index} 
                         optionIndex={index}
                         
                         disable={this.state.disable}
                        text={option} 
                        selectOption={()=>this.selectOption(index,timeUp)} 
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