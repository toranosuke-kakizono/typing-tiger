const knex = require('../knex');

// タイプキーカウントの新規作成
exports.createTypeKeyCount = async (req, res) => {
    try {
        const [newTypeKeyCount] = await knex('type_key_count')
            .insert(req.body)
            .returning('*');
        res.status(201).json(newTypeKeyCount);
    } catch(error) {
        res.status(500).json({ message: 'タイプキーカウントの作成に失敗しました', error})
    }
}

// 特定のユーザーの、全てのタイプキーカウントを取得
exports.getTypeKeyCountById = async (req, res) => {
    try {
        const userId = req.params.id;
        const allTypeKeyCount = await knex('type_key_count')
            .where('user_id', userId)
            .select('*');
        res.status(200).json(allTypeKeyCount);
    } catch(error) {
        res.status(500).json({ message: 'タイピング記録の取得に失敗しました', error})
    }
}
