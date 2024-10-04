const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    message: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chats",
    },
  },
  { timestamps: true }
);

const messageModal = mongoose.model("Messages", messageSchema);
module.exports = messageModal;
