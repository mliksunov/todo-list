import React from 'react';
import { MainContent } from '../../routes'

function Main ({tasks}) {
    return (
        <main className='site-content'>
            <MainContent tasks={tasks} />
        </main>
    );
}

export default Main;
