const Mutations = {
    createDog(parent, args, ctx, info){
        global.dogs = global.dogs || [];
        let newDog = {name: args.name, breed: args.breed};
        global.dogs.push(newDog);
        return newDog;
    }
};

module.exports = Mutations;
