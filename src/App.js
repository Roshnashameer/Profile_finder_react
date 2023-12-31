import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleView from './pages/SingleView'
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/view/:name' element={<SingleView></SingleView>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
