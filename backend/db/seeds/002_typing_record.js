const { faker } = require('@faker-js/faker');

exports.seed = async function(knex) {
  await knex('typing_record').del();

  const usersIdObj = await knex('users').select('id');
  const usersId = usersIdObj.map(obj => obj.id);

  // typing_record テーブルのデータを作成
  const typingRecords = [];

  for (let i = 0; i < 300; i++) {
    const randomIndex = Math.floor(Math.random() * usersId.length);

    const accurate_word_count = faker.number.int({ min: 80, max: 400 });
    const inaccurate_word_count = faker.number.int({ min: 0, max: 100 });
    const word_count = accurate_word_count + inaccurate_word_count;
    const seconds = faker.number.int({ min: 30, max: 600 });

    typingRecords.push({
      room_id: faker.string.uuid(),
      user_id: usersId[randomIndex],
      word_count: faker.number.int({ min: 100, max: 500 }),
      seconds: seconds,
      accurate_word_count,
      inaccurate_word_count,
      accuracy: Math.floor(accurate_word_count / word_count * 100),
      wpm: Math.floor(accurate_word_count / seconds * 60),
      timestamp: faker.date.past()
    });
  }

  // typing_record テーブルにデータを挿入
  await knex('typing_record').insert(typingRecords);
};
