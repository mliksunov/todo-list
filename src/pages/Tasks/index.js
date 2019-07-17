import React from 'react';
import {get} from 'lodash';
import { Link } from "react-router-dom";

function Tasks (props) {
    const id = get(props, 'match.params.id', {});

    return (
        <div>
            Tasks
            {id}
            <Link to='/about' >About</Link>
        </div>
    );
}

export default Tasks;