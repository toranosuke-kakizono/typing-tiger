const { faker } = require('@faker-js/faker');

exports.seed = async function(knex) {
  await knex('typo_key_count').del();

  const usersIdObj = await knex('users').select('id');
  const usersId = usersIdObj.map(obj => obj.id);

  const typoKeyCount = [];
  for (let i = 0; i < usersId.length; i++) {

    typoKeyCount.push({
      user_id: usersId[i],  // user_id は user テーブルの id に紐づけられる
      typo_a_key: faker.number.int({ min: 500, max: 3000}),
      typo_b_key: faker.number.int({ min: 500, max: 3000}),
      typo_c_key: faker.number.int({ min: 500, max: 3000}),
      typo_d_key: faker.number.int({ min: 500, max: 3000}),
      typo_e_key: faker.number.int({ min: 500, max: 3000}),
      typo_f_key: faker.number.int({ min: 500, max: 3000}),
      typo_g_key: faker.number.int({ min: 500, max: 3000}),
      typo_h_key: faker.number.int({ min: 500, max: 3000}),
      typo_i_key: faker.number.int({ min: 500, max: 3000}),
      typo_j_key: faker.number.int({ min: 500, max: 3000}),
      typo_k_key: faker.number.int({ min: 500, max: 3000}),
      typo_l_key: faker.number.int({ min: 500, max: 3000}),
      typo_m_key: faker.number.int({ min: 500, max: 3000}),
      typo_n_key: faker.number.int({ min: 500, max: 3000}),
      typo_o_key: faker.number.int({ min: 500, max: 3000}),
      typo_p_key: faker.number.int({ min: 500, max: 3000}),
      typo_q_key: faker.number.int({ min: 500, max: 3000}),
      typo_r_key: faker.number.int({ min: 500, max: 3000}),
      typo_s_key: faker.number.int({ min: 500, max: 3000}),
      typo_t_key: faker.number.int({ min: 500, max: 3000}),
      typo_u_key: faker.number.int({ min: 500, max: 3000}),
      typo_v_key: faker.number.int({ min: 500, max: 3000}),
      typo_w_key: faker.number.int({ min: 500, max: 3000}),
      typo_x_key: faker.number.int({ min: 500, max: 3000}),
      typo_y_key: faker.number.int({ min: 500, max: 3000}),
      typo_z_key: faker.number.int({ min: 500, max: 3000}),
      typo_A_key: faker.number.int({ min: 500, max: 3000}),
      typo_B_key: faker.number.int({ min: 500, max: 3000}),
      typo_C_key: faker.number.int({ min: 500, max: 3000}),
      typo_D_key: faker.number.int({ min: 500, max: 3000}),
      typo_E_key: faker.number.int({ min: 500, max: 3000}),
      typo_F_key: faker.number.int({ min: 500, max: 3000}),
      typo_G_key: faker.number.int({ min: 500, max: 3000}),
      typo_H_key: faker.number.int({ min: 500, max: 3000}),
      typo_I_key: faker.number.int({ min: 500, max: 3000}),
      typo_J_key: faker.number.int({ min: 500, max: 3000}),
      typo_K_key: faker.number.int({ min: 500, max: 3000}),
      typo_L_key: faker.number.int({ min: 500, max: 3000}),
      typo_M_key: faker.number.int({ min: 500, max: 3000}),
      typo_N_key: faker.number.int({ min: 500, max: 3000}),
      typo_O_key: faker.number.int({ min: 500, max: 3000}),
      typo_P_key: faker.number.int({ min: 500, max: 3000}),
      typo_Q_key: faker.number.int({ min: 500, max: 3000}),
      typo_R_key: faker.number.int({ min: 500, max: 3000}),
      typo_S_key: faker.number.int({ min: 500, max: 3000}),
      typo_T_key: faker.number.int({ min: 500, max: 3000}),
      typo_U_key: faker.number.int({ min: 500, max: 3000}),
      typo_V_key: faker.number.int({ min: 500, max: 3000}),
      typo_W_key: faker.number.int({ min: 500, max: 3000}),
      typo_X_key: faker.number.int({ min: 500, max: 3000}),
      typo_Y_key: faker.number.int({ min: 500, max: 3000}),
      typo_Z_key: faker.number.int({ min: 500, max: 3000}),
    });
  }

  // typing_record テーブルにデータを挿入
  await knex('typo_key_count').insert(typoKeyCount);
};