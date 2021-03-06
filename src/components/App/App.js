import './App.css';
import {
  HashRouter as Router,
  Route,
  // Redirect,
  // Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

// Directory imports
import Character from '../Character/Character';
import Home from '../Home/Home';
import Nav from '../Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
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

export default connect()(App);
