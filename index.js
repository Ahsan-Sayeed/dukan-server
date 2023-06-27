const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 4000;
require('./config/db.config');

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})