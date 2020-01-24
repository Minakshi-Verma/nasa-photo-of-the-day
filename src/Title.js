import React from "react";

import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

import styled from "styled-components";



// import {
//     Card, CardText, CardBody,
//     CardTitle, CardSubtitle
//   } from 'reactstrap';


const HeaderDiv = styled.div`
    width: 100%;
    color: #668cff;
    text-align: center;
`;

const ParaDiv = styled.div`
text-align: justify;
color: black;
`;

const TitleDiv = styled.div`
 color: black;
 background-color: orange;
 font-size: 1.5rem;
 margin-top: 1%;

`;


const Title = (props) =>{
    console.log("I am the prop from title", props)
    


    return(
        <HeaderDiv>
        <Card>                     
        <TitleDiv><CardHeader><big>{props.data.title}</big></CardHeader></TitleDiv>
        <CardBody>
          {/* <CardTitle></CardTitle> */}
          <ParaDiv><CardText>{props.data.explanation}</CardText></ParaDiv>          
        </CardBody>
        <CardFooter>Copyright:{props.data.copyright}</CardFooter>
       
      </Card>
      </HeaderDiv>
     
    //  <div>          
    //     <h2>Title: {props.data.title}</h2>
    //     <p>Explanation:{props.data.explanation} </p>
    //     <h4>Copyright: {props.data.copyright} </h4>
    // </div>

        
    )
}



export default Title