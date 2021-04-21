import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,

    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
}
from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// crear nuevos productos

export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch( agregarProducto() );
        try {
            // insertar en la api
            await clienteAxios.post('/productos',producto);
            //si todo sale bien, actualizar el state

            dispatch( agregarProductoExito(producto) );

            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )

        } catch (error) {
            console.log(error)
            dispatch( agregarProductoError(true) );

            //alerta de error
            Swal.fire({
                icon:'error',
                title:'Hubo un error',
                text:'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type:AGREGAR_PRODUCTO,
    payload:true
})

//si el producto se guarda ne la base de datos
const agregarProductoExito = product => ({
    type:AGREGAR_PRODUCTO_EXITO,
    payload:product
})

// si huno un error
const agregarProductoError = estado => ({
    type:AGREGAR_PRODUCTO_ERROR,
    payload:estado
})


// FUNCTION QUE DESCARGA LOS PRODUCTOS DE LA BASE DE DATOS

export function obtenerProductosAction(){
    return async ( dispatch ) => {
        dispatch( descargarProductos() );
        try {
            const respuesta = await clienteAxios.get('/productos');

            dispatch( descargaProductosExitosa(respuesta.data) )

        } catch (error) {
            console.log(error)

            dispatch( descargaProductoError() );

            //alerta de error
            Swal.fire({
                icon:'error',
                title:'Hubo un error',
                text:'Hubo un error, intenta de nuevo'
            })
        }
    }
}

const descargarProductos = () => ({
    type:COMENZAR_DESCARGA_PRODUCTOS,
    payload:true
})

const descargaProductosExitosa = (productos) => ({
    type:DESCARGA_PRODUCTOS_EXITO,
    payload:productos
})

const descargaProductoError = () => ({
    type:DESCARGA_PRODUCTOS_ERROR,
    payload:true
})