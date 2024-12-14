import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './assets/atoms/Users/Users';
import UserInfo from './assets/atoms/UserInfo/UserInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='user/:id' element={<UserInfo/>}/>
      </Routes>
    </Router>
  )
}

export default App