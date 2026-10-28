const { UserModel } = require("../Model/User");

const UserController = {

    UserCreate: async (req, res) => {

        try {

            let { UserName, UserEmail, PhoneNumber, status } = req.body;

            let InsetObj = { UserName, UserEmail, PhoneNumber, status };

            let Data = await UserModel.create(InsetObj);

            if (!Data) {
                res.status(404).json({
                    status: false,
                    message: "Page Not Found"
                })
            }


            res.status(200).json({
                status: true,
                message: "User create",
                Data
            })

        }
        catch (error) {
            res.status(500).json({
                status: false,
                message: "Internal error",
                error: error.message
            })
        }


    },

    UserView : async (req, res) =>{
        
        let DataView = await UserModel.find().sort({createdAt : -1});

        if(!DataView.length === 0){
            res.status(400).json({
                status : false,
                message : "User Not found"
            })
        }

        res.status(200).json({
            status : true,
            message : "User",
            data : DataView
        })

    }

}


module.exports = { UserController }

