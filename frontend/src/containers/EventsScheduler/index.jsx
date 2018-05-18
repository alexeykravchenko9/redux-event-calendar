import React, { Component } from 'react';
import { connect } from "react-redux";

// Components
import Table from '../Table/index.jsx';
import LoginForm from '../LoginForm/index.jsx';
import ComposerEvent from '../ComposerEvent/index.jsx';



class EventsScheduler extends Component {

    state = {
      events: [],
    };


    render() {
        const sessionUser = false;

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


const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {


};

export default connect(mapStateToProps, mapDispatchToProps)(EventsScheduler);

