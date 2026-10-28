const { UserModel } = require("../../Model/User");

const UserCreate  = async (req, res) => {
    try{

        let {UserName, UserEmail, MangerId, UserNumber, UserRol, Status} = req.body;

        let InsertObj = {UserName, UserEmail, MangerId, UserNumber, UserRol, Status};

        let Data = await UserModel.create(InsertObj);

        if(!Data){
            res.status(404).json({
                _status : false,
                _message : "Data Not Create"
            })
        }

        res.status(201).json({
            _status : true,
            _message : "User Insert in DataBase",
            _data : Data
        })

    }
    catch(error){
        res.status(500).json({
            _status : false,
            _message : error.message
        })
    }
}

const UserView = async (req, res) =>{
    try{

        let ViewData = await UserModel.find()
        .populate('MangerId')
        .sort({createdAt : -1})
        ;

        if(ViewData.length==0){
            res.status(404).json({
                status : false,
                message : "No Data found"
            })
        }

        res.status(200).json({
            status : true,
            message : "Data Found",
            _data : ViewData
        })

    }
    catch(error){
        res.status(500).json({
            _status : false,
            message : "Internal error",
            error : error.message
        })
    }
}

module.exports = {UserCreate, UserView}