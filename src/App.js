import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";

function App() {
//3 slices of state imgs/title and info
const [image, setImage] =  useState('');
const [title, setTitle] = useState('')
const [info, setInfo] = useState('')
const [date, setDate] = useState('')

//get request
const getData = () => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=PM7diFdO6ecLlEHfJ6XU1KZw9zbc36IGWNPNphIq&date=2020-11-18')
  .then(res => {
  console.log(res)
  setImage(res.data.hdurl)
  setTitle(res.data.title)
  setInfo(res.data.explanation)
  setDate(res.data.date)
  })
  .catch(err => console.log(err))
}
useEffect(() => getData(), [])

// console.log(date)
  return (
    <div className="App">
        <h1>Nasa Photo Of The Day</h1>
  
        <h3>{title}</h3>
        <p>{date}</p>
        
  
        <img className="nasaPic" src={image} width='50%' />
        
  <p className='info'>Information: {info}</p>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
  
    </div>
  );
}

export default App;
