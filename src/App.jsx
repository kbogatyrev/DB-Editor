import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import DataEntry from "./DataEntry"

function App()
{
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/data-entry" element={<DataEntry />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
