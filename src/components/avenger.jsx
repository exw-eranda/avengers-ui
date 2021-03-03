import React, { Component, Fragment } from "react";
import image from "./image.png"

class Avenger extends Component {

    state = {
        movies: ["First Avenger", "Infinity War", "EndGane"],
        likeCount: 0
    };

    showMovies = () => {
        if(this.state.movies.length === 0 ) return <p>No Movies Available!</p>
           return this.state.movies.map((movie,index) => (<li key={index}>{movie}</li> ))
    };

    likeAvenger = (addCounter) => {
        this.setState({
            likeCount : this.state.likeCount + addCounter
        });
    };

    render() {
        return (
            <Fragment>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <ul>{this.showMovies()}</ul>
                        <a href="#" className="btn btn-primary" onClick={() => this.likeAvenger(1)}>
                            Like <span className="badge bg-dark">{this.state.likeCount}</span>
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Avenger;