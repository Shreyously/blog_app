import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createPostInput, updatePostInput } from "@shreyously/medium-common";

export const postRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();

//middleware header se id of user
postRouter.use('/*',async (c,next)=>{
    const token=c.req.header("authorization") || '';
    const user = await verify(token,c.env.JWT_SECRET)
    if(user){
        ///set the user 93
        c.set('userId',user.id as string)//93
        console.log(user.id)
    }else{
        c.json({error:"user not found"});
    }
    await next();

})


//6.bulk 
//pagination to be done
//TODO pagination
postRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL, 
    }).$extends(withAccelerate());
    const blogs = await prisma.post.findMany({
        select:{
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
           
        }
    });

    return c.json({
        blogs
    })
})


//3. get blog
postRouter.get('/:id', async(c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const id = c.req.param('id')
	console.log(id);
    try {
    const blog = await prisma.post.findFirst({
        where: {
            id: id
        },
        select: {
            id: true,
            title: true,
            content: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })
        return c.json({
            blog
        });
    } catch(e){
        c.status(411);
        return c.json({
            msg: "Error while fecthing the blog post"
        })
    }
})

//4. create blog
postRouter.post('/', async (c) => {
    //middleware extract the user id from there
	const userId = c.get('userId');//93
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    //zod validation
    const {success}=createPostInput.safeParse(body);
    if(!success){
        c.status(400);
        return c.json({ error: "invalid input" });
    }

    //db interaction
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId//93
		}
	});
	return c.json({
		id: post.id//40c
	});
})



//5. update blog
postRouter.put('/', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    const {success}=updatePostInput.safeParse(body);
    if(!success){
        c.status(400);
        return c.json({ error: "invalid input" });
    }
    try{
        const post = await prisma.post.update({
            where: {
                id: body.id//post id 40c
            },
            data: {
                title:body.title,
                content:body.content
            }
        });
        return c.json({
            id: post.id
        });
    }
    catch(e){
        console.log(e);
    }
	
})

//6. delete blog
postRouter.delete('/:id', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const id = c.req.param('id');
    try {
      const post = await prisma.post.delete({
        where: {
          id: id,
        },
      });
      return c.json({ message: "Post deleted successfully" });
    } catch (e) {
      return c.json({ message: "Error deleting post" }, 500);
    }
  });
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzODg4MDZjLTE5YzctNGQ3MS1iZWJkLTFhOTU3NThkMjY4NSJ9.NYGN2fDedZ2RzOp7aWMw975BSR0WyRsNciQWXwWBdpc
//40c3d65b-5bb5-4e17-81ea-095ca7a656d5

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIzNGE1YWI1LTE3MzAtNDY1Yi04ZjU2LTIwMWFmYWJkZjRlZSJ9.b2ZiBI-nckxTDXHc0wTa2D5qBLUuN846oL0S0BDbSKQ

//90eeb9ac-6b0c-47c0-b579-b2d2ab7d233e