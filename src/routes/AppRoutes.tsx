import React from "react";

import Home from "../pages/telas_principais/home.tsx";
import Sobre from "../pages/telas_principais/sobre.tsx";
import Contato from "../pages/telas_principais/contato.tsx";
import Tela1 from "../pages/telas_principais/tela1.tsx";
import Tela2 from "../pages/telas_principais/tela2.tsx";
import Tela4 from "../pages/telas_principais/tela4.tsx";
import Tela5 from "../pages/telas_principais/tela5.tsx";
import Tela6 from "../pages/telas_principais/tela6.tsx";
import Tela7 from "../pages/telas_principais/tela7.tsx";
import Tela8 from "../pages/telas_principais/tela8.tsx";
import Tela9 from "../pages/telas_principais/tela9.tsx";
import Tela10 from "../pages/telas_principais/tela10.tsx";
import Tela11 from "../pages/telas_principais/tela11.tsx";
import Facem from "../pages/setores/faculdades/facem.tsx";
import Facs from "../pages/setores/faculdades/facs.tsx";
import Fad from "../pages/setores/faculdades/fad.tsx";
import Faef from "../pages/setores/faculdades/faef.tsx";
import Faen from "../pages/setores/faculdades/faen.tsx";
import Fafic from "../pages/setores/faculdades/fafic.tsx";
import Fala from "../pages/setores/faculdades/fala.tsx";
import Fanat from "../pages/setores/faculdades/fanat.tsx";
import Fasso from "../pages/setores/faculdades/fasso.tsx";
import Fe from "../pages/setores/faculdades/fe.tsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Tela1 />}></Route>
            <Route path="/tela2" element={<Tela2 />}></Route>
            <Route path="/tela4" element={<Tela4 />}></Route>
            <Route path="/tela5" element={<Tela5 />}></Route>
            <Route path="/tela6" element={<Tela6 />}></Route>
            <Route path="/tela7" element={<Tela7 />}></Route>
            <Route path="/tela8" element={<Tela8 />}></Route>
            <Route path="/tela9" element={<Tela9 />}></Route>
            <Route path="/tela10" element={<Tela10 />}></Route>
            <Route path="/tela11" element={<Tela11 />}></Route>
            <Route path="/facem" element={<Facem />}></Route>
            <Route path="/facs" element={<Facs />}></Route>
            <Route path="/fad" element={<Fad />}></Route>
            <Route path="/faef" element={<Faef />}></Route>
            <Route path="/faen" element={<Faen />}></Route>
            <Route path="/fafic" element={<Fafic />}></Route>
            <Route path="/fala" element={<Fala />}></Route>
            <Route path="/fanat" element={<Fanat />}></Route>
            <Route path="/fasso" element={<Fasso />}></Route>
            <Route path="/fe" element={<Fe />}></Route>
        </Routes>
    </Router>
)
export default AppRoutes