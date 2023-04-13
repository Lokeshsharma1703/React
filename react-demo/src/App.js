import './App.css';
import Props from './components/Props';

function App() {
  return (
    <div>
      {/* <p>Hello World</p> */}

      <Props name="ABC" age="19" location="Mathura">
        <p>this is a component inside Props component</p>
        <h4>This is heading</h4>
      </Props>
      <Props name="DEF" age="32" location="Delhi" />
      <Props name="XYZ" age="99" location="Agra" />

    </div>
  );
}

export default App;
