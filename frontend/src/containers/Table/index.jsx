import React, { Component } from "react";
import Styles from "./styles.scss";
import { connect } from "react-redux";


// Components
import Event from '../Event/index.jsx';

class Table extends Component {
    constructor(props){
        super(props);

        this.handleAddNew = this.handleAddNew.bind(this);
    }

    handleAddNew(e){
        this.props.addNewItem({ name: 'Event name' });
    }



    render(){
        console.log(this.props, 'Events props');

        return(
            <section>

                <h1 className = {Styles.recGeneral}>Daily Event Calendar</h1>

                <div className = {Styles.recColumnParent}>
                    {/*<button onClick={ this.handleAddNew }>Add new item</button>*/}
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
        events: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem: (args) => dispatch({ type: 'ADD_NEW_ITEM', payLoad: args})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);