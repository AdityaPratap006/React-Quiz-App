import React from 'react';

import './timer.styles.scss';

const Timer = ({secondsLeft, totalTime, timeUpAlert}) =>  {
    

    const progressBar = document.querySelector('#filled');
     
     if(progressBar){
        progressBar.style.background = 'purple';
         progressBar.style.flexBasis = `${((secondsLeft/totalTime)*100)}%`;
        
        /* if(progressBar.style.flexBasis <= '30%'){
            progressBar.style.background = 'red';
         }*/
         
     }

    return (

            <div className='timer'>
                <div className='clock'>
                    <p>00:{secondsLeft>=10?secondsLeft:`0${secondsLeft}`}</p>
                </div>
                <div className='time-left'>
                    <div className='bar'>
                        <div id='filled'>

                        </div>

                    </div>
                   
                </div>
                <h4>{timeUpAlert}</h4>
            </div>
)}
    


export default Timer;