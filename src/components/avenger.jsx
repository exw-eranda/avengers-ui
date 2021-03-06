import React, { Component, Fragment } from "react";

class Avenger extends Component {

    state = {};

    showMovies = () => {
        if (this.props.avenger.movies.length === 0) return <p>No Movies Available!</p>
        return this.props.avenger.movies.map((movie, index) => (<li key={index}>{movie}</li>))
    };
   
    render() {
        return (
            <Fragment>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={this.props.avenger.imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.avenger.name}</h5>
                        <p className="card-text">{this.props.avenger.birthName}</p>
                        <ul>{this.showMovies()}</ul>
                        <button className="btn btn-primary" onClick={this.props.onLike}>
                            Like <span className="badge bg-dark">{this.props.avenger.likeCount}</span>
                        </button>
                        <button className="btn btn-danger" onClick={this.props.onDelete} >
                            Delete 
                            {/* <span className="badge bg-dark">{this.props.avenger.likeCount}</span> */}
                        </button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Avenger;