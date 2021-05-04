import './App.css';
import {
  HashRouter as Router,
  Route,
  // Redirect,
  // Switch,
} from 'react-router-dom';

// Directory imports
import Character from '../Character/Character'
import Home from '../Home/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Trogar Party
        </p>
      </header>
      <main>
        <p>
          Let's play Dungeons and Dragons!
        </p>
      </main>
      <Router>
          <Route 
          exact path="/character" 
          component={Character} />
          <Route 
          exact path="/" 
          component={Home} />

          {/* <Route path="/character">
            <AdminOrders
              getOrders={this.getOrders}
              orderHistory={this.state.orderHistory}
              deletePizza={this.deletePizza}
            />
          </Route>
          <Route path="/admin">
            <AdminOrders
              getOrders={this.getOrders}
              orderHistory={this.state.orderHistory}
              deletePizza={this.deletePizza}
            />
          </Route> */}
          {/* <Route path="/checkout" component={Checkout} /> */}
        </Router>
    </div>
  );
}

export default App;
