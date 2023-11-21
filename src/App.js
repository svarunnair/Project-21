import logo from './logo.svg';
import './App.css';
import MainRoutes from './routes/MainRoutes';
import Sidebar from './Components/Sidebar';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {

  let token=localStorage.getItem('token')
  return (
    <div className="App">
      
      {/* {token&&<PrivateRoutes/>} */}
      <PublicRoutes/>
      {token&&<Sidebar/>}
      
    </div>
  );
}

export default App;
