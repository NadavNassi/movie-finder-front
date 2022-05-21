import { HashRouter as Router, Route, Routes } from 'react-router-dom'


import './style/style.scss'
import { Header } from './cmps/header';
import { Home } from './pages/home';
import { Login } from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='login' element={<Login />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
