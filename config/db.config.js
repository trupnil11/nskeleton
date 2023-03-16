import mongoose from "mongoose";

export const mongoConnect = async function () {
	mongoose.set("strictQuery", false);
	mongoose.connect(process.env.MONGODB_URL, {}).then(console.log("MongoDB connected successfully"));
};
