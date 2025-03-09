import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { addMinutes } from "date-fns";
import { sendOTP } from "./sendEmail.js";

const prisma = new PrismaClient();

export async function registerUser(data) {
    try{
  
    delete data.verifyPassword;
    delete data.code;
    data.password = await bcrypt.hash(data.password, 10);
    const newUser =  await prisma.user.create({
            data:{
                ...data,
            }
        })
       
        
    } catch(error){
        throw new Error(error)
    }


}
export async function createEmailOtp(data) {
    delete data.password;
    delete data.phone;
    delete data.verifyPassword
    const code = String(Math.ceil(Math.random()*1000000));
    const expiryAt = addMinutes(new Date(), 10);
    const newEmail =  await prisma.emailConfirmation.create({
        data:{
            ...data,
            code,
            expiryAt
        }
    })
    console.log("This is new email", newEmail);
    await sendOTP(newEmail);
}
export async function verifyOtp(data) {
    try{
        
        const existingClient = await prisma.emailConfirmation.findFirst({ where: { email: data.email }});
console.log(existingClient.code);
console.log(data.code);
        return data.code === existingClient.code;

    } catch(error){
        throw new Error(error)
    }
    
}
export async function getOneUser(condition) {
    return await prisma.user.findFirst({ where: condition });
  }
  
  export async function signIn(data) {
    const existingClient = await getOneUser({ email: data.email });
    return await bcrypt.compare(data.password, existingClient.password);
  }
  
  