import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import CustomersContainer from "./components/CustomersContainer";

function App() {
  const customerDni = () => <h1>Customer DNI</h1>
  const customerNew = () => <h1>Customer NEW</h1>
  const notFound = () => <h1>Not Found</h1>

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route exact path='/customers' element={<CustomersContainer />}/>
        <Route path='/customers/:dni' element={customerDni()}/>
        <Route path='/customers/new' element={customerNew()}/>
        <Route path='*' element={notFound()} />
      </Routes>
    </Router>
  );
}

export default App;
