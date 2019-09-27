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

            <div className='timer w-full  h-1/5 bg-white flex flex-col justify-center items-center rounded-lg shadow-xl'>
                <div className='clock w-3/5 h-1/2 flex flex-row justify-center items-center'>
                    <p className='text-2xl text-pink-900'>00:{secondsLeft>=10?secondsLeft:`0${secondsLeft}`}</p>
                </div>
                <div className='time-left xs:w-4/5 sm:w-3/5 h-1/2 flex flex-col justify-center items-center'>
                    <div className='bar w-4/5 p-1 border border-pink-900 rounded-full flex flex-row justify-start items-center overflow-hidden'>
                        <div id='filled' className='rounded-full xs:h-5  sm:h-6 bg-pink-900'>

                        </div>

                    </div>
                   
                </div>
                <h4 className='font-normal'>{timeUpAlert}</h4>
            </div>
)}
    


export default Timer;