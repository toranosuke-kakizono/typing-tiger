const { faker } = require('@faker-js/faker');

exports.seed = async function(knex) {
  await knex('type_key_count').del();

  const usersIdObj = await knex('users').select('id');
  const usersId = usersIdObj.map(obj => obj.id);

  const typeKeyCount = [];
  for (let i = 0; i < usersId.length; i++) {

    typeKeyCount.push({
      user_id: usersId[i],
      a_key: faker.number.int({ min: 5000, max: 50000}),
      b_key: faker.number.int({ min: 5000, max: 50000}),
      c_key: faker.number.int({ min: 5000, max: 50000}),
      d_key: faker.number.int({ min: 5000, max: 50000}),
      e_key: faker.number.int({ min: 5000, max: 50000}),
      f_key: faker.number.int({ min: 5000, max: 50000}),
      g_key: faker.number.int({ min: 5000, max: 50000}),
      h_key: faker.number.int({ min: 5000, max: 50000}),
      i_key: faker.number.int({ min: 5000, max: 50000}),
      j_key: faker.number.int({ min: 5000, max: 50000}),
      k_key: faker.number.int({ min: 5000, max: 50000}),
      l_key: faker.number.int({ min: 5000, max: 50000}),
      m_key: faker.number.int({ min: 5000, max: 50000}),
      n_key: faker.number.int({ min: 5000, max: 50000}),
      o_key: faker.number.int({ min: 5000, max: 50000}),
      p_key: faker.number.int({ min: 5000, max: 50000}),
      q_key: faker.number.int({ min: 5000, max: 50000}),
      r_key: faker.number.int({ min: 5000, max: 50000}),
      s_key: faker.number.int({ min: 5000, max: 50000}),
      t_key: faker.number.int({ min: 5000, max: 50000}),
      u_key: faker.number.int({ min: 5000, max: 50000}),
      v_key: faker.number.int({ min: 5000, max: 50000}),
      w_key: faker.number.int({ min: 5000, max: 50000}),
      x_key: faker.number.int({ min: 5000, max: 50000}),
      y_key: faker.number.int({ min: 5000, max: 50000}),
      z_key: faker.number.int({ min: 5000, max: 50000}),
      A_key: faker.number.int({ min: 5000, max: 50000}),
      B_key: faker.number.int({ min: 5000, max: 50000}),
      C_key: faker.number.int({ min: 5000, max: 50000}),
      D_key: faker.number.int({ min: 5000, max: 50000}),
      E_key: faker.number.int({ min: 5000, max: 50000}),
      F_key: faker.number.int({ min: 5000, max: 50000}),
      G_key: faker.number.int({ min: 5000, max: 50000}),
      H_key: faker.number.int({ min: 5000, max: 50000}),
      I_key: faker.number.int({ min: 5000, max: 50000}),
      J_key: faker.number.int({ min: 5000, max: 50000}),
      K_key: faker.number.int({ min: 5000, max: 50000}),
      L_key: faker.number.int({ min: 5000, max: 50000}),
      M_key: faker.number.int({ min: 5000, max: 50000}),
      N_key: faker.number.int({ min: 5000, max: 50000}),
      O_key: faker.number.int({ min: 5000, max: 50000}),
      P_key: faker.number.int({ min: 5000, max: 50000}),
      Q_key: faker.number.int({ min: 5000, max: 50000}),
      R_key: faker.number.int({ min: 5000, max: 50000}),
      S_key: faker.number.int({ min: 5000, max: 50000}),
      T_key: faker.number.int({ min: 5000, max: 50000}),
      U_key: faker.number.int({ min: 5000, max: 50000}),
      V_key: faker.number.int({ min: 5000, max: 50000}),
      W_key: faker.number.int({ min: 5000, max: 50000}),
      X_key: faker.number.int({ min: 5000, max: 50000}),
      Y_key: faker.number.int({ min: 5000, max: 50000}),
      Z_key: faker.number.int({ min: 5000, max: 50000}),
    });
  }

  await knex('type_key_count').insert(typeKeyCount);
};