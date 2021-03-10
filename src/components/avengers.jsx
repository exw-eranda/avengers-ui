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
                                onDelete={() => this.deleteAvenger(avenger.id)}
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
        const { data } = await axios.get(`http://localhost:5000/api/avengers`,{
            headers: {
                "x-jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDg2ZDQ5NmE4NWVmM2NjMDYyZTc0ZCIsImVtYWlsIjoiamhvbkBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTUzNjI0NjZ9.Ijw2hYvGn_nUvCUvhp4A5HPvW7lNxVX5A14AyJarbQw"
            }
        });
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

    async deleteAvenger(id) {
        await axios.delete(`http://localhost:5000/api/avengers/${id}`, {
            headers: {
                "x-jwt-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDg2ZDQ5NmE4NWVmM2NjMDYyZTc0ZCIsImVtYWlsIjoiamhvbkBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTUzNjI0NjZ9.Ijw2hYvGn_nUvCUvhp4A5HPvW7lNxVX5A14AyJarbQw"
            }
        });

        // this is also working correctly
        // let updatedAvenger = [...this.state.allAvengers];
        // let index = updatedAvenger.indexOf(avenger);
        // updatedAvenger.splice(index, 1);

        let updatedAvenger = this.state.allAvengers.filter((avenger) => avenger.id !== id);
        this.setState({ allAvengers: updatedAvenger });
    }

}
export default Avengers
