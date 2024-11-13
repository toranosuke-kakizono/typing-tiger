const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const {errorHandler} = require("./utils/errorHandler");

const app = express();

app.use(express.json());

app.use(cors());

// ルート設定
app.use('/api', routes);

// エラーハンドリングミドルウェアを使う
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`サーバーが起動しました: http://localhost:${PORT}`);
})