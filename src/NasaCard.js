import React from "react";
import {Card, CardImg} from 'reactstrap';
import styled from "styled-components";


const ImageDiv = styled.div`
    width: 100%;
    
`;


const NasaCard = (props) =>{
    console.log ("I am the props from the card", props)

  

    return (
        <ImageDiv>
        <Card>
        <CardImg top width="100%" src={props.data.hdurl} alt="Card image cap" />    
        </Card>
        </ImageDiv>

        // <ImageDiv>
           
        //     <img src = {props.data.hdurl} alt = "NASA" />

        // </ImageDiv>
    )
}
export default NasaCard