import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function saveRoom(data) {
    return await prisma.room.create({
        data
    })
    
}

export async function getRoomBYId(id) {
    return await prisma.room.findFirst({where: {id}})
    
}

export async function getAllRooms() {
    return await prisma.room.findMany() 
}

export async function updateRoom(id, data) {
    const room = await getRoomBYId(id)
    if(!room){
        throw new Error(`room wiht id ${id} is not found`)
    }
    return await prisma.room.update({
        where: {id},
        data:{
           title: data.title,
           description: data.description,
           
        }
    })
}
export async function deleteRoom(id) {
    const room = await getRoomBYId(id)      
    if(!room){
        throw new Error(`room wiht id ${id} is not found`)
    }
    return await prisma.room.delete({
        where: {id}
    })  
    }
