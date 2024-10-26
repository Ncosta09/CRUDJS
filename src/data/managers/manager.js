import { Types } from "mongoose";

class Manager {
    constructor(model){
        this.model = model;
    }

    create = async (data) => {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            throw error;   
        }
    }

    readAll = async (filter) => {
        try {
            const response = await this.model.find(filter, '-__v');
            return response;
        } catch (error) {
            throw error;   
        }
    }

    paginate = async (filter, paginate) => {
        try {
            const response = await this.model.paginate(filter, paginate);
            return response;
        } catch (error) {
            throw error;   
        }
    }

    read = async (id) => {
        try {
            const response = await this.model.findOne({_id: id});
            return response;
        } catch (error) {
            throw error;   
        }
    }

    update = async (id, data) => {
        try {
            const opts = {new: true}
            const response = await this.model.findOneAndUpdate({_id: id}, data, opts);
            return response;
        } catch (error) {
            throw error;   
        }
    }

    destroy = async (id) => {
        try {
            const response = await this.model.findOneAndDelete({_id: id});
            return response;
        } catch (error) {
            throw error;   
        }
    }

    calculateTotlal = async (id) => {
        try {
            const total = await this.model.aggregate([
                { $match: { user_id: new Types.ObjectId(id) } },
                { $lookup: {
                    foreignField: "_id",
                    from: "products",
                    localField: "product_id",
                    as: "product_id"
                }},
                { $replaceRoot: { 
                    newRoot: { 
                        $mergeObjects: [{ $arrayElemAt: ["$product_id", 0] },
                        "$$ROOT"] 
                    }
                }},
                { $set: { 
                    subTotal: { $multiply: [
                        "$quantity",
                        "$price"
                    ]} 
                }},
                { $group: { 
                    _id: "$user_id",
                    total: { 
                        $sum: "$subTotal" 
                    } 
                }},
                { $project: { 
                    _id: 0,
                    user_id: "$_id",
                    total: "$total",
                    date: new Date() 
                }},
                { $lookup: {
                    foreignField: "_id",
                    from: "users",
                    localField: "user_id",
                    as: "user_id"
                }},
                { $replaceRoot: { 
                    newRoot: { 
                        $mergeObjects: [{ $arrayElemAt: ["$user_id", 0] },
                        "$$ROOT"] 
                    }
                }},
                { $project: { 
                    _id: 0,
                    user_id: 0,
                    password: 0,
                    photo: 0,
                    role: 0,
                    __v: 0,
                    isOnline: 0
                }}
            ]);

            return total;

        } catch (error) {
            throw error;
        }
    }
}

export default Manager;