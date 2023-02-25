const user_models = require("../models/userModels");

//GET USER
const get_allUser = async (req, res) => {
  try {
    const data = await user_models.get_allUser();
    res.status(200).json({
      message: "Get data success",
      data,
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
  try {
    const success = await user_models.post_user(req.body);
    res.json({
      message: "POST user succes",
      isSucces: success.affectedRows,
      insertId: success.insertId,
    });
  } catch (error) {
    res.status(400).json({
      message: "error",
      error_msg: error.message,
    });
  }
};

//UPDATE USER
const update_user = async (req, res) => {
  const { id_user } = req.params;
  const { body } = req;
  try {
    const success = await user_models.update_user(body, id_user);
    res.json({
      message: "update user seccessfuly",
      isSucces: success.affectedRows,
      dataId: id_user,
      data: body,
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
    const success = await user_models.delete_user(id_user);
    res.json({
      message: "DELETE user successfuly",
      isSucces: success.affectedRows,
      dataId: id_user,
    });
  } catch (error) {
    res.status(500).json({
      message: "error",
      error_msg: error,
    });
  }
};

module.exports = { get_allUser, post_user, update_user, delete_user };
