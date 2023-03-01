import './App.css';
import image from './tüte.png';
import imageTwo from './servicemann.png'; 
import {Grocerylist} from './Grocerylist.js';

function App() {
  return (
    <div className="app">
      <div className="container">
      <img src={ image } width="300px" alt ="tüte" />
      </div>
      <h1> Grocery List</h1>
      {/*hier is the grocerylist with input and buttons*/}
      <Grocerylist />
      <div className="container">
      <img src={ imageTwo} width="300px" alt="mann" />
      </div>
    </div>
  );
}

export default App; 
