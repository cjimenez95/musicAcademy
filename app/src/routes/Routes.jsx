//dependencies
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

//components    
import App from '../App';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Galey from '../pages/Galery';
import AboutUs from '../pages/AboutUs';
import Page404 from '../pages/Page404';
import Courses from '../pages/Courses';

class AppRoutes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/galery" component={Galey} />
                    <Route exact path="/aboutUs" component={AboutUs} />
                    <Route exact path="/courses" component={Courses} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={Page404}/>
                </Switch>
            </App>
        );
    }
}

export default AppRoutes;
