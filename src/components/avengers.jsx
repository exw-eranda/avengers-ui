import React, { Component } from "react";
import Avenger from "./avenger"
import axios from 'axios';

class Avengers extends Component {
    state = {
        allAvengers: [],
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.allAvengers.map((avenger) => (
                        <div className="col" key={avenger.id}>
                            <Avenger
                                avenger={avenger}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    async componentDidMount() {
        // const avenger = await axios.get("http://localhost:5000/api/avengers");
        //require {data} obj
        const { data } = await axios.get("http://localhost:5000/api/avengers");
        let avengers = data.map( avenger => {
            return {
                id: avenger._id,
                imgUrl: avenger.imgUrl,
                name: avenger.name,
                birthName: avenger.birthname,
                likeCount: avenger.likeCount,
                movies:avenger.movies
            }
        });
        this.setState({ allAvengers: avengers});
    }
}
export default Avengers
