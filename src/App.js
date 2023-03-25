
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Post from './components/Post/Post';
import Profile from './components/Profile/Profile';
import ToDo from './components/ToDo/ToDo';
import LandingPage from './pages/landingpage/LandingPage';
import ProfilePage from './pages/profilepage/ProfilePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path ="/profilepage/" element={<ProfilePage/>}>
          <Route index element={<Profile/>}/>
          <Route path="post" element={<Post/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="todo" element={<ToDo/>}/>
          </Route>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
