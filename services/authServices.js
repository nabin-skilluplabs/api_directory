import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { addHours } from "date-fns";

const prisma = new PrismaClient();

export async function registerUser(data) {
    delete data.verifyPassword;
    data.password = await bcrypt.hash(data.password, 10);
    try{
        return await prisma.user.create({
            data
        })
    } catch(error){
        throw new Error(error)
    }


}
export async function getOneUser(condition) {
    return await prisma.user.findFirst({ where: condition });
  }
  