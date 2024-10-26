import cartsManager from "../data/managers/cart.manager.js";

const create = async (req, res, next) => {
    try {
        const data = req.body;
        const response = await cartsManager.create(data);
        return res.status(201).json({ response, message: "CART CREATED" })
    } catch (error) {
        return next(error);
    }
}

const readAll = async (req, res, next) => {
    try {
        const filter = req.query;
        const response = await cartsManager.readAll(filter);
        return res.status(200).json({ response, message: "CARTS READ" })
    } catch (error) {
        return next(error);
    }
}

const read = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const response = await cartsManager.read(cid);
        return res.status(200).json({ response, message: "CART READ" })
    } catch (error) {
        return next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const data = req.body;
        const response = await cartsManager.update(cid, data);
        return res.status(200).json({ response, message: "CART UPDATED" })
    } catch (error) {
        return next(error);
    }
}

const destroy = async (req, res, next) => {
    try {
        const cid = req.params.cid;
        const data = req.body;
        const response = await cartsManager.destroy(cid, data);
        return res.status(200).json({ response, message: "CART DELETED" })
    } catch (error) {
        return next(error);
    }
}

const calculateTotlal = async (req, res, next) => {
    try {
        const uid = req.params.uid;
        const response = await cartsManager.calculateTotlal(uid);
        return res.status(200).json({ response })
    } catch (error) {
        return next(error);
    }
}

export {
    create,
    readAll,
    read,
    update,
    destroy,
    calculateTotlal
}

