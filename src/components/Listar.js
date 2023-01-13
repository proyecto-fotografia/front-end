import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Crear } from './Crear';
import { Editar } from './Editar';
import { getPhoto } from '../service/PhotoService';
import { PhotoModel } from '../models/Photo';
import '../style/style.css';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import MaterialTable from 'material-react-table';

//jQuery libraries
 
import 'jquery/dist/jquery.min.js';
 
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


export function Listar() {

    const [producto, setProducto] = useState([PhotoModel()]);

    useEffect(() => {
        getPhoto().then((data) => {
            setProducto(data);
            console.log(producto)
            
        })
    }, []);

    $(document).ready(function () {
        setTimeout(function(){
        $('#example').DataTable();
         } ,1000);
    });
 
    return (
        <React.Fragment>
            <br /><br />

            <div className='main'>
                <table className="table table-hover table-bordered" id='example'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Nombre Cientifico</th>
                            <th>descripcion</th>
                            <th>ruta</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {producto.map((data) => (
                            <tr key={data.idfoto}>
                                <td>{data.nombre}</td>
                                <td>{data.NombreCientifico}</td>
                                <td>{data.descripcion}</td>
                                <td>{data.ruta}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="">
                                        <Link className="btn btn-warning" to={`/editar`}>Editar</Link>

                                        <button type="button" className="btn btn-danger">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        )

                        )

                        }

                    </tbody>
                </table>
            </div>
            <br />



            <br/>
            
        </React.Fragment>
    );

}

