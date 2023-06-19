const express = require("express");

const router = express.Router();

const posts = [ 
    {  
        "data": 
        {    
        "postId": "",    
        "user": "",    
        "title": "",    
        "content": "",    
        "createdAt": ""  
        }
    }
]

router.get("/posts/:_postsId", (req, res) => {
	const { postsId } = req.params;
	const [detail] = posts.filter((posts) => posts.postsId === Number(postsId));
	res.json({ detail })
})