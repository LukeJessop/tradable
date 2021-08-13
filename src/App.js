import './App.css';
import routes from './routes'
import Nav from './Components/Nav';
import './Components/CSS/nav.css'
import './Components/CSS/auth.css'
import 'F:/codingfiles/tradable/src/Components/CSS/profile.css'


function App() {


  return (
    <div className="App">
      <Nav/>
      {routes}
    </div>
  );
}

export default App;
