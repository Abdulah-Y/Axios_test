import React from 'react';
import {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

const URL = 'https://api.jokes.one/jod';

function App() {

  const [title,setTitle] = useState('');
  const [text,setText] = useState('');


  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        const joke = response.data.contents.jokes[0].joke;
        setTitle(joke.text);
        setText(joke.text);
      }).catch(error => {
        alert(error);
      });
  },  []) 
  
  return (
    <div style={{margin: 50}}>
    <h1>Joke of the day</h1>
    <h3>{text}</h3>
    <p>{title}</p>
  </div>
  );

  
}   
export default App;

