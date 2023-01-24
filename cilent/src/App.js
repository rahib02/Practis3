
import './App.css';
import Navbar from './page/Navbar/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from './page/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;