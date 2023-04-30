
import './App.css';
import TopBar from './top';
import Home from './home';
import BottomDiv from './bottomDiv';
import Signup from './signup';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Users from './components/Users';



function App() {



  return (
    <div className="App">
    <TopBar />
 
  <Routes>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/ServerData" element={<Users />} />
  </Routes>

    <BottomDiv />
     
    </div>
  );
}

export default App;
