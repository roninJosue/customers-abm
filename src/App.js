import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import CustomersContainer from "./components/CustomersContainer";
import CustomerContainer from "./components/CustomerContainer";
import NewCustomerContainer from "./components/NewCustomerContainer";

function App() {
  const notFound = () => <h1>Not Found</h1>

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route exact path='/customers' element={<CustomersContainer />}/>
        <Route path='/customers/:dni' element={<CustomerContainer />}/>
        <Route path='/customers/:dni/edit' element={<CustomerContainer />}/>
        <Route path='/customers/new' element={<NewCustomerContainer />} />
        <Route path='/customers/:dni/del' element={<CustomerContainer />} />
        <Route path='*' element={notFound()} />
      </Routes>
    </Router>
  );
}

export default App;
