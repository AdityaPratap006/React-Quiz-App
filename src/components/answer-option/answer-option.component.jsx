import React from 'react';

import './answer-option.styles.scss';

const AnswerOption = ({ optionIndex,text,checked, selectOption, timeUp, correctAnswer, disable}) => (
    <div className='answer-option' onClick={(!timeUp)?selectOption:null}>
        <label className={`container 
        
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
            
            <div className = 'answer-btn'>
                 <div className={`custom-radio ${(checked)?'dark':'light'} ${(disable)?'disable':''}`}  >
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