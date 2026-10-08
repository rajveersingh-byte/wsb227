const { createSlug } = require("../../helper/helper");
const { CategoryModel } = require("../../Model/Category");


let CategoryCreate = async (req, res) => {
    try {

        console.log(req.file);

        let {CategoryName, Order, MetaTitle, MetaDescription, Status } = req.body;

        let slug = createSlug(CategoryName);

        let InsertObj = { CategoryName, Order, MetaTitle, slug, MetaDescription, Status };
      
       if(req.file){
        if(req.file.filename){
            InsertObj['CategoryImage'] = req.file.filename;
        }
       }
        console.log("INSERT OBJECT:", InsertObj);

        let data = await CategoryModel.create(InsertObj);

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

let CategoryView = async (req, res) => {
    try {

        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit || 10);
        let search = req.query.search || "";


        let skip = (page - 1) * limit;

        let SearchFilter = {
            CategoryName: { $regex: search, $options: 'i' }
        }

        let CategoryData = await CategoryModel.find(SearchFilter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)

        let TotalItem = await CategoryModel.countDocuments(SearchFilter);
        let total = Math.ceil(TotalItem / limit);

        if (CategoryData.length == 0) {
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
            data: CategoryData,
            path : process.env.CategoryImage
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

module.exports = { CategoryCreate, CategoryView }