import React, { Component, Fragment } from "react";
import Avenger from "./avenger"

class Avengers extends Component {
    state = {};
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Avenger />
                    </div>
                    <div className="col">
                        <Avenger />
                    </div>
                    <div className="col">
                        <Avenger />
                    </div>
                </div>
            </div>
        )
    }
}
export default Avengers
