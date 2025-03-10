import express from "express";
import * as roomServices from '../services/roomServices.js'

var router = express.Router();

router.post('/', async function (req, res, next) {
    try {
        const data = req.body
        await roomServices.saveRoom(data)
        res.status(200).json({message: "Room added sucessfully"})



    } catch (error) {
        res.status(500).json({error: error.message});
    }
})
router.get('/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        console.log(id)
        const room = await roomServices.getRoomBYId(id)
        res.status(200).json({data: room}) 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
})
router.get('/', async function (req, res, next) {
    try {
        const totalRooms = await roomServices.getAllRooms()
        return res.status(200).json({data: totalRooms})

    } catch (error) {
        res.status(500).json({error: error.message})

    }
    
})
router.put('/:id', async function (req, res, next) {
    try {
        const id = req.params.id
        const data = req.body
        console.log(id, data)
        const room = await roomServices.updateRoom(id, data);
        res.status(200).json({message: 'New details are successfully updated', data: room})
    } catch (error) {
        res.status(500).json({error: error.message})
        console.log(error)
    }
})
router.delete('/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        await roomServices.deleteRoom(id);
        res.status(200).json({message: "Room deleted Successfully"})

    } catch (error) {
        res.status(500).json({error: error.message})

    }
})
export default router