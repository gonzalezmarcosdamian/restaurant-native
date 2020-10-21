import React from "react";
import { Routes, Route } from "react-router";

//componentes
import Ordenes from "./components/pages/Ordenes";
import Menu from "./components/pages/Menu";
import NuevoPlato from "./components/pages/NuevoPlato";
import Sidebar from "./components/ui/Sidebar";

function App() {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <div className="md:w=2/5 xl:w-4/5 ">
        <Routes>
          <Route path="/" element={<Ordenes />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nuevo-plato" element={<NuevoPlato />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
