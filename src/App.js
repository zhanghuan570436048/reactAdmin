import About from './view/About';
import Home from './view/Home';
import './App.css';
import { Switch, Route, HashRouter} from 'react-router-dom';

function App() {
  return (
<HashRouter>
  <Switch>
    <Route component={About} exact path="/about" />
    <Route component={Home} path="/home" />
  </Switch>
</HashRouter>

  );
}

export default App;
