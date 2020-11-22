import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios";
 
const NasaCard = () => {
    const [image, setImage] =  useState('');
    const [title, setTitle] = useState('')
    const [info, setInfo] = useState('')
    const [date, setDate] = useState('')
    
    //get request
    const getData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=PM7diFdO6ecLlEHfJ6XU1KZw9zbc36IGWNPNphIq&date=2020-11-18')
      .then(res => {
      // console.log(res)
      setImage(res.data.hdurl)
      setTitle(res.data.title)
      setInfo(res.data.explanation)
      setDate(res.data.date)
      })
      .catch(err => console.log(err))
    }
    useEffect(() => getData(), [])

    const Styles = styled.div`
    font-family:'Roboto';
    width: 90%;
    margin:20px;
    padding:10px;
    background-color: #708090;

 `
 const Title = styled.h1 `
 font-weight: bold;
 font-color: blue;
 display: flex;
 justify-content: center;
 `

 const NasaPic = styled.img `
 max-width: 100%;
 `
 const Paragraph = styled.p `
 font-size: 1.5rem;
 text-align: center;
 `

 return(
     <Styles>
         <Title>{title}</Title>
        <p>{date}</p>
         <NasaPic src={image}></NasaPic>
         <h3>Information</h3>
        <Paragraph>{info}</Paragraph>
     </Styles>
 )
}
export default NasaCard