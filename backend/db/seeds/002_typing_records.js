const { faker } = require('@faker-js/faker');

exports.seed = async function (knex) {
  await knex('typing_records').del();

  const users = await knex('users').pluck('id');

  const typingRecords = [];

  for (let i = 0; i < 300; i++) {
    const userId = faker.helpers.arrayElement(users);

    let accurate_key_count, inaccurate_key_count, seconds, wpm;
    do {
      accurate_key_count = faker.number.int({ min: 200, max: 1300 });
      inaccurate_key_count = faker.number.int({ min: 0, max: 100 });
      seconds = faker.number.int({ min: 30, max: 600 });
      wpm = Math.floor(((accurate_key_count - inaccurate_key_count) / 5) / (seconds / 60)); // WPMは単語の長さに左右されないように、1単語5文字として計算。
    } while (wpm < 20 || wpm > 130);

    const accuracy = Math.floor(((accurate_key_count - inaccurate_key_count) / accurate_key_count) * 100);

    typingRecords.push({
      room_id: faker.string.uuid(),
      user_id: userId,
      word_count: Math.floor(accurate_key_count / 5),
      seconds: seconds,
      accurate_key_count: accurate_key_count,
      inaccurate_key_count: inaccurate_key_count,
      accuracy: accuracy,
      wpm: wpm,
      timestamp: faker.date.past()
    });
  }

  await knex('typing_records').insert(typingRecords);
};