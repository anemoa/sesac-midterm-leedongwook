const express = require('express');
const app = express();
const PORT = 8080;
const router = require('./routes/todo');
const {sequelize} = require('./models');



app.use(express.json());
app.use('/', router);



sequelize
    // force: true; 서버 실행때 마다 테이블을 재 생성
    // force: false; 서버 실행시 테이블이 없으면 생성
    .sync({ force: false })
    .then( () => {
        app.listen(PORT, () => {
            console.log(`Database 연결 성공!`);
            console.log(`서버 접속! ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });