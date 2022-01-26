import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const home = () => <h1>Home</h1>
  const customers = () => <h1>Customers</h1>
  const customerDni = () => <h1>Customer DNI</h1>
  const customerNew = () => <h1>Customer NEW</h1>
  const notFound = () => <h1>Not Found</h1>

  return (
    <Router>
      <Routes>
        <Route path='/' element={home()}/>
        <Route path='/customers' element={customers()}/>
        <Route path='/customers/:dni' element={customerDni()}/>
        <Route path='/customers/new' element={customerNew()}/>
        <Route path='*' element={notFound()} />
      </Routes>
    </Router>
  );
}

export default App;
