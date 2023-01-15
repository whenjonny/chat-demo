import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        avatarImage: String,
    }, {
        collection: 'users',
        versionKey: false,
    }
);