const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// CORS設定
app.use(cors());

// ルート設定
app.use('/api', routes);

// サーバー起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`サーバーが起動しました: http://localhost:${PORT}`);
})