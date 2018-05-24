import React, { Component } from "react";
import Styles from "./styles.scss";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import { API_EXPORT_CALENDAR } from "../../constants/api";

// Components
import Event from '../Event/index.jsx';

// Actions
import { setLogout } from "../../actions/users";
import { fetchAllEvents, removeEventItem } from "../../actions/events";



class Table extends Component {
    constructor(props){
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
        this.handleExport = this.handleExport.bind(this);
    }

    componentWillMount(){
        this.props.fetchAllEvents();
    }

    handleLogout(e){
        this.props.setLogout()
    }

    handleExport(e){
        window.open(API_EXPORT_CALENDAR,'_blank');
    }

    componentWillReceiveProps(){

    }



    render(){

        const { items } = this.props.events;
        let eventLeft = [];
        let eventRight = [];


        for(let i = 0; i < items.length; i++){
            if( items[i].start <= 600 ) {
                eventLeft.push({ width: 1, left: 0, ...items[i]});
            } else {
                eventRight.push(items[i]);
            }
        }

        console.log(eventLeft, 'eventLeft')




        let renderReadyLeft = [];
        let timeslots = [];

        for(let i=0; i < 600; i++){
            timeslots[i] = [];
        }

        for(let j = 0; j < eventLeft.length; j++){

            for(let i=eventLeft[j].start; i < eventLeft[j].start + eventLeft[j].duration; i++ ){
                timeslots[i].push(eventLeft[j]);
            }

        }
        console.log(timeslots, 'timeslots');
        for(let t = 0; t < 600; t++){
            let countTimes = timeslots[t].length;

            if (countTimes > 0) {

                for(let n=0; n < countTimes; n++){


                    if(countTimes > 1){
                        // timeslots[t][n].width = countTimes;
                        if(n === countTimes - 1){
                            timeslots[t][n].left = 50;
                        }
                    }

                }

            }

        }

        console.log(eventLeft, 'eventLeft');





            // for(let i = 0; i < eventLeft.length; i++){
            //
            //     const itemSumm = eventLeft[i].start + eventLeft[i].duration;
            //
            //     const nextItemStart = (eventLeft[i + 1]) ? eventLeft[i + 1].start : 0;
            //     const previtemStart = (eventLeft[i - 1]) ? eventLeft[i - 1].start : 0;
            //
            //     const prevItemSumm = (eventLeft[i - 1]) ? eventLeft[i - 1].start + eventLeft[i - 1].duration : '';
            //     const nextItem = eventLeft[i + 1].start;
            //
            //     if(itemSumm >= nextItemStart || itemSumm <= previtemStart ) {
            //
            //         renderReadyLeft.push({ width: 50, ...eventLeft[i]});
            //
            //     } else {
            //
            //         renderReadyLeft.push({ width: 100, ...eventLeft[i]});
            //     }
            //
            // }

        console.log(renderReadyLeft, 'renderReadyLeft');

        //
        // console.log(renderLeft, 'renderEventLeft');

        // const renderEventLeft = eventLeft.map( (item, index, arr) => {
        //     let width;
        //     const nextItem = arr[index+1].start;
        //     const currentItem = item.start;
        //     console.log(nextItem, currentItem, 'prev - next');
        //
        //
        //     if(arr[index+1]){
        //         if(item.start === arr[index+1].start){
        //             width = 50;
        //             return <Event key={ 'a' + index } data={ item } width={width} />;
        //         } else {
        //
        //             width = 100;
        //
        //         }
        //     }
        //
        //     return <Event key={ 'a' + index } data={ item } width={width} />;
        //
        //
        //
        //
        // });


        const renderEventLeft = eventLeft.map( (item, index, arr) => {
            // let nextWidthItem;
            // let leftVal = 0;
            //
            // if(arr[index + 1]){
            //     nextWidthItem = arr[index + 1].width;
            // }
            //
            // if(item.width === nextWidthItem){
            //     leftVal = 50;
            // }


            return <Event key={ item._id }
                   removeEventItem = { this.props.removeEventItem }
                   data={ item } />;

        });

        // const renderEventLeft = eventLeft.map( (item, index) => <Event key={ item._id }
        //                                                                removeEventItem = { this.props.removeEventItem }
        //                                                                data={ item } />);

        const renderEventRight = eventRight.map( (item, index) => <Event key={ item._id  }
                                                                         removeEventItem = { this.props.removeEventItem }
                                                                         data={ item } />);


        return(
            <section>

                <div className={ Styles.recEventsTopTitle }>
                    <h1 className = { Styles.recGeneral }>Daily Event Calendar</h1>
                    <span className={ Styles.recLogoutBtn } onClick={ this.handleExport  }>Export JSON</span>
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
                            { renderEventLeft }
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
                            { renderEventRight }
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
        setLogout: bindActionCreators(setLogout, dispatch),
        fetchAllEvents: bindActionCreators(fetchAllEvents, dispatch),
        removeEventItem: bindActionCreators(removeEventItem, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);