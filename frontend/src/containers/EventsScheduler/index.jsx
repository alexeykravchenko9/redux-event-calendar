import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

// Components
import Table from '../Table/index.jsx';
import LoginForm from '../LoginForm/index.jsx';
import ComposerEvent from '../ComposerEvent/index.jsx';


// Actions
import { checkAuthUser, setLogin } from "../../actions/users";

//utils
import getCookies from "../../utils/getCookies";

class EventsScheduler extends Component {


    constructor(props){
        super(props);

        this.state = {
            events: [],
            loggedCookie: (Number(getCookies('authstat')) === 1)
        };

    }

    componentWillMount(){
        this.props.checkAuthUser();
    }
    componentWillReceiveProps(){
        this.setState({
            loggedCookie: (Number(getCookies('authstat')) === 1)
        })
    }

    render() {

        const { users, setUser, setLogin } = this.props;
        const { loggedCookie } = this.state;

        const formRender = (loggedCookie) ? <ComposerEvent />
            : <LoginForm
                setLogin = { setLogin }
                setUser = { setUser }
                error = { users.error }
            />;
        return(

                <section>

                    { loggedCookie && <Table /> }

                    { formRender }


                </section>
        )
    }
}


const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    setLogin: bindActionCreators(setLogin, dispatch),
    checkAuthUser: bindActionCreators(checkAuthUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsScheduler);

