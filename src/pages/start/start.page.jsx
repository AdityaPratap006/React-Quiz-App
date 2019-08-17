import React from 'react';

import './start.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';

const StartPage = ({changeRoute}) => (
    <div className='start-page'>
        <div className='header'>
            <div className='profile-pic'>
                <img src='https://robohash.org/8?set=set5' alt='profile'/>
            </div>
        </div>
        <div className='footer'>
            <CustomButton 
                text={`Let's Start!`}
                onClickFunction={() => changeRoute('quiz')}
                
            />
        </div>
    </div>
)

export default StartPage;