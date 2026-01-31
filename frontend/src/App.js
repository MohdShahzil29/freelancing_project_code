import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelLanding from "@/components/HotelLanding";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HotelLanding />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
