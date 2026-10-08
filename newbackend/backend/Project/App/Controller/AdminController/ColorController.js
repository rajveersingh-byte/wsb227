const { ColorModel } = require("../../Model/Color");

let ColorCreate = async (req, res) => {
    try {


        let {ColorName, ColorCode, Order, Status } = req.body;


        let InsertObj = {ColorName, ColorCode, Order, Status } ;
    

        let data = await ColorModel.create(InsertObj);

        if (!data) {
            return res.status(400).json({
                status: false,
                message: "Data Not Created"
            });
        }

        return res.status(201).json({
            status: true,
            message: "Data Created Successfully",
            data: data
        });

    } catch (error) {

        return res.status(500).json({
            status: false,
            message: "Internal error",
            error: error.message
        });
    }
};

let ColorView = async (req, res) => {
    try {

        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit || 10);
        let search = req.query.search || "";


        let skip = (page - 1) * limit;

        let SearchFilter = {
            ColorName: { $regex: search, $options: 'i' }
        }

        let ColorData = await ColorModel.find(SearchFilter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)

        let TotalItem = await ColorModel.countDocuments(SearchFilter);
        let total = Math.ceil(TotalItem / limit);

        if (ColorData.length == 0) {
            res.status(404).json({
                status: false,
                message: "Data Not Found"
            })
        }

        res.status(200).json({
            status: true,
            message: "Data Founded",
            pagenation: {
                currentpage: page,
                limit,
                TotalItem,
                total
            },
            data: ColorData
        })

    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: "Internal error",
            error: error.message
        })
    }
}

module.exports = {ColorCreate, ColorView}