import React, { Component, Fragment } from "react";
import Avenger from "./avenger"

class Avengers extends Component {
    state = {
        allAvengers: [
            { id: 1, likeCount: 5 },
            { id: 2, likeCount: 10 },
            { id: 3, likeCount: 15 }
        ]
    };
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.allAvengers.map((avenger) => (
                        <div className="col" key={avenger.id}>
                            <Avenger />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default Avengers
