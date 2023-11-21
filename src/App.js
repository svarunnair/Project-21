import logo from './logo.svg';
import './App.css';

import Sidebar from './Components/Sidebar';
import PublicRoutes from './routes/PublicRoutes';

function App() {

  let token=localStorage.getItem("token")
  let otpToken=localStorage.getItem("otpToken")



   let main = (otpToken||token)?<Sidebar/>:<PublicRoutes/>



  return (
    <div className="App">
      
     
      {main}
     
      
  
    </div>
  );
}

export default App;
