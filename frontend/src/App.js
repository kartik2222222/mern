import './App.css';
import Rooms from './components/Rooms';
import Nav from './components/Nav';
import Hoom from './screens/Hoom';
import { BrowserRouter,Route,Link, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav/>
      
      <BrowserRouter>
      <Routes>

      
      <Route path="/home" element = {<Hoom/>} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
