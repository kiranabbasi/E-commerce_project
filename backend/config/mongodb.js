import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1); // Exit process with failure
    }
};

mongoose.connection.on('connected', () => {
    console.log("Mongoose connected to the database");
});

mongoose.connection.on('error', (err) => {
    console.error("Mongoose connection error:", err);
});

mongoose.connection.on('disconnected', () => {
    console.log("Mongoose disconnected from the database");
});

export default connectDB;
