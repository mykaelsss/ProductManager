const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;


app.use( cors() );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));

require('./config/mongoose.config');
require('./routes/product.routes')(app);

app.listen(port, () => console.log(`We have officially landed on port ${port}\n Welcome All to my humble home!`))
