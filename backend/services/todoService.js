import prisma from './prismaService.js';

export async function addTodo(data) {
    return await prisma.toDo.create({
        data: {
            ...data,
            isCompleted: false
        }
    });
}

export async function getAllTodos(offset = 0, limit = 100) {
    return await prisma.toDo.findMany({
        skip: parseInt(offset),
        take: parseInt(limit)
    });
}

export async function getTodoById(id) {
    return await prisma.toDo.findFirst({where: {id}});
}

export async function updateTodo(id, data) {
    const todo = await getTodoById(id);
    if(!todo) {
        throw new Error(`To do with id ${id} not found!`);
    }
    return await prisma.toDo.update({
        where: { id }, 
        data: {
            title: data.title,
            isCompleted: data.isCompleted
        }
    });
}

export async function deleteTodo(id) {
    const todo = await getTodoById(id);
    if(!todo) {
        throw new Error(`To do with id ${id} not found!`);
    }
    await prisma.toDo.delete({
        where: {id}
    });
}