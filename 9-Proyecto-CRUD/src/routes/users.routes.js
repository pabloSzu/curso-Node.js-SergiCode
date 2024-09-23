import {Router} from 'express'
import {pool} from '../db.js'

const router = Router()

router.get('/users', (req, res) =>{
    res.send('obteniendo usuarios')
})

router.get('/users/:id', (req, res) =>{
    const {id} = req.params
    res.send('obteniendo el usuario' + id)
})

router.post('/users', (req, res) =>{
    res.send('creando usuario')
})

router.delete('/users/:id', (req, res) =>{
    res.send('obteniendo usuarios')
})

router.put('/users/:id', (req, res) =>{
    res.send('obteniendo usuarios')
})

export default router