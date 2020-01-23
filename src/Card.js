import React from "react";

const Card = (props) =>{
    console.log ("I am the props from the card", props)
//  const data = props.data
//  console.log(data)
    return (
        <div>
           
            <img src = {props.data.hdurl} alt = "NASA" />

        </div>
    )
}
export default Card