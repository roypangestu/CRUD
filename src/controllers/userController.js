const user_models = require("../models/userModels");

//GET USER
const get_allUser = async (req, res) => {
  try {
    await user_models.get_allUser().then((rows) => {
      res.json({
        message: "get users success",
        data: rows,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error_msg: error,
    });
  }
};

//POST USER
const post_user = async (req, res) => {
  const { body } = req;
  try {
    await user_models.post_user(body).then((rows) => {
      res.json({
        message: "POST user succes",
        isSucces: rows.affectedRows,
        insertID: rows.insertId,
        data: body,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      errorMsg: error,
    });
  }
};

//UPDATE USER
const update_user = async (req, res) => {
  const { id_user } = req.params;
  const { body } = req;
  try {
    await user_models.update_user(body, id_user).then((rows) => {
      res.json({
        message: "update user seccessfuly",
        isSucces: rows.affectedRows,
        dataId: id_user,
        data: body,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error_msg: error,
    });
  }
};

//DELETE USER
const delete_user = async (req, res) => {
  const { id_user } = req.params;
  try {
    await user_models.delete_user(id_user).then((rows) => {
      res.json({
        message: "DELETE user successfuly",
        isSucces: rows.affectedRows,
        dataId: id_user,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error_msg: error,
    });
  }
};

module.exports = { get_allUser, post_user, update_user, delete_user };
