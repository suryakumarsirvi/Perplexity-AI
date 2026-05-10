import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
        index: true
    },

    title: {
        type: String,
        default: "New Chat"
    },

    lastMessage: {
        type: String
    }

}, { timestamps: true });

const ChatModel = mongoose.model("chats", ChatSchema);

export default ChatModel;