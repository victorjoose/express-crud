
let posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
    { id: 3, title: 'Post Three' }
];

const getPosts = (req, res, next) => {
    const limit = parseInt(req.query.limit)

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }
    res.status(200).json(posts)
};

const getPost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => {
        return post.id === id
    })
 
    if (!post) {
        const error = new Error(`A post with the id ${id} was not found`);
        error.status = 404;
        return next(error)
    }
    
    return res.status(200).json(post)
};

const createPost = (req, res, next) => {
    const post = {
        id: posts.length + 1,
        title: req.body.title
    }

    if (!post.title) {
        const error = new Error(`Please provide a title for the post`);
        error.status = 400;
        return next(error)
    }
    posts.push(post)
    res.status(201).json(post)
};

const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => {
        return post.id === id
    })

    if (!post) {
        const error = new Error(`A post with the id ${id} was not found`);
        error.status = 404;
        return next(error)
    }

    post.title = req.body.title
    res.status(200).json(post)
};

const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => {
        return post.id === id
    })

    if (!post) {
        return res.status(404).json({ message: `A post with the id ${id} was not found` })
    }

    // Return all the posts except the one the user wants to delete
    posts = posts.filter((post) => {
        return post.id !== id
    })

    res.status(200).json(posts)
};


module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}