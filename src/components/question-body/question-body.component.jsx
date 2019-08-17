import React from 'react';

import './question-body.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import AnswerBox from '../answer-box/answer-box.component';

class QuestionBody extends React.Component{

    render() {

        const {question, timeUp, goToNext, lastQuestion, increaseScore, decreaseScore} = this.props;
        return (
            <div className='question-body'>
                <div className='question-text'>
                    <h3>Q. {question.questionText}</h3>
                </div>
                 <AnswerBox 
                    options = {question.options} 
                    correctAnswer={question.correctOption}
                    timeUp={timeUp}
                    increaseScore={increaseScore}
                    decreaseScore={decreaseScore}
                />
                <div className='footer'>
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