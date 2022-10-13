import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import html2canvas from "html2canvas";

function App() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [image, setImage] = useState('');

  const setUpperLine = (event) => {
    setLine1(event.target.value);
  }
  const setBottomLine = (event) => {
    setLine2(event.target.value);
  }
  const setMemeImage = (event) => {
    setImage(event.target.value);
  }
  const exportImage = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      const img    = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.download = image + '.png';
      link.href = img;
      link.click();
    });
  }
  return (
    <div className="App">
      {/*//select picker de memes*/}
      <select onChange={setMemeImage}>
        <option value='history'>History Channel</option>
        <option value='fry'>Futurama</option>
        <option value='sadToad'>Sad Toad</option>
        <option value='smart'>Smart Guy</option>
        <option value='virgin'>Virgin guy</option>
      </select> <br/>

      {/*input text first line*/}
      <input onChange={setUpperLine} type='text' placeholder='upper line'/> <br/>
      <input onChange={setBottomLine} type='text' placeholder='bottom line'/> <br/>

      {/*in put text bottom line*/}
       <button onClick={exportImage}>Export</button>
      <div className='meme' id='meme'>
        <span>{line1}</span>
        <span>{line2}</span>
        <img alt='' src={"/images/" +image +".jpg"} />
      </div>
    </div>
  );
}

export default App;
