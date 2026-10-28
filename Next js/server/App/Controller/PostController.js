const { PostModel } = require("../Model/Post");

const PostCreate = async (req, res) => {
    try {

        let { PostTitle, PostDescription, status } = req.body;

        let InsertObj = { PostTitle, PostDescription, status };

        let DataEnter = await PostModel.create(InsertObj);

        if (!DataEnter) {
            res.status(404).json({
                _status: false,
                _message: "Post Not Create"
            })
        }

        res.status(201).json({
            _status: true,
            _message: true,
            _data: DataEnter
        })

    }
    catch (error) {
        res.status(500).json({
            _status: false,
            _message: "Internal Error",
            _error: error.message
        })
    }
}

const PostView = async (req, res) => {
    try {

        const post = await PostModel.find();

        res.status(200).json({
            _status: true,
            _data: post
        })

    }

    catch (error) {
        res.status(500).json({
            _status: false,
            _message: "Internal Error",
            _error: error.message
        })
    }
}



module.exports = { PostCreate, PostView}