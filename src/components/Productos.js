import React, { useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

export const Productos = () => {

    const dispatch = useDispatch()

    const productos = useSelector( state => state.productos.productos )

    console.log(productos)

    useEffect( ()=> {
        // consultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
    },[]);

    return (
        <>
            <h2 className="text-center my-5">Listado de Productos</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map( producto => (
                            <tr key={producto.id}>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
