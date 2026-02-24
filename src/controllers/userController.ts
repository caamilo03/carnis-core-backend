import {Request, Response} from "express";
import prisma from "../config/prisma";

export const createUser = async (req: Request, res: Response) => {
    try{
        const { name, email, role} = req.body;
        const user = await prisma.user.create({
            data: {
                name,
                email,
                role
            }
        });
        res.status(201).json(user);
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};