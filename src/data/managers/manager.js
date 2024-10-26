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

    paginate = async (filter) => {
        try {
            const response = await this.model.paginate(filter);
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
}

export default Manager;