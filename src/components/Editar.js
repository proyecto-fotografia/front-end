import React, { useState } from 'react'
import { newPhoto } from '../models/NewPhoto';

export function Editar(props) {
    
    const [photo, setPhoto] = useState([newPhoto()]);

    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setPhoto({...photo,[name]:value});
    }

    const handleSubmit=()=>{

    }

  return (

    <React.Fragment>
        <div className="card">
            <label></label>
            <div className="card-header">
          
            </div>
            <div className="card-body">
                <div className='container'>
                <form className='form'>
                    <div className='form-group'>
                        <label className=''>Nombre</label><br/>
                            <input type="text" className='form-control' name="nombre" onChange={handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <label className=''>Nombre Cientifico</label><br/>
                            <input type="text" className='form-control' name="nombrecientifico" onChange={handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <label className=''>Descripcion</label><br/>
                            <input type="text" className='form-control' name="descripcion" onChange={handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <label className=''>fecha</label><br/>
                            <input type="text" className='form-control' name="fecha" onChange={handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <label className=''>Ruta</label><br/>
                            <input type="text" className='form-control' name="ruta" onChange={handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <label className=''>Extension</label><br/>
                            <input type="text" className='form-control' name="extension" onChange={handleChange}></input>
                    </div>
                    <div className='form-group'>
                        <label className=''>Token</label><br/>
                            <input type="text" className='form-control' name="token" onChange={handleChange}></input>
                    </div>
                    <input type='submit' className='btn btn-success' value="enviar" onClick={handleSubmit}></input>

                </form>
                </div>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div>


    </React.Fragment>
  )
}
