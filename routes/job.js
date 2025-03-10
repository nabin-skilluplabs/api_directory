import express from 'express';
import * as jobServices from '../services/jobServices.js';
import { da } from 'date-fns/locale';

var router = express.Router();

router.post('/', async function (req, res, next) {
    try {
        const data = req.body;
        await jobServices.saveJob(data);
        res.status(200).json({message: "job added Successfully"})


    } catch (error) {
        res.status(500).json({error: error.message});
    }

})
router.get('/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        const job = await jobServices.getJobById(id);
        res.status(200).json({data: job })
    } catch (error) {
        res.status(500).json({error: error.message});

    }
})
router.get('/', async function (req, res, next) {
    try {
        const totalJobs = await jobServices.getAllJobs();
        res.status(200).json({data: totalJobs})
    } catch (error) {
        res.status(500).json({error: error.message});

    }
})
router.put('/:id', async function (req, res, next) {
    try {
        const id = req.params.id
        const data = req.body
        const job = await jobServices.updateJobs(id, data);
        res.status(200).json({message: 'New details are successfully updated', data: job})

    } catch (error) {
        res.status(500).json({error: error.message});

    }
})
router.delete('/:id', async function (req, res, next) {
    try {
        const id = req.params.id;
        await jobServices.deleteJob(id)
        res.status(200).json({message: "Job Deleted Successfully"})
    } catch (error) {
        
    }
})

export default router