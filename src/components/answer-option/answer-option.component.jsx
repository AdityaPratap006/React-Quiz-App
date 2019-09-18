import React from 'react';

import './answer-option.styles.scss';

 

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
            
            <div className = 'answer-btn xs:w-35/100 sm:w-15/100 h-full flex flex-row justify-center items-center'>
                 <div className={`custom-radio rounded-full flex flex-row justify-center items-center ${(checked)?'dark':'light'} ${(disable)?'disable':''}`}  >
                        <div className={(checked)?'check':''}>

                        </div>
                 </div>
            </div>
            <div className='answer-text xs:w-65/100 sm:w-85/100'>
                <h5>{text}</h5>
            </div>
        </label>
    </div>
)

export default AnswerOption;