const knex = require('../knex');

// ユーザーの新規作成
exports.createUser = async (req, res) => {
    try {
        const [newUser] = await knex('users')
            .insert(req.body)
            .returning('*');
        res.status(201).json(newUser);
    } catch(error) {
        res.status(500).json({ message: 'ユーザーの作成に失敗しました', error});
    }
}

// 全ユーザーの取得
exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await knex('users').select('*');
        res.status(200).json(allUsers);
    } catch(error) {
        res.status(500).json({ message: '全ユーザーの取得に失敗しました', error})
    }
}

// 特定のユーザーの取得
exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await knex('users')
            .where('id', userId)
            .select('*');
        if (!user) {
            res.status(404).json({message: 'ユーザーが見つかりませんでした'})
        }
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({ message: 'ユーザーの取得に失敗しました', error})
    }
}