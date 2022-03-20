
import './Styles.css';
//import bootstrap from 'bootstrap' 
//import {button} from 'bootstrap'


import NavBar from './components/NavBar/NavBar'
import ItemList from './components/Items/itemListContainer'


function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemList/>
    </div>
  );
}

export default App;
