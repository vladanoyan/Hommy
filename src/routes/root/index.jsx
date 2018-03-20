import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../../reducer';
import Mp from '../../resource/images/mp3.mp3';
import Mp32 from '../../resource/images/mp32.mp3';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const TRACKLIST = [
  {
    id: 1,
    name: 'music',
    source: Mp,
  },
  {
    id: 2,
    name: 'music2',
    source: Mp32,
  },
];

class Root extends React.Component {
  componentDidMount() {
    const audio = new Audio();
    audio.src = TRACKLIST[0].source;
    audio.loop = true;
    audio.controls = true;
    audio.play();
  }
  render() {
    const { route } = this.props;

    return (
      <div>
        <Provider store={store}>
          {renderRoutes(route.routes)}
        </Provider>
      </div>
    );
  }
}

Root.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default Root;
