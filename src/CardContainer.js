import React , {useState, useEffect} from "react"; //imported useStates
import Axios from "axios" //imported axios
import Card from "./Card";
import Title from "./Title";



const CardContainer = ()=>{

 //set use state
 const [data, setDatas] = useState({devin: "loves birds"})
 
 useEffect(() =>{
   Axios.get(`https://api.nasa.gov/planetary/apod?api_key=d7vR94dC3m7ToIF8qhgKtyFeNHMrkcAH2YMaClzi&date=2000-02-02`)
   .then(Response =>{
     console.log ("I am a axios call from CardContainer", Response.data)
     setData(Response.data)
   }, [])

   .catch(Error =>{
     console.log("Picture can not be displayed", Error)
   })

 }, [data])
   console.log("I am the data from cardContainer", data)

    return (
        <div>
            {/* <Title title = {data.title}
             explanation ={data.explanation}
             copyright = {data.copyright}
             /> */}
             <Title data = {data}/>

            <Card data = {data}/>
           
        </div>
    );

};



export default CardContainer;