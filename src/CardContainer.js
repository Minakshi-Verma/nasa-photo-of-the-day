import React , {useState, useEffect} from "react"; //imported useStates
import Axios from "axios" //imported axios
import NasaCard from "./NasaCard";
import Title from "./Title";
import { Container, Col} from "reactstrap";



const CardContainer = ()=>{

 //set use state
 const [data, setData] = useState({devin: "loves birds"})
 
 useEffect(() =>{
   Axios.get(`https://api.nasa.gov/planetary/apod?api_key=1NrdWrpT6mKEYw2dMqFMJ9tyzyW91seRVsmdR7WL`)
   .then(Response =>{
     console.log ("I am a axios call from CardContainer", Response.data)
     setData(Response.data)
   })

   .catch(Error =>{
     console.log("Picture can not be displayed", Error)
   })

 }, [])
   console.log("I am the data from cardContainer", data)

    return (
      <Container>
        
        
        <Col><Title data = {data}/>
        <NasaCard data = {data}/>
        </Col>
      </Container>


        // <div>
        //     {/* <Title title = {data.title}
        //      explanation ={data.explanation}
        //      copyright = {data.copyright}
        //      /> */}
        //      <div>
        //      <h1>"NASA" PICTURE OF THE DAY!</h1>
        //      <Title data = {data}/>
        //     </div>
        //     <div>
        //     <NasaCard data = {data}/>
        //    </div>
        // </div>
    );

};



export default CardContainer;