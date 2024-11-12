const knex = require('../knex');

// タイピング記録の新規作成
exports.createRecord = async (req, res) => {
    try {
        const [typingRecord] = await knex('typing_records')
            .insert(req.body)
            .returning('*');
        res.status(201).json(typingRecord);
    } catch(error) {
        res.status(500).json({ message: 'タイピング記録の作成に失敗しました', error});
    }
}

// 特定のユーザーの、全てのタイピング記録を取得
exports.getAllRecordsById = async (req, res) => {
    try {
        const userId = req.params.id;
        const allRecords = await knex('typing_records')
            .where('user_id', userId)
            .select('*');
        res.status(200).json(allRecords);
    } catch(error) {
        res.status(500).json({ message: 'タイピング記録の取得に失敗しました', error})
    }
}