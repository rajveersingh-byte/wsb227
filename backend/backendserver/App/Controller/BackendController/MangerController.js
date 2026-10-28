const { MangerModel } = require("../../Model/Manger");

const MangerCreate = async (req, res) => {
    try {

        let { MangerName, MangerDepartment, User, PhoneNumber } = req.body;

        let InsertObj = { MangerName, MangerDepartment, User, PhoneNumber };

        let Data = await MangerModel.create(InsertObj);

        if (!Data) {
            res.status(404).json({
                _status: false,
                _message: "Data Not Create"
            })
        }

        res.status(201).json({
            _status: true,
            _message: "User Insert in DataBase",
            _data: Data
        })

    }
    catch (error) {
        res.status(500).json({
            _status: false,
            _message: error.message
        })
    }

}

const MangerView = async (req, res) =>{
    try{

        let ViewData = await MangerModel.find()
        .populate('User')
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


module.exports = { MangerCreate, MangerView }