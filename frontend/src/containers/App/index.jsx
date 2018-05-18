import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../reducers/reducers';

import Styles from './styles.scss';

// Components
import EventsScheduler from '../../components/EventsScheduler/index.jsx';
// Utils
// import config from '../../../config/config';


const store = createStore(reducer);
window.store = store;


export default class App extends Component {

    render() {

        return(
            <Provider store={store}>
                <section className={Styles.recApp}>

                    <EventsScheduler />

                </section>
            </Provider>
        )
    }
}