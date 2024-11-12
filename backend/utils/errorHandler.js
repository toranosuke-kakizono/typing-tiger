exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    // エラーレスポンスを送信
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};