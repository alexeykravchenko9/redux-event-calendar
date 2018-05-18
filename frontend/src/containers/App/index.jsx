import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from "../../store/configureStore";

import Styles from './styles.scss';

// Components
import EventsScheduler from '../EventsScheduler/index.jsx';



const store = configureStore();
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