import React from 'react';

import './start.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';

const StartPage = ({changeRoute}) => (
    <div className='start-page bg-white flex flex-col justify-center items-center rounded-lg shadow-xl'>
        <div className='header flex flex-col justify-center items-center pt-4'>
            <div className='profile-pic flex flex-col justify-center items-center rounded-full bg-gray-400 border border-pink-900'>
                <img className=''  src='https://robohash.org/8?set=set5' alt='profile'/>
            </div>
        </div>
        <div className='footer flex flex-col justify-center items-center'>
            <CustomButton 
                text={`Let's Start!`}
                onClickFunction={() => changeRoute('quiz')}
                
            />
        </div>
    </div>
)

export default StartPage;