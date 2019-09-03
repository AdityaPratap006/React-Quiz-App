import React from 'react';

import './answer-option.styles.scss';

const AnswerOption = ({ optionIndex,text,checked, selectOption, timeUp, correctAnswer, disable}) => (
    <div className='answer-option flex' onClick={(!timeUp)?selectOption:null}>
        <label className={`container flex flex-row justify-start items-center
        
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
            
            <div className = 'answer-btn flex flex-row justify-center items-center'>
                 <div className={`custom-radio rounded-full flex flex-row justify-center items-center ${(checked)?'dark':'light'} ${(disable)?'disable':''}`}  >
                        <div className={(checked)?'check':''}>

                        </div>
                 </div>
            </div>
            <div className='answer-text'>
                <h5>{text}</h5>
            </div>
        </label>
    </div>
)

export default AnswerOption;