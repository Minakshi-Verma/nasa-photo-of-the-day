import React from "react";

const Card = (props) =>{
    console.log ("I am the prop from the card", props.data.data)
 const data = props.data.data
 console.log(data)
    return (
        <div>
            <img src = {data.hdurl} alt = "Nasa image" />

        </div>
    )
}
export default Card