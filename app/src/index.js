//dependencies
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//styles
import './index.css';

//routes
import AppRoutes from './routes/Routes';

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);

