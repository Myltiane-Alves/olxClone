import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div>
            <h1>Página não Encontrada</h1>

            <Link to="/">Volta para a Home</Link>
        </div>
    )
};

export default NotFound;