import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/home/Login';
import Signup from './components/home/Signup';
import Main from './components/main/Main';
import UpdateList from './components/main/UpdateList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home/login" element={<Login />} />
        <Route exact path="/home/signup" element={<Signup />} />
        <Route exact path="/main" element={<Main />} >
          <Route exact path="edit/:id" element={<UpdateList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
