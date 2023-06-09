import './index.css';
import 'reset-css';
import Header from './Components/Header';
import List from './Components/List';
import Order from './Components/order.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='container'>
        <List></List>
        <Order></Order>
      </div>
    </div>
  );
}

export default App;
