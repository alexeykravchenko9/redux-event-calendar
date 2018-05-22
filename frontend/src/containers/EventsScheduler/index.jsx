import React, { Component } from 'react';
import { connect } from "react-redux";

// Components
import Table from '../Table/index.jsx';
import LoginForm from '../LoginForm/index.jsx';
import ComposerEvent from '../ComposerEvent/index.jsx';


// Actions
import { setUser } from "../../actions/users";

//utils
import checkUser from "../../utils/checkUser";
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
        checkUser().then( user => {

            if(Object.keys(user).length > 0) {
                this.props.setUser(user.sessionUserID);
            } else {
                return {};
            }

        }).catch( e => console.error(e));

    }
    componentWillReceiveProps(){
        this.setState({
            loggedCookie: (Number(getCookies('authstat')) === 1)
        })
    }

    render() {

        const { users, setUser } = this.props;
        const { loggedCookie } = this.state;

        const formRender = (loggedCookie) ? <ComposerEvent /> : <LoginForm setUser = { setUser } />;
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
    setUser: (user) => dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsScheduler);

