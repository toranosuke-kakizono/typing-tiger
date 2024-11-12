const knex = require('../knex');

// タイピング記録の新規作成
exports.createRecord = async (req, res, next) => {
    try {
        const [typingRecord] = await knex('typing_records')
            .insert(req.body)
            .returning('*');
        res.status(201).json(typingRecord);
    } catch (error) {
        next(error);
    }
}

// 特定のユーザーの、全てのタイピング記録を取得
exports.getAllRecordsById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const allRecords = await knex('typing_records')
            .where('user_id', userId)
            .select('*');
        res.status(200).json(allRecords);
    } catch (error) {
        next(error);
    }
}

// 特定のユーザーから最新のレコードを取得
exports.getRecordById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const record = await knex('typing_records')
            .where('user_id', userId)
            .first('*');
        res.status(200).json(record);
    } catch (error) {
        next(error);
    }
}

// 特定のユーザーの自己ベストを取得
exports.getBestRecordById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const record = await knex('typing_records')
            .where('user_id', userId)
            .orderBy('wpm', 'desc')
            .first('*');
        res.status(200).json(record);
    } catch (error) {
        next(error);
    }
}