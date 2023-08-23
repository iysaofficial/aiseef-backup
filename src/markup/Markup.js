import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeButton from './Element/ThemeButton/ThemeButton';

import Homepage from './Pages/Homepage1';
import Error403 from './Pages/Error/Error403';
import Error404 from './Pages/Error/Error404';
import Error405 from './Pages/Error/Error405';
import Faqs from './Pages/Faq';
import Contact from './Pages/Contact';
import ProtfolioFullWidth from './Pages/Protfolio/ProtfolioFullWidth';
import Listwinner from './Pages/Protfolio/Listwinner';

import ScrollToTop from './Element/ScrollToTop';

class Markup extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div className="page-wraper">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/error-403" exact component={Error403} />
            <Route path="/error-405" exact component={Error405} />
            <Route path="/faqs" exact component={Faqs} />
            <Route path="/contact" exact component={Contact} />
            <Route
              path="/gallery-event"
              exact
              component={ProtfolioFullWidth}
            />
            <Route
              path="/Listwinner"
              exact
              component={Listwinner}
            />
            <Route path="*" exact={true} component={Error404} />
          </Switch>
        </div>
        <ScrollToTop />
        <ThemeButton />
      </BrowserRouter>
    );
  }
}

export default Markup;
