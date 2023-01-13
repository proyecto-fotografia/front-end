import React from 'react';
import {HashRouter as Router, Routes, Route} from "react-router-dom";

import { Listar } from './components/Listar';
import {Crear} from './components/Crear';
import { Editar } from './components/Editar';

function GetRoutes(){
    return(
        <Router>
        <Routes>
            <Route exact path="/" element={<Listar/>}/>
            <Route exact path="/crear" element={<Crear/>}/>
            <Route exact path="/editar" element={<Editar/>}/>
        </Routes>
    </Router>
    );

}export default GetRoutes;