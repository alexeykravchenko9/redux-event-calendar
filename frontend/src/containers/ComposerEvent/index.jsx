import React, { Component } from 'react';
import Styles from './styles.scss';
import { connect } from 'react-redux';



class ComposterEvent extends Component {
    constructor(props){
        super(props);
        this.handleFormSubmitEvent = this._handleFormSubmitEvent.bind(this);
        this.handleEventField = this._handleEventField.bind(this);

        this.state = {
            title: '',
            hours: 0,
            minutes: 0,
            owner:'',
            status:''
        }

    }



    _handleFormSubmitEvent(e){

        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3032/api/events', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        const { title, hours, minutes, owner } = this.state;

        let obj = { title: title, start: hours, duration: minutes, owner: 'Alexey Redux' };

        xhr.send(JSON.stringify(obj));

        xhr.onload = () => {
            this.setState({
                title: '',
                hours: 0,
                minutes: 0,
                status: "Event succesfully send"
            });
        };

    }

    _handleEventField(e){
        e.preventDefault();
        const { target: {id, value} } = e;

        if (id === "minutes"){
            if( value <= 60 ){
                this.setState({ [id]: value });
                e.currentTarget.style.borderColor = '#cadcea';
            } else {
                e.currentTarget.style.borderColor = 'red';
            }

        } else if(id === "eventHours"){

            this.setState({ hours: value });

        } else if(id === "EventTitle"){

            this.setState({ title: value });
        }

        console.log(this.state);

    }


    render(){
        const { title, hours, minutes, owner } = this.state;

        let h = 0,
            m = 0,
            mSelect2 = 0;

        let tags = [],
            tagsMinutes = [];

        // Generate option tag
        while (h < 10) {
            tags[h] = <option value={ (h === 0 ) ? 0 : m += 60 }> {h + 8} {(h < 4 ) ? 'am' : 'pm'}</option>;
            h++;
        }

        return(
            <div className={Styles.recCompForm}>

                <p>{ this.state.status }</p>

                <h3>Add Event to the Board</h3>
                <form onSubmit={this.handleFormSubmitEvent}>
                    <div className={ [Styles.recCompFormField, Styles.w50].join(' ') }>
                        <input type="text" id="EventTitle" placeholder={ 'Title' } onChange={this.handleEventField} value={ title } />
                    </div>


                    <div className={ [Styles.recCompFormField, Styles.recCompFormSelect].join(' ') }>
                        <label htmlFor="startHour">Hours</label>

                        <select id="eventHours" onChange={this.handleEventField} >
                            { tags }
                        </select>

                    </div>

                    <div className={ [Styles.recCompFormField, Styles.recCompFormSelect].join(' ') }>

                        <label htmlFor="startHour">Minutes</label>
                        <input
                            type="number"
                            min="00"
                            max="60"
                            step="00"
                            id="minutes"
                            onChange={ this.handleEventField }
                            value={ minutes }
                        />


                    </div>

                    <div className={ Styles.recCompFormField }>
                        <input type="submit" value={'Submit'}  />
                    </div>


                </form>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ComposterEvent);