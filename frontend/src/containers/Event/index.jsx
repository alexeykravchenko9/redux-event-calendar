import React, { Component } from "react";
import Styles from "./styles.scss";

export default class Event extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section>
                    <div className={Styles.recEventsColumnItem} style = {{ top:30, position:'relative', height: 180, width:'50%' }}>Plan day</div>
            </section>
        )
    }
}