import {Link, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/customers'>Customers</Link>
        <Link to='/customers/3000000'>Customers 3000</Link>
      </div>
    </Router>
  );
}

export default App;
