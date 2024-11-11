const { app } = require('./server');

const PORT = 1129;

app.listen(PORT, () => {
    console.log(`サーバーが起動しています：　http://localhost:${PORT}`);
});