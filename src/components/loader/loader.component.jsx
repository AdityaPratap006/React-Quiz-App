import React from 'react';

import './loader.styles.scss';

const Loader = ({basicLoader}) => (
    <div className='loader' style={(basicLoader)?{'height':'90%','width':'80%'}:{'width':'100%'}}  >
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