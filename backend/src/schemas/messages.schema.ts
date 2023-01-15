import mongoose from "mongoose";

export const MessageSchema = new mongoose.Schema(
    {
        message: {
            text: { type: String, required: true },
        },
        extra: {
            type: { type: String, required: false },
        },
        users: Array,
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);