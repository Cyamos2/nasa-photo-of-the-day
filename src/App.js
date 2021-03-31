import React,{useState, useEffect} from "react";
import "./App.css";
import Header from './Components/Header'
import IMG from './Components/IMG'

function App() {
  const [picture, setPicture]= useState([])
  const data = axios.get('https://api.nasa.gov/planetary/apod?api_key=0HiOdkPqAbX6r4SgVCG5CsviJfkGcsBvWwm0xgkl').then((response)=> {console.log(response) 
  setPicture(response.data)}).catch((error )=> { console.log(error)})
  console.log(data)
  } [];

  return (
    <div className="App">
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      <POD
      key={picture.id}
      date={picture.date}
      explanation={picture.explanation}
      title={picture.title}
      url={picture.url}
      copyright={picture.copyright}
      />
    </div>
  );

export default App;
