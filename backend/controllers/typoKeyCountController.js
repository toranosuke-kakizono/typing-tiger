const knex = require('../knex');

// タイプキーカウントの新規作成
exports.createTypoKeyCount = async (req, res, next) => {
    try {
        const [newTypoKeyCount] = await knex('typo_key_count')
            .insert(req.body)
            .returning('*');
        res.status(201).json(newTypoKeyCount);
    } catch (error) {
        next(error);
    }
}

// 特定のユーザーの、全てのタイプキーカウントを取得
exports.getTypoKeyCountById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const allTypoKeyCount = await knex('typo_key_count')
            .where('user_id', userId)
            .select('*');
        res.status(200).json(allTypoKeyCount);
    } catch (error) {
        next(error);
    }
}
