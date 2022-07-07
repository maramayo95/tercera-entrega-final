require('dotenv').config()
const carritoDAO = require('../daos/'+process.env.AMBIENTE+'/CarritosDAO')
const sendMail = require('../utils/nodemailer')
const carritoModel = require('../models/carritos')
class CarritosController{

    async traerCarritos (req, res) {
        const carritos = await carritoDAO.traerCarritos()
        res.send(carritos)
    }

    async agregarCarrito(req, res){
        const carritoGuardado = await carritoDAO.agregarCarrito()
        res.status(201).send(carritoGuardado)
    }

    async agregarProductoACarrito(req, res){
        const carrito = await carritoDAO.agregarProductoACarrito(req.params.id, req.params.idCarrito)
        res.send(carrito)
    }

    async eliminarProductoCarrito(req, res){
        const carrito = await carritoDAO.eliminarProductoCarrito(req.params.idCarrito, req.params.id)
        res.send(carrito)
    }

    async eliminarCarrito(req, res){
        const eliminarCarrito = await carritoDAO.eliminarCarrito(req.params.id)
        res.send(eliminarCarrito)
    }

    async finalizarCompra(req,res){
        const detalle = await carritoModel.findOne({_id: req.params.id})
        let productosLista = detalle.productos.map(prods => prods.title)
        productosLista=productosLista.join(',')
        
        const html = `
        <h1>Lista de compra </h1>
        <h2>Detalle </h2>
        <p>${productosLista}</p>
        `
        sendMail(html)
        res.send('enviado')
    }

}

module.exports = new CarritosController()