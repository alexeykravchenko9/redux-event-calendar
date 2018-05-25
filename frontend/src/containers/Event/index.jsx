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
    }

    render(){
        const { title, start, duration, width, left } = this.props.data;

        const startTime = (start >= 600) ? start - 600 : start;
        const titleFormated = (title.replace(/\s/g, '').length > 10) ? title.slice(0, 10) + '...' : title;


        return(
                    <div
                        className={Styles.recEventsColumnItem}
                        title={title}
                        style = {{ left: left + '%', top:startTime + 2, height: duration - 1, width: 100 / width + '%' }}>
                        {titleFormated}

                        <a className={ Styles.recEventsColumnItemRemove } onClick={ this.handleRemoveEvent } title={"Remove Event"}>x</a>

                    </div>
        )
    }
}