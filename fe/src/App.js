import { BrowserRouter as Redirect, Routes, Route } from "react-router-dom";
import "./App.css" ;
import GameScreen from './pages/game/GameScreen';
import HomeScreen from "./pages/home/HomeScreen";
import Menu from "./pages/menu/Menu";
import { useSelector } from "react-redux";

function App() {
  const { status } = useSelector((state) => state?.connect);
  
  return (
    <>   
        <Menu />
        {status === 0 ? (
          <Routes>
          <Route path="/" element={<HomeScreen />}/>            
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
