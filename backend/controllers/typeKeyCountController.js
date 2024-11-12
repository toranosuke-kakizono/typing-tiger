const knex = require('../knex');

// タイプキーカウントの新規作成
exports.createTypeKeyCount = async (req, res, next) => {
    try {
        const [newTypeKeyCount] = await knex('type_key_count')
            .insert(req.body)
            .returning('*');
        res.status(201).json(newTypeKeyCount);
    } catch (error) {
        next(error);
    }
}

// 特定のユーザーの、全てのタイプキーカウントを取得
exports.getTypeKeyCountById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const allTypeKeyCount = await knex('type_key_count')
            .where('user_id', userId)
            .select('*');
        res.status(200).json(allTypeKeyCount);
    } catch (error) {
        next(error);
    }
}
