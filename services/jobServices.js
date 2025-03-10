import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function saveJob(data) {
    return await prisma.job.create({
        data
    })
    
}

export async function getJobById(id) {
    return await prisma.job.findFirst({where: {id}})
}
export async function getAllJobs() {
    return await prisma.findMany()
}

export async function updateJobs(id, data) {
    const job = await getJobById(id);
    if(!job){
        throw new Error(`Job with id ${id} is not found`)
    }
    return await prisma.job.update({
        where: {id},
        data:{
            title: data.title,
           description: data.description,
           
        }
    })

    
}
export async function deleteJob(id) {
    const job = await getJobById(id);
    if(!job){
        throw new Error(`Job with id ${id} is not found`)
    }
    return await prisma.job.delete({
        where: {id}
    })
    
}