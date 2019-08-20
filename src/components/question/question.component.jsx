import React from 'react';

import './question.styles.scss';
import Timer from '../timer/timer.component';
import QuestionBody from '../question-body/question-body.component';
import Loader from '../loader/loader.component';
 

class Question extends React.Component{

    constructor(props){
        super(props);
        this.state={
            secondsLeft:12,
             
        }
    }


     
    

    componentDidMount(){

        this.intervalID = setInterval(()=> {

            this.setState((prevState) => {

                 return {
                        secondsLeft: ( prevState.secondsLeft > 0)?prevState.secondsLeft - 1:0
                  } 
            })

        },1000)
    }

    componentWillUnmount(){

        clearInterval(this.intervalID)
    }

    render(){
        
        const timeUpAlert = this.state.secondsLeft === 0 ? 'Oops...Time Up!': `C'mon! You can do it!`;

        const {id, size, question , next, increaseScore, decreaseScore} = this.props;

        return(
            <div className='question'>
                 <Timer 
                 totalTime ={10}
                 timeUpAlert ={timeUpAlert}
                 secondsLeft={this.state.secondsLeft<=10? (this.state.secondsLeft):10}/>
                { 
                    (this.state.secondsLeft>10)
                    ? <Loader/>
                    : <QuestionBody 
                            question={question}
                            index = {id}
                            goToNext={()=> {

                                    if(id< size-1){
                                        this.setState({ secondsLeft: 12 });
                                        next();
                                        
                                    }
                                    else{
            
                                        this.props.changeRoute('end');
                                    }
                                
                            }}
                           
                            lastQuestion={
                                id === size-1
                            }

                            timeUp={this.state.secondsLeft <= 0}
                            increaseScore={increaseScore}
                            decreaseScore={decreaseScore}
                        />
                }
            </div>
        )
    }
}

export default Question;