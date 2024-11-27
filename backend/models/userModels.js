const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Please add Name"]
        },
        email: {
            type: String,
            require: [true, "Please add Email"],
            unique: true
        },
        password: {
            type: String,
            require: [true, "Please add Password"]
        },
        isAdmin: {
            type: Boolean,
            require: true,
            default: false
        }
    }, 
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);