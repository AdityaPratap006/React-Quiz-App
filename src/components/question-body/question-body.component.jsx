import React from 'react';

import './question-body.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import AnswerBox from '../answer-box/answer-box.component';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

class QuestionBody extends React.Component{

    constructor(){
        super();
        this.state={
            AnswerBoxOptions: []
        }
    }

    componentDidMount(){
        
        let  myQuestion  =  this.props.question;

        let myOptions = [myQuestion.correct_answer, ...myQuestion.incorrect_answers];

        let shuffledOptions = shuffle(myOptions);

        this.setState({AnswerBoxOptions: shuffledOptions})
    }

    render() {

        const {index , question, timeUp, goToNext, lastQuestion, increaseScore, decreaseScore} = this.props;

        
         


        return (
            <div className='question-body w-full h-3/4 bg-white overflow-hidden rounded-lg shadow-xl flex flex-col justify-start items-center'>
                <div className='question-text w-9/10 xs:h-35/100 sm:h-1/5 flex flex-col justify-center  '>
                    <h3>Q. {index + 1}</h3>
                    <h3>{question.question}</h3>
                </div>
                 <AnswerBox 
                    options = {this.state.AnswerBoxOptions} 
                    correctAnswer={question.correct_answer}
                    timeUp={timeUp}
                    increaseScore={increaseScore}
                    decreaseScore={decreaseScore}
                />
                <div className='footer w-9/10 h-15/100 flex flex-row justify-center items-center'>
                    <CustomButton 
                    text={(lastQuestion)?'Submit':'Next'}
                    onClickFunction={goToNext}
                    submitQuiz={lastQuestion}/>
                </div>
            </div>
        )
    }
}

export default QuestionBody;