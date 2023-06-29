
import "../bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { connectActions } from "../../Store/connect";


function HomeScreen() {
  
  const dispatch = useDispatch(connectActions);
  const {ethereum} = window;
 
  const checkConnection = async () =>{
    if(ethereum.isConnected()){
      dispatch(connectActions.updateStatusSignin());    
    }
    else{
      dispatch(connectActions.updateStatusSignout()); 
    }
  }
  
  useEffect(() => {
    checkConnection();
  },[])
  
  return (
    <>
    <h1>
           You have signed in to Metamask
    </h1> 
    </>
 )
  
}

export default HomeScreen;