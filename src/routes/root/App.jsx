import React from 'react';
import { renderRoutes } from 'react-router-config';
import FormController from '../../lib/FormController';
import NavBar from '../../components/ListingNavbar';
import Footer from '../../components/Footer';


class App extends FormController {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          {renderRoutes(this.props.route.routes)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
