import React from "react";
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import PortfolioPage from './PortfolioPage';
import ContactPage from './ContactPage'
import {
    BrowserRouter as Router,
    Route,
    Switch
  }
    from 'react-router-dom';
  
  class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
            {/* render method to display content from component */}
            {/*  spread props ---properties of the object that you pass in are copied onto the component's props */}
            <Route path="/ResumePage" render={(props) => <ResumePage {...props} isAuthed={true} />} />
            <Route path="/PortfolioPage" render={(props) => <PortfolioPage {...props} isAuthed={true} />} />
            <Route path="/ContactPage" render={(props) => <ContactPage {...props} isAuthed={true} />} />
            <Route path="/" render={(props) => <HomePage {...props} isAuthed={true} />} />
          </Switch>
        </Router>
      );
    }
  }
  
  export default Routes;

