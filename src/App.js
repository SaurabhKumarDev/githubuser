import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import RandomUser from './components/RandomUser';
import User from './components/user/User';
import Search from './components/Search';
import Footer from './components/Footer';
import Follower from './components/Follower';
import Following from './components/Following';

function App() {
    return (
        <Router>
            <NavBar /> 
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/randomuser' element={<RandomUser />} />
                <Route path='/user' element={<User />} />
                <Route path='/search' element={<Search />} />
                <Route path='/follower' element={<Follower />} />
                <Route path='/following' element={<Following />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;