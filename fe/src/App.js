import { BrowserRouter as Redirect, Routes, Route } from "react-router-dom";
import "./App.css" ;
import GameScreen from './pages/game';
import HomeScreen from "./pages/home";
import WelcomeScreen from "./pages/welcome";
import Menu from "./pages/menu/Menu";
import { useSelector } from "react-redux";

function App() {
  const { status } = useSelector((state) => state?.connect);
  return (
    <>   
        <Menu />
        {status === 0 ? (
          <Routes>
          <Route path="/" element={<WelcomeScreen />}/>            
          </Routes>
        ):(
          <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/game" element={<GameScreen />} />            
          </Routes>
        )}   
    </>
  );
}

export default App;
