function validateProductData(req, res, next){
    try {
        //const data = req.body;
        const { title, photo, category, price, stock } = req.body;

        if(!title || !photo || !category || !price || !stock){
            const error = new Error("ALL PROPERTIES ARE REQUIRED!");
            error.statusCode = 400;

            throw error;
        }
        if (typeof price !== 'number' || price < 0 || typeof stock !== 'number' || stock <= 0) {
            return res.status(400).json({ message: "PRICE AND STOCK MUST BE A POSITIVE NUMBER!" });
        }
        else{
            return next();
        }

    } catch (error) {
        throw error;
    }
}

function validateProductUpdateData(req, res, next){
    try {
        const { title, photo, category, price, stock } = req.body;

        if(!title && !photo && !category && price == null && stock == null){
            return res.status(400).json({ message: "AT LEAST ONE PROPERTY MUST BE PROVIDED TO UPDATE!" })
        }
        if(price !== undefined && (typeof price !== 'number' || price < 0)){
            return res.status(400).json({ message: "PRICE MUST BE A POSITIVE NUMBER!" })
        }
        if(stock !== undefined && (typeof stock !== 'number' || stock <= 0)){
            return res.status(400).json({ message: "STOCK MUST BE A POSITIVE NUMBER!" })
        }
        else{
            return next();
        }
        
    } catch (error) {
        
    }
}

export {
    validateProductData, 
    validateProductUpdateData
};