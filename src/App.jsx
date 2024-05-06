import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Wish from "./pages/Wish.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/wish" element={<Wish />} />
      </Routes>
    </Router>
  );
}

export default App;