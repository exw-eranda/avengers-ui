import React, { Component, Fragment } from "react";
import image from "./image.png"

class Avenger extends Component {

    state = {};

    showMovies = () => {
        if(this.props.avenger.movies.length === 0 ) return <p>No Movies Available!</p>
           return this.props.avenger.movies.map((movie,index) => (<li key={index}>{movie}</li> ))
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
                        <h5 className="card-title">{this.props.avenger.name}</h5>
                        <p className="card-text">{this.props.avenger.birthName}</p>
                        <ul>{this.showMovies()}</ul>
                        <button className="btn btn-primary" onClick={() => this.likeAvenger(1)}>
                            Like <span className="badge bg-dark">{this.props.avenger.likeCount}</span>
                        </button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Avenger;