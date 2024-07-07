import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { sign,verify } from 'hono/jwt'
import {signupInput,signinInput} from "@shreyously/medium-common"


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();

///1. signup
userRouter.post('/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
  //zod validation
    const {success} =signupInput.safeParse(body);
	if(!success){
		c.status(400);
		return c.json({ error: "invalid input" });
	} 
  //db interaction
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password
			}
		});
    //db ke user ki id se sign with jwt secret
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
    
	} catch(e) {
    console.log(e);
    c.status(403);
    return c.json({ error: "user already exists" });
	}
})

//2. signin
userRouter.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
  //zod validation
  const {success}=signinInput.safeParse(body);
	if(!success){
		c.status(400);
		return c.json({ error: "invalid input" });
	}
  //db interaction
	const user = await prisma.user.findUnique({
		where: {
			email: body.email,
      password: body.password
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
  
})