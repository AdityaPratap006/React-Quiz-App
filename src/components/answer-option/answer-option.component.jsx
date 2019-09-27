import React from 'react';

import './answer-option.styles.scss';
import RadioButton from '../radio-button/radio-button.component';


const AnswerOption = ({ optionIndex,text,checked, selectOption, timeUp, correctAnswer, disable}) => (
    <div className='answer-option w-full h-1/4 flex  flex-row justify-start items-center' onClick={(!timeUp)?selectOption:null}>
        <label className = {
             ` answer-container w-full h-full flex flex-row justify-start items-center

             ${((text === correctAnswer) && timeUp )
                ?'markGreen'
                :''
            }

            ${
                (checked && timeUp && (text !== correctAnswer))
                ?'markRed'
                :''
            }
            `
        }>
            
            <RadioButton checked={checked} disable={disable}/>

            <div className='answer-text  xs:w-4/5 '>
                <h5>{text}</h5>
            </div>
        </label>
    </div>
)

export default AnswerOption;