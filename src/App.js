import React, { useEffect, useState } from 'react';
import './App.css';
import ReactHowler from "react-howler";
import Axios from "axios";

function App() {
  const [flag, setFlag] = useState(true);
  const [url, setUrl] = useState("http://goldfirestudios.com/proj/howlerjs/sound.ogg");
  const [text, setText] = useState("");
 const createRecord = (txt) => {
  let body = JSON.stringify({text: txt})
      Axios.post("https://siri-voice.herokuapp.com/", {body: body})
      .then((res) => {
        setUrl(res.data);
      })
 }
   
  return (
    <div className="App" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
         <ReactHowler
        src={url}
        volume={1}
        playing={flag}
        onEnd={() => setFlag(false)}
      />
      <input onChange={({target}) => setText(target.value)} />
      <button onClick={() => createRecord(text)}>
        Create recording
      </button>
      <button onClick={() => setFlag(!flag)}>
        {flag ? "stop" : "play"}
      </button>
    </div>
  );
}

export default App;
