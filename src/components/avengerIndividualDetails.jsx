import React, { Component } from "react"

class AvengerIndividual extends Component {
    render() {
       return(
        <div>Avenger Individual Details:{this.props.match.params.id}</div>
       )
    }
}

export default AvengerIndividual