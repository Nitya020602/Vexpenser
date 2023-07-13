import Home from "./pages/home";
import Header from "./components/header";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import AddExpenses from "./pages/add-expense";
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addexpense" element={<AddExpenses />}/>
      </Routes>
      <Footer/>
    </Router>
    );
  
}

export default App;
