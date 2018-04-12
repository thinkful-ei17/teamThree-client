import React from 'react';
import { Link } from 'react-router-dom';

import requiresLogin from './requires-login';
import Button from './button';

export function CompletedLevelOne(props){

    return (
        <div className='viewport'>
            <h1 className='primary-heading primary-text-color'>
                Congratulations!
            </h1>
            <h2 className='secondary-heading'>
                You have completed Level 1 of Centsible.
            </h2>
            <Link to='/portfolio'>
                <Button class='green-button' name='Return to Portfolio' handleClick={ () => false} />
            </Link>
            <Link to='/lvl2-introduction'>
                <Button class='blue-button' name='Proceed to Level 2' handleClick={ () => false} />
            </Link>
        </div>
    )
}

export default requiresLogin()(CompletedLevelOne)