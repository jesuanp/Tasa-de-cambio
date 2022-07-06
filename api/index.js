const app = require('./app.js');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`)
})
