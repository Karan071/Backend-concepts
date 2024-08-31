import mongoose from "mongoose";

    const TodoSchema = new mongoose.Schema({
    content : {
    type : String,
    required : true,
    },
    complete : {
    type : Boolean,
    default : false
    },
    // for reference in type, we have to provide ref also
    createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
    },
    subTodos : [
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "SubTodo"
    }
    ] // Array of sub todos
},{timestamps : true});

export const Todo = mongoose.model("Todo", TodoSchema);
