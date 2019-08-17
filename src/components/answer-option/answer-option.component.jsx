import React from 'react';

import './answer-option.styles.scss';

const AnswerOption = ({ optionIndex,text,checked, selectOption, timeUp, correctAnswer}) => (
    <div className='answer-option'>
        <label className={`container 
        
            ${((optionIndex === correctAnswer) && timeUp )
                ?'markGreen'
                :''
            }

            ${
                (checked && timeUp && (optionIndex !== correctAnswer))
                ?'markRed'
                :''
            }
            
            `
        }>
            
            <div className = 'answer-btn'>
                 <div className={`custom-radio ${checked?'dark':'light'}`} onClick={(!timeUp)?selectOption:null} >
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