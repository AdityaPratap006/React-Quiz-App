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

            <div className='timer bg-white flex flex-col justify-center items-center rounded-lg shadow-xl'>
                <div className='clock flex flex-row justify-center items-center'>
                    <p>00:{secondsLeft>=10?secondsLeft:`0${secondsLeft}`}</p>
                </div>
                <div className='time-left flex flex-col justify-center items-center'>
                    <div className='bar flex flex-row justify-start items-center overflow-hidden'>
                        <div id='filled'>

                        </div>

                    </div>
                   
                </div>
                <h4 className=''>{timeUpAlert}</h4>
            </div>
)}
    


export default Timer;