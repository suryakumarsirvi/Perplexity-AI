import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "chats",
        required: true,
        index: true
    },

    role: {
        type: String,
        enum: ["user", "assistant", "system"],
        required: true
    },

    content: {
        type: String,
        required: true
    }

}, { timestamps: true });

MessageSchema.index({ chatId: 1, createdAt: -1 });

const MessageModel = mongoose.model("messages", MessageSchema);

export default MessageModel;