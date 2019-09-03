import  React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({text, onClickFunction, submitQuiz}) => (
    <div 
        className={`custom-button flex flex-row justify-center items-center ${submitQuiz?'submit-quiz':null}`}
        onClick={onClickFunction}
    >
        <span>{text}</span>
    </div>
)

export default CustomButton;