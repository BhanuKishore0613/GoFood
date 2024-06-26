const mongoose = require('mongoose')

const mongoURI = 'mongodb://gofood:Chinnu9492@ac-m0usitz-shard-00-00.3h9c3zm.mongodb.net:27017,ac-m0usitz-shard-00-01.3h9c3zm.mongodb.net:27017,ac-m0usitz-shard-00-02.3h9c3zm.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-ng36u8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Mongoose connected to MongoDB');

        const fetched_data = async () => {
            try {
                // const data = await mongoose.connection.db.collection("food_items")
                // data.find({}).toArray(async function(err,data){
                //     const food_Category = await mongoose.connection.db.collection("foodCategory")
                //     food_Category.find({}).toArray(function (err,catData){
                //         global.food_items = data;
                //         global.food_Category=catData
                //     })
                // })
                const foodItemsCollection = await mongoose.connection.db.collection("food_items");
                const foodItems = await foodItemsCollection.find({}).toArray();

                const foodCategoryCollection = await mongoose.connection.db.collection("foodCategory");
                const foodCategory = await foodCategoryCollection.find({}).toArray();

                global.food_items = foodItems;
                global.foodCategory = foodCategory;
                console.log();
            }
            catch (err) {
                console.log("Error fetching data:", err)
            }

        };

        await fetched_data();
    } catch (err) {
        console.log(err);
    }
};

module.exports = mongoDB
