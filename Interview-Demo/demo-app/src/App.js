import './App.css';
import Header from './Header';
import ImageSlider from './ImageSlider';
function App() {
  const data="India"
  return (
    <div className="App">
     <Header data={data}/>
     <ImageSlider/>
    </div>
  );
}

export default App;
