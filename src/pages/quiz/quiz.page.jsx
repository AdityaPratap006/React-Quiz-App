import React from 'react';
import Question from '../../components/question/question.component';

import './quiz.styles.scss';




class Quiz extends React.Component {

    constructor(props){
        super(props);
        this.state={
            
            
            currentQuestion:0,

           
        }
    }


    nextQuestion =  () =>  {

        
        this.setState((prevState,prevProps) => {

             
                return {
                    currentQuestion: (prevState.currentQuestion < prevProps.questionSet.length-1)
                                     ?  prevState.currentQuestion + 1
                                     :  prevProps.questionSet.length-1
                }
             
        })
    }

    
    
   

    render(){   
        const {currentQuestion} = this.state;
        
       const { questionSet } = this.props;

         return (
            <div className='quiz md:w-3/5 xs:w-4/5 flex flex-col justify-center items-center'>
                 <Question 
                    id={currentQuestion} 
                    size={questionSet.length} 
                    question = {questionSet[currentQuestion]} 
                    next={this.nextQuestion}
                    changeRoute ={this.props.changeRoute}
                    increaseScore={this.props.increaseScore}
                    decreaseScore={this.props.decreaseScore}
                    />
            </div>
        )
    }
}

export default Quiz;