import React from 'react';
import Question from '../../components/question/question.component';

import './quiz.styles.scss';
import questionsList from '../../data/questionSet'  ;



class Quiz extends React.Component {

    constructor(props){
        super(props);
        this.state={
            
            currentQuestion:0,
           
        }
    }


    nextQuestion =  () =>  {

        
        this.setState(prevState => {
            return {
                currentQuestion: (prevState.currentQuestion < questionsList.length-1)
                                 ?  prevState.currentQuestion + 1
                                 :  questionsList.length  - 1
            }
        })
    }

   

    render(){   
        const {  currentQuestion} = this.state;
         
         return (
            <div className='quiz'>
                 
                 <Question 
                    id={currentQuestion} 
                    size={questionsList.length} 
                    question = {questionsList[currentQuestion]} 
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