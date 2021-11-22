import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setLinea1] = useState('Nos vamos a divertir...');
  const onchangeLinea1 = (e) => {
    return setLinea1(e.target.value)
  }
  const [linea2, setLinea2] = useState('verdad??');
  const onchangeLinea2 = (e) => {
    return setLinea2(e.target.value)
  }
  const [image, setimage] = useState('fire');
  const onChangeImg = (e) => {
    return setimage(e.target.value)
  }
  const onClickExport = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <div className="create">
        <select onChange={onChangeImg}>
          <option value="fire">Girl evil</option>
          <option value="smart">Smart</option>
          <option value="futurama">Philip</option>
          <option value="history">History</option>
          <option value="matrix">Morfeo</option>
          <option value="philosoraptor">Philosoraptor</option>
        </select>
        <input type="text" 
        placeholder="Linea 1"
        onChange={onchangeLinea1}/>
        <input type="text"
        placeholder="Linea 2"
        onChange={onchangeLinea2}/>
        <button type="button" onClick={onClickExport} >Export</button>
      </div>
      <div id="meme">
        <b> {linea1} </b>
        <b> {linea2 }</b>
        <img src={"/assets/" + image + ".jpg"} alt=""/>
      </div>
      <footer>
        <span> Made by ezequielCarvajal </span>
      </footer>
    </div>
  );
}

export default App;
