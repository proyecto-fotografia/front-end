import React from 'react';

import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div>

        <ul className="nav justify-content-center bg-dark">
            <li className="nav-item">
            <Link className="nav-link active" to="/">Listar</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/crear">Crear</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/editar">Editar</Link>
            </li>
        </ul>
    </div>
  )
}
