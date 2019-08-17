import React from 'react';

import './end.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';

const EndPage= ({score, totalScore, changeRoute, resetScore}) => {
    
    let performanceText=null;
    const percentage = (score/totalScore)*100;
    if( percentage>=90){
        performanceText= <h2 style={{color:'#43a047'}}> Amazing! </h2>
    }
    else if (  percentage < 90 && percentage>=70){
        performanceText= <h2 style={{color:'#66bb6a'}}> Good!</h2>
    }
    else if( percentage < 70 && percentage >= 45){
        performanceText = <h2 style={{color:'#ffa726'}}>{`Average :)`}</h2>
    }
    else {
         performanceText = <h2 style={{color:'#f44336'}}>{`Below Average :(`}</h2>
    }

    return (
     <div className='end-page'>
        <div className='score'>
            <h4>Your score is:</h4>
            <h1>{score}/{totalScore}</h1>
        </div>
        <div className='performance'>
            <h4>Your performance was:</h4>
            {performanceText}
        </div>
        <div className='footer'>
            <CustomButton
                text={'Play Again'}
                onClickFunction={()=> {
                    changeRoute('start');
                    resetScore();
                }}
            />
        </div>
    </div>
)}

export default EndPage;