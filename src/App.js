import './index.css';
import 'reset-css';
import Header from './Components/Header';
import List from './Components/List';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='container'>
        <List></List>
      </div>
    </div>
  );
}

export default App;
