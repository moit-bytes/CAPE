const cors = require('cors');

console.log("Database_URL", process.env.MONGODB_URI);
require('./config/db');


const app = require('express')();
app.use(cors({
    origin: "*"
}))
const port = process.env.PORT || 3000;

const userRouter = require('./api/User');

//For accepting post form data

const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', userRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});