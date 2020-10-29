
import './App.css';

function App() {

  const todaysDate=new Date().toLocaleDateString();
  const todaysTime=new Date().toLocaleTimeString()

  return (
    <div className="App">
     <h1>Hello India, lets check todays Date and Time</h1>
  <h1>Todays Date = {todaysDate}</h1>
  <h1>todays time = {todaysTime}</h1>
    </div>
  );
}

export default App;
