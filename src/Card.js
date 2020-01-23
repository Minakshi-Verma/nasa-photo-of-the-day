import React from "react";

const Card = (props) =>{
    console.log ("I am the props from the card", props.data)
 const data = props.data
 console.log(data)
    return (
        <div>
            <img src = {data.hdurl} alt = "NASA image" />

        </div>
    )
}
export default Card