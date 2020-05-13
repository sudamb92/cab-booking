import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const port = 8090;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req: any, res: any, next: any) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8090');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authenticated');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api', router);

app.listen(port, err => {
    if(err) {
        console.log("Internel server error");
    } 
    console.log("Server is listening")
})
