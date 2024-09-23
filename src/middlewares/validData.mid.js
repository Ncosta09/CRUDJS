function validateProductData(req, res, next){
    try {
        const data = req.body;
        const { title, photo, category, price, stock } = req.body;

        if(!title || !photo || !category || !price || !stock){
            const error = new Error("ALL PROPERTIES ARE REQUIRED!");
            error.statusCode = 400;

            throw error;
        }else{
            return next();
        }

    } catch (error) {
        throw error;
    }
}

export default validateProductData;