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
            const response = await this.model.find(filter);
            return response;
        } catch (error) {
            throw error;   
        }
    }

    read = async (id) => {
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            throw error;   
        }
    }

    update = async (id, data) => {
        try {
            const opts = {new: true}
            const response = await this.model.findByIdAndUpdate(id, data, opts);
            return response;
        } catch (error) {
            throw error;   
        }
    }

    delete = async (id) => {
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            throw error;   
        }
    }
}

export default Manager;