import React from 'react';

import './start.styles.scss';

import CustomButton from '../../components/custom-button/custom-button.component';

const StartPage = ({changeRoute}) => (
    <div className='pt-8 pb-8 md:w-2/5 xs:w-4/5 bg-white flex flex-col justify-center items-center rounded-lg shadow-xl'>
        <div className='pt-2 pb-6 w-full xs:px-1 flex flex-col justify-center items-center'>
           
                <img className='mt-2   rounded-full bg-black mx-1 border border-pink-900 '  src='https://robohash.org/8?set=set5' alt='profile'/>
            
        </div>
        <div className='footer w-full flex flex-col justify-center items-center'>
            <CustomButton 
                text={`Let's Start!`}
                onClickFunction={() => changeRoute('quiz')}
                
            />
        </div>
    </div>
)

export default StartPage;