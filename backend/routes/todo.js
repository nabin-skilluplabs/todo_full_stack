import express from 'express';
import { addTodo, getAllTodos, getTodoById, updateTodo, deleteTodo } from '../services/todoService.js';

var router = express.Router();

router.get('/', async function(req, res, next) {
    const offset = req.query.offset;
    const limit = req.query.limit;
    const todos = await getAllTodos(offset, limit)
    res.status(200).json({data: todos});
});

router.get('/:id', async function(req, res, next) {
    const id = req.params.id;
    const todo = await getTodoById(id);
   
    if(todo) {
        return res.status(200).json({data: todo});
    }
    else {
        return res.status(404).json({message: "To do not found!"});
    }
});

router.post('/', async function(req, res, next) {
    const data = req.body;
    const todo = await addTodo(data);
    res.status(201).json({message: 'New to do created successfully!', data: todo});
});

router.put('/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        const data = req.body;
        const todo = await updateTodo(id, data);
        res.status(200).json({message: 'To do updated successfully!', data: todo});
    }
    catch(error){
        res.status(405).json({message: error.message});
    }
});

router.delete('/:id', async function(req, res, next) {
    try {
        const id = req.params.id;
        await deleteTodo(id);
        res.status(200).json({message: 'Todo deleted successfully!'});
    }
    catch(error){
        res.status(405).json({message: error.message});
    }
    
});

export default router;