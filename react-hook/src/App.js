import { useState } from 'react';
import './App.css';
import Section from './componenets/Section';
import useToggle from './componenets/hooks/useToggle.js';

function App() {

  const [smileyFace, setSmileyFace] = useState(true)

  // const [section, setSection] = useState(true)

  const [section, setSection] = useToggle();



  return (
    <div className="App">

      {section && <Section />}

      <button onClick={() => { setSection() }} style={{ height: '40px', width: '120px', backgroundColor: 'skyblue', fontSize: '18px', borderRadius: '10px', marginTop: '50px' }}>Read {section ? 'More' : 'Less'}</button>


      <h1 onClick={() => { setSmileyFace(!smileyFace) }}>{(smileyFace) ? "😃" : "🗿"}</h1>
    </div>
  );
}

export default App;
