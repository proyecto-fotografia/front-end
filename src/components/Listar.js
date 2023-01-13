import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Crear } from './Crear';
import { Editar } from './Editar';
import { getPhoto } from '../service/PhotoService';
import { PhotoModel } from '../models/Photo';
import '../style/style.css';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import MaterialTable from 'material-react-table';

export function Listar() {

    const [producto, setProducto] = useState([PhotoModel()]);

    useEffect(() => {
        getPhoto().then((data) => {
            setProducto(data);
            console.log(producto)
        })
    }, []);


    const prueba =()=>{
        return{
            columns:[{
                label: 'Nombre',
                field:'nombre',
                sort: 'asc',
                width: 200,
            },{
                label: 'Nombre Cientifico',
                field:'NombreCientifico',
                sort: 'asc',
                width: 200,
            },{
                label: 'Descripcion',
                field:'descripcion',
                width: 200,
            },{
                label: 'Ruta',
                field:'ruta',
                sort: 'asc',
                width: 200,
            }
        ],
            rows:[...producto]
        }
    }

    const columnas=[
        {
            title:'Nombre',
            field:'nombre'

        },
        {
            title: 'Nombre Cientifico',
            field:'NombreCientifico',
        },{
            title: 'Descripcion',
            field:'descripcion',

        },{
            title: 'Ruta',
            field:'ruta',
        }
    ]


    return (
        <React.Fragment>
            <br /><br />

            <div className='main'>
                <table className="table">
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


            
            <div className='main'>

                <CDBContainer>
                    <CDBCard>
                        <CDBCardBody>
                            <CDBDataTable
                                striped
                                bordered
                                hover
                                entriesOptions={[5, 20, 25]}
                                entries={5}
                                pagesAmount={4}
                                data={prueba()}
                                materialSearch={true}
                                
                                
                            />
                        </CDBCardBody>
                    </CDBCard>
                </CDBContainer>

            </div>

            <br/>
            
        </React.Fragment>
    );

}

