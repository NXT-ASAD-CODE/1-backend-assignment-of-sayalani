import { DaTa } from "../model/user.model";

export const admin = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).send({ status: 400, message: "name,email,password required" });
        }
        // const hasPassword = await bcrypt.hash(password,10)
        const user = await DaTa.create({ name, email, password }).res.status(201).send({status:201,data:DaTa,message:"User created successfully"})
        console.log("user=>",DaTa);
        
    }
    catch {

    }
}