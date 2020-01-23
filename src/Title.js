import React from "react";


const Title = (props) =>{
    console.log("I am the prop from title", props.data)
    // const data = props.data


    return(
        <div>
             {/* <h1> Title:{data.date} </h1> 
            <p> Explanation:{data.explanation} </p> 
            <h4>Copyright:{data.copyright} </h4>  */}
        </div>
    )
}



export default Title