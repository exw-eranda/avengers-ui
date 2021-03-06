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
                                onLike={() => this.likeAvenger(avenger)}
                                onDelete={() => this.deleteAvenger(avenger)}
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
        let avengers = data.map(avenger => {
            return {
                id: avenger._id,
                imgUrl: avenger.imgUrl,
                name: avenger.name,
                birthName: avenger.birthname,
                likeCount: avenger.likeCount,
                movies: avenger.movies
            }
        });
        this.setState({ allAvengers: avengers });
    }


    async likeAvenger(avenger) {
        await axios.put(`http://localhost:5000/api/avengers/${avenger.id}`, {
            likeCount: avenger.likeCount + 1
        });

        //get the coppy of avenger array and update it
        let updatedAvenger = [...this.state.allAvengers];
        let index = updatedAvenger.indexOf(avenger);
        updatedAvenger[index] = { ...avenger };
        updatedAvenger[index].likeCount++;
        this.setState({ allAvengers: updatedAvenger });
    }

    async deleteAvenger(avenger) {
        await axios.delete(`http://localhost:5000/api/avengers/${avenger.id}`);
        //get the coppy of avenger array and update it
        let updatedAvenger = [...this.state.allAvengers];
        let index = updatedAvenger.indexOf(avenger);
        //   updatedAvenger[index] = {...avenger};
        updatedAvenger.splice(index, 1);
        //   updatedAvenger[index].likeCount ++ ;
        this.setState({ allAvengers: updatedAvenger });
    }

}
export default Avengers
