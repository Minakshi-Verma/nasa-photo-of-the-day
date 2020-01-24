import React from "react";

import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';



// import {
//     Card, CardText, CardBody,
//     CardTitle, CardSubtitle
//   } from 'reactstrap';




const Title = (props) =>{
    console.log("I am the prop from title", props)
    


    return(
        <Card>
          {/* <CardBody>
          <CardTitle><big>"NASA" PICTURE OF THE DAY!</big></CardTitle>
          </CardBody>
          <CardBody>
          <CardSubtitle>{props.data.title}</CardSubtitle>
          <CardSubtitle><small>Copyright:{props.data.copyright}</small></CardSubtitle>
       
          <CardText>{props.data.explanation}</CardText>
          
        </CardBody> */}

        <CardHeader><big>"NASA" PICTURE OF THE DAY!</big></CardHeader>
        <CardBody>
          <CardTitle>{props.data.title}</CardTitle>
          <CardText>{props.data.explanation}</CardText>
          
        </CardBody>
        <CardFooter><small>Copyright:{props.data.copyright}</small></CardFooter>
       
      </Card>


        
    )
}



export default Title