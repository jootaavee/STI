import React from "react";

import Home from "../pages/home.tsx";
import Sobre from "../pages/sobre.tsx";
import Contato from "../pages/contato.tsx";
import Tela1 from "../pages/tela1.tsx";
import Tela2 from "../pages/tela2.tsx";
import Tela3 from "../pages/tela3.tsx";
import Tela4 from "../pages/tela4.tsx";
import Tela5 from "../pages/tela5.tsx";
import Tela6 from "../pages/tela6.tsx";
import Tela7 from "../pages/tela7.tsx";
import Tela8 from "../pages/tela8.tsx";
import Tela9 from "../pages/tela9.tsx";
import Tela10 from "../pages/tela10.tsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Tela1 />}></Route>
            <Route path="/tela2" element={<Tela2 />}></Route>
            <Route path="/tela3" element={<Tela3 />}></Route>
            <Route path="/tela4" element={<Tela4 />}></Route>
            <Route path="/tela5" element={<Tela5 />}></Route>
            <Route path="/tela6" element={<Tela6 />}></Route>
            <Route path="/tela7" element={<Tela7 />}></Route>
            <Route path="/tela8" element={<Tela8 />}></Route>
            <Route path="/tela9" element={<Tela9 />}></Route>
            <Route path= "/tela10" element={<Tela10/>}></Route>
        </Routes>
    </Router>
)
export default AppRoutes