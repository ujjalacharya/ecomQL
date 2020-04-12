const Query = {
    getAllDogs(parent, args, ctx, info){
        return global.dogs || [];
    }
};

module.exports = Query;
