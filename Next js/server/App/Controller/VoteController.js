const { Getio } = require("../../socket/Socket");
const { Votemodel } = require("../Model/Vote");

const VoteController = {

    VoteCreate: async (req, res) => {
        try {

            let { Title, User, voteType } = req.body;

            let InsertObj = { Title, User, voteType };

            let CheckData = await Votemodel.findOne({ Title: Title, User: User });


            var voteData;

            if (CheckData) {
                CheckData.voteType = voteType;
                CheckData.updatedAt = Date.now();
                voteData = await CheckData.save();
            } else {
                voteData = await Votemodel.create(InsertObj);
            }

            const io = Getio();

            io.emit("voteType", {
                Title: Title,
                User: User,
                voteType: voteType,
            })


            res.status(201).json({
                status: true,
                message: "Vote givr Sec.",
                voteType,
                data : voteData
            })

        }
        catch (error) {
            console.log(error.message)
            res.status(500).json({
                status: false,
                message: "Internal Error",
                error: error.message
            })
        }
    },

    voteView : async (req, res) =>{
        try{

            const likes = await Votemodel.countDocuments({voteType : 'Likes'});

            const Dislikes = await Votemodel.countDocuments({voteType : 'Dislikes'});

            const data = await Votemodel.find();

            res.status(200).json({
                status : true,
                Likes : likes,
                Dislikes : Dislikes,
                data
            })

        }
        catch(error){
            res.status(500).json({
                status : false,
                message : "Internal Error",
                error : error.message
            })
        }
    }

}

module.exports = { VoteController };