const express=require("express");
const mongoose=require("mongoose");
const app=express();

const dotenv=require("dotenv");
const pinRoute=require("./routes/pins");
const userRoute=require("./routes/users");

app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB connected");
})
.catch((err)=>{
    console.log(err);
});

app.use("/api/pins",pinRoute);
app.use("/api/users",userRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });



app.listen(3000,()=>{
console.log("backend server is running ");
})