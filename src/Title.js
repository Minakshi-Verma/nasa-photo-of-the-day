import React from "react";
import {Card, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import {Container} from "reactstrap";



const Title = (props) =>{
    console.log("I am the prop from title", props)
    


    return(
        <Card>
       
       <Container>
       <CardTitle><big>"NASA" PICTURE OF THE DAY!</big></CardTitle>          
          <CardSubtitle>{props.data.title}</CardSubtitle>
          <CardSubtitle><small>Copyright:{props.data.copyright}</small></CardSubtitle>
          <CardText>{props.data.explanation}</CardText>
        </Container>
       
      </Card>


        // <div>
        //     <h2> Title:{props.data.title} </h2> 
        //     <p> Explanation:{props.data.explanation} </p> 
        //     <h4>Copyright:{props.data.copyright} </h4> 
        // </div>
    )
}



export default Title