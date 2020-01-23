import React from "react";


const Title = (props) =>{
    console.log("I am the prop from title", props)
    


    return(
        <div>
            <h1> Title:{props.data.title} </h1> 
            <p> Explanation:{props.data.explanation} </p> 
            <h4>Copyright:{props.data.copyright} </h4> 
        </div>
    )
}



export default Title