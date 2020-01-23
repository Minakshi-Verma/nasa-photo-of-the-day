import React from "react";
import {Card, CardImg} from 'reactstrap';

const NasaCard = (props) =>{
    console.log ("I am the props from the card", props)
//  const data = props.data
//  console.log(data)
    return (

        <Card>
        <CardImg top width="100%" src={props.data.hdurl} alt="Card image cap" />    
        </Card>

        // <div>
           
        //     <img src = {props.data.hdurl} alt = "NASA" />

        // </div>
    )
}
export default NasaCard