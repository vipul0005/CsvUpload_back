const mongoose = require("mongoose");
const csvSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    file: {
      type: Array,
    },
    createdAt: {
      type: String,
      default: function () {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      },
    },
    createdTime: {
      type: String,
      default: function () {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
      },
    },
  },
  {
    timestamps: false,
  }
);
module.exports = mongoose.model("csvfiles", csvSchema);
