const knex = require('../knex');

// タイプキーカウントの新規作成
exports.createTypoKeyCount = async (req, res) => {
    try {
        const [newTypoKeyCount] = await knex('typo_key_count')
            .insert(req.body)
            .returning('*');
        res.status(201).json(newTypoKeyCount);
    } catch(error) {
        res.status(500).json({ message: 'タイプキーカウントの作成に失敗しました', error})
    }
}

// 特定のユーザーの、全てのタイプキーカウントを取得
exports.getTypoKeyCountById = async (req, res) => {
    try {
        const userId = req.params.id;
        const allTypoKeyCount = await knex('typo_key_count')
            .where('user_id', userId)
            .select('*');
        res.status(200).json(allTypoKeyCount);
    } catch(error) {
        res.status(500).json({ message: 'タイピング記録の取得に失敗しました', error})
    }
}
