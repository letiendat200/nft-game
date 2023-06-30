import { BrowserRouter as Redirect, Routes, Route } from "react-router-dom";
import "./App.css" ;
import GameScreen from './pages/game';
import HomeScreen from "./pages/home";
import WelcomeScreen from "./pages/welcome";
import ShoppingScreen from "./pages/shop";
import AuctionScreen from "./pages/auction";
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
            <Route path="/shop" element={<ShoppingScreen />}/>
            <Route path="/auction" element={<AuctionScreen />}/>
          </Routes>
        )}   
    </>
  );
}

export default App;
