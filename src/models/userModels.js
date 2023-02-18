const db_pool = require("../config/database");

//GET USER
const get_allUser = async () => {
  const sql = "SELECT * FROM userdb";
  const [rows] = await db_pool.execute(sql);
  return rows;
};

//POST USER
const post_user = async (body) => {
  const sql = `INSERT INTO userdb (username, password) VALUES ('${body.username}', '${body.password}')`;
  const [rows] = await db_pool.execute(sql);
  return rows;
};

//UPDATE USER
const update_user = async (body, id_user) => {
  const sql = `UPDATE userdb SET username = '${body.username}', password = '${body.password}' WHERE id = ${id_user}`;
  const [rows] = await db_pool.execute(sql);
  return rows;
};

//DELETE USER
const delete_user = async (id_user) => {
  const sql = `DELETE FROM userdb WHERE id= ${id_user}`;
  const [rows] = await db_pool.execute(sql);
  return rows;
};

module.exports = { get_allUser, post_user, update_user, delete_user };
