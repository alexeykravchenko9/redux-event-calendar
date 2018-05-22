import React, { Component } from "react";
import Styles from "./styles.scss";

export default class Event extends Component {
    constructor(props){
        super(props);

        this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
    }

    handleRemoveEvent(e){
        e.preventDefault();
        this.props.removeEventItem(this.props.data._id);

        console.log(this.props.data._id, 'clicked');

    }

    render(){
        const { title, start, duration, width } = this.props.data;

        const startTime = (start >= 600) ? start - 600 : start;

        return(
            <section>
                    <div
                        className={Styles.recEventsColumnItem}
                        style = {{ top:startTime + 2, height: duration - 1, width:`${width}%` }}>
                        {title}

                        <a className={ Styles.recEventsColumnItemRemove } onClick={ this.handleRemoveEvent } title={"Remove Event"}>x</a>

                    </div>


            </section>
        )
    }
}