import React from 'react';

import './radio-button.styles.scss';

const RadioButton = ({checked,disable}) => (
    <div className = 'answer-btn  xs:w-1/5 h-full flex flex-row justify-center items-center'>
        <div className={`custom-radio rounded-full flex flex-row justify-center items-center ${(checked)?'dark':'light'} ${(disable)?'disable':''}`}  >
            <div className={(checked)?'check':''}>

            </div>
        </div>
    </div>
);

export default RadioButton;

