
import "../bootstrap/dist/css/bootstrap.min.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { connectActions } from "../../Store/connect";


function HomeScreen() {
  const dispatch = useDispatch(connectActions);
  const {ethereum} = window;

  const { status } = useSelector((state) => state?.connect);
  console.log(ethereum.isConnected())
  
  if(ethereum.isConnected()){
    dispatch(connectActions.updateStatusSignin());    
  }
  else{
    dispatch(connectActions.updateStatusSignout()); 
  }
  console.log(status)
  
  return (
    <h1>
            Need to sign in to Metamask first!!!
    </h1> 
 )
  
}

export default HomeScreen;