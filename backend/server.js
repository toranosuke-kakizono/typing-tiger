const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const {errorHandler} = require("./utils/errorHandler");

const app = express();

app.use(express.json());

// CORS設定
app.use(cors());

// ルート設定
app.use('/api', routes);

// エラーハンドリングミドルウェア
app.use(errorHandler);

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`サーバーが起動しました: http://localhost:${PORT}`);
})