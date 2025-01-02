import './App.css';

import Header from './components/header';
import MainContent from './components/mainContent';
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent/>
      <Menu />
    </div>
  );
}

export default App;
