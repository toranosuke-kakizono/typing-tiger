const { faker } = require('@faker-js/faker');

exports.seed = async function(knex) {
  await knex('type_key_count').del();

  const usersIdObj = await knex('user').select('id');
  const usersId = usersIdObj.map(obj => obj.id);

  const typeKeyCount = [];
  for (let i = 0; i < usersId.length; i++) {

    typeKeyCount.push({
      user_id: usersId[i],
      a_key: faker.number.int({ min: 500, max: 3000}),
      b_key: faker.number.int({ min: 500, max: 3000}),
      c_key: faker.number.int({ min: 500, max: 3000}),
      d_key: faker.number.int({ min: 500, max: 3000}),
      e_key: faker.number.int({ min: 500, max: 3000}),
      f_key: faker.number.int({ min: 500, max: 3000}),
      g_key: faker.number.int({ min: 500, max: 3000}),
      h_key: faker.number.int({ min: 500, max: 3000}),
      i_key: faker.number.int({ min: 500, max: 3000}),
      j_key: faker.number.int({ min: 500, max: 3000}),
      k_key: faker.number.int({ min: 500, max: 3000}),
      l_key: faker.number.int({ min: 500, max: 3000}),
      m_key: faker.number.int({ min: 500, max: 3000}),
      n_key: faker.number.int({ min: 500, max: 3000}),
      o_key: faker.number.int({ min: 500, max: 3000}),
      p_key: faker.number.int({ min: 500, max: 3000}),
      q_key: faker.number.int({ min: 500, max: 3000}),
      r_key: faker.number.int({ min: 500, max: 3000}),
      s_key: faker.number.int({ min: 500, max: 3000}),
      t_key: faker.number.int({ min: 500, max: 3000}),
      u_key: faker.number.int({ min: 500, max: 3000}),
      v_key: faker.number.int({ min: 500, max: 3000}),
      w_key: faker.number.int({ min: 500, max: 3000}),
      x_key: faker.number.int({ min: 500, max: 3000}),
      y_key: faker.number.int({ min: 500, max: 3000}),
      z_key: faker.number.int({ min: 500, max: 3000}),
      A_key: faker.number.int({ min: 500, max: 3000}),
      B_key: faker.number.int({ min: 500, max: 3000}),
      C_key: faker.number.int({ min: 500, max: 3000}),
      D_key: faker.number.int({ min: 500, max: 3000}),
      E_key: faker.number.int({ min: 500, max: 3000}),
      F_key: faker.number.int({ min: 500, max: 3000}),
      G_key: faker.number.int({ min: 500, max: 3000}),
      H_key: faker.number.int({ min: 500, max: 3000}),
      I_key: faker.number.int({ min: 500, max: 3000}),
      J_key: faker.number.int({ min: 500, max: 3000}),
      K_key: faker.number.int({ min: 500, max: 3000}),
      L_key: faker.number.int({ min: 500, max: 3000}),
      M_key: faker.number.int({ min: 500, max: 3000}),
      N_key: faker.number.int({ min: 500, max: 3000}),
      O_key: faker.number.int({ min: 500, max: 3000}),
      P_key: faker.number.int({ min: 500, max: 3000}),
      Q_key: faker.number.int({ min: 500, max: 3000}),
      R_key: faker.number.int({ min: 500, max: 3000}),
      S_key: faker.number.int({ min: 500, max: 3000}),
      T_key: faker.number.int({ min: 500, max: 3000}),
      U_key: faker.number.int({ min: 500, max: 3000}),
      V_key: faker.number.int({ min: 500, max: 3000}),
      W_key: faker.number.int({ min: 500, max: 3000}),
      X_key: faker.number.int({ min: 500, max: 3000}),
      Y_key: faker.number.int({ min: 500, max: 3000}),
      Z_key: faker.number.int({ min: 500, max: 3000}),
    });
  }

  await knex('type_key_count').insert(typeKeyCount);
};