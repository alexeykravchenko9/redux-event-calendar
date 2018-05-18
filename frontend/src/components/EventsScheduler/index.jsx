import React, { Component } from 'react';
import { connect } from "react-redux";

// import Styles from './styles.scss';

// Components
import Table from '../Table/index.jsx';
import LoginForm from '../LoginForm/index.jsx';
import ComposerEvent from '../ComposerEvent/index.jsx';

// Utils
import config from '../../../../config/config';


class EventsScheduler extends Component {

    state = {
      events: [],

    };


    render() {
        // console.log(this.props);
        const sessionUser = true;

        return(

                <section>

                    <Table />

                    { sessionUser ? (
                        <ComposerEvent />
                    ) : (
                        <LoginForm />
                    )}


                </section>
        )
    }
}

export default connect()(EventsScheduler);

