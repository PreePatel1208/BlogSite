const { connectToDatabase } = require('../../pages/Lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);

            }
        

        case 'POST': {
            if(req.body){
                console.log("in body");
                return getSinglePost(req.body.slug);

            }else{

                return addPost(req, res);
            }
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}

 async function getSinglePost(slug){
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        // fetch the posts
        let posts = await db
            .collection('posts')
            .find()
        
        console.log('posts',posts);

        // // return the posts
        // return res.json({
        //     message: JSON.parse(JSON.stringify(posts)),
        //     success: true,
        // });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
async function getPosts(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the posts
        let posts = await db
            .collection('posts')
            .find({})
            .sort({ published: -1 })
            .toArray();
        // return the posts
        console.log('posts',posts);
        return res.json({
            message: JSON.parse(JSON.stringify(posts)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


async function addPost(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        console.log(req.body);
        // add the post
        await db.collection('posts').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Post added successfully',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
 async function updatePost(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        // update the published status of the post
        await db.collection('posts').updateOne(
            {
                _id: new ObjectId(req.body),
            },
            { $set: { published: true } }
        );

        // return a message
        return res.json({
            message: 'Post updated successfully',
            success: true,
        });
    } catch (error) {

        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function deletePost(req, res) {
    try {
        // Connecting to the database
        let { db } = await connectToDatabase();

   let server=     await db.collection('posts').deleteOne({
            _id: new ObjectId (req.body),
        });
        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}