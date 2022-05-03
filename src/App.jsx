import { HashRouter as Router, Route, Routes } from 'react-router-dom'


import './style/style.scss'
import { routes } from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                exact
                element={route.element}
                path={route.path}
              />
            ))}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
