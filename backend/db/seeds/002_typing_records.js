const { faker } = require('@faker-js/faker');

exports.seed = async function (knex) {
  await knex('typing_records').del();

  const users = await knex('users').pluck('id');

  const typingRecords = [];

  for (let i = 0; i < 300; i++) {
    const userId = faker.helpers.arrayElement(users);

    let typeCount, typoCount, seconds, wpm;
    do {
      typeCount = faker.number.int({ min: 200, max: 1300 });
      typoCount = faker.number.int({ min: 0, max: 100 });
      seconds = faker.number.int({ min: 30, max: 600 });
      wpm = Math.floor(((typeCount - typoCount) / 5) / (seconds / 60)); // WPMは単語の長さに左右されないように、1単語5文字として計算。
    } while (wpm < 20 || wpm > 130);

    const accuracy = Math.floor(((typeCount - typoCount) / typeCount) * 100);

    typingRecords.push({
      room_id: faker.string.uuid(),
      user_id: userId,
      word_count: Math.floor(typeCount / 5),
      seconds: seconds,
      type_count: typeCount,
      typo_count: typoCount,
      accuracy: accuracy,
      wpm: wpm,
      timestamp: faker.date.past()
    });
  }

  await knex('typing_records').insert(typingRecords);
};