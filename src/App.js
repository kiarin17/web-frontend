import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Catalog from './components/Catalog';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
