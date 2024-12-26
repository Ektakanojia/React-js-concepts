//we will make button define a click event call a function some time function called without clicking on the event 
//next we will take a variable inside the functional component 
import './App.css';
import User from './User'
import About from './About'
function App() {
  
  return (
    <div className="App">
     <User/>
     <About/>
    </div>
  );
}

export default App;
