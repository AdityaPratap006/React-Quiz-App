import React from 'react';

import './loader.styles.scss';

const Loader = ({basicLoader}) => (
    <div className='loader  flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl' style={(basicLoader)?{'height':'90%','width':'80%'}:{'width':'100%'}}  >
        <div className={ `lds-roller`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);

export default Loader;