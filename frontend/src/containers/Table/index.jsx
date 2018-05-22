import React, { Component } from "react";
import Styles from "./styles.scss";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

// Components
import Event from '../Event/index.jsx';


// Actions
import { makeLogout } from "../../actions/users";


class Table extends Component {
    constructor(props){
        super(props);

        this.handleAddNew = this.handleAddNew.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleAddNew(e){
        this.props.addNewItem({ name: 'Event name' });
    }

    handleLogout(e){
        this.props.makeLogout()
    }



    render(){
        console.log(this.props, 'Events props');

        return(
            <section>

                <div className={ Styles.recEventsTopTitle }>
                    <h1 className = { Styles.recGeneral }>Daily Event Calendar</h1>
                    <span className={ Styles.recLogoutBtn } onClick={ this.handleLogout  }>Logout</span>
                </div>




                <div className = {Styles.recColumnParent}>

                    {/* LEFT COLUMN */}
                    <div className={Styles.recColumnOne}>

                        <div className={Styles.recRow}>

                            <div className={Styles.recRowItem}>

                                <div className={ Styles.recRowLabels }>

                                    <span>8:00</span>

                                    <span>8:30</span>

                                </div>

                            </div>

                            <div className={Styles.recRowItem}>

                                <div className={ Styles.recRowLabels }>

                                    <span>9:00</span>

                                    <span>9:30</span>

                                </div>

                            </div>


                            <div className={Styles.recRowItem}>

                                <div className={ Styles.recRowLabels }>

                                    <span>10:00</span>

                                    <span>10:30</span>

                                </div>

                            </div>


                            <div className={Styles.recRowItem}>
                                <div className={ Styles.recRowLabels }>

                                    <span>11:00</span>

                                    <span>11:30</span>

                                </div>
                            </div>

                            <div className={Styles.recRowItem}>
                                <div className={Styles.recRowLabels}>

                                    <span>12:00</span>

                                    <span>12:30</span>

                                </div>

                                <span className={Styles.recRowLastLabel}>1:00</span>
                            </div>




                        </div>

                        <div className={Styles.recEventsColumn}>

                            <Event key="" />

                        </div>


                    </div>


                    {/* RIGHT COLUMN */}

                    <div className={Styles.recColumnTwo}>

                        <div className={Styles.recRow}>

                            <div className={Styles.recRowItem}>

                                <div className={Styles.recRowLabels}>

                                    <span>1:00</span>

                                    <span>1:30</span>

                                </div>

                            </div>

                            <div className={Styles.recRowItem}>

                                <div className={Styles.recRowLabels}>

                                    <span>2:00</span>

                                    <span>2:30</span>

                                </div>

                            </div>


                            <div className={Styles.recRowItem}>

                                <div className={Styles.recRowLabels}>

                                    <span>3:00</span>

                                    <span>3:30</span>

                                </div>

                            </div>


                            <div className={Styles.recRowItem}>
                                <div className={Styles.recRowLabels}>

                                    <span>4:00</span>

                                    <span>4:30</span>

                                </div>
                                <span className={Styles.recRowLastLabel}>5:00</span>
                            </div>

                        </div>

                        <div className={Styles.recEventsColumn}>

                            <Event key={`right_col_items`}/>

                        </div>

                    </div>

                </div> {/* recColumnParent */}

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events,
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        makeLogout: bindActionCreators(makeLogout, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);