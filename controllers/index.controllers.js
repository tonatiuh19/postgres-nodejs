const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "alejandrogomez",
  password: "",
  database: "firstapi",
  port: "5432",
});

const getUsers = async (req, resp) => {
  try {
    const response = await pool.query("SELECT * FROM users");
    resp.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const getUsersById = async (req, resp) => {
  try {
    const response = await pool.query("SELECT * FROM users WHERE id=$1", [
      req.params.id,
    ]);
    resp.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    resp.status(400).json({
      error: error,
    });
  }
};

const createUser = async (req, resp) => {
  const { name, email } = req.body;
  try {
    const response = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) ",
      [name, email]
    );
    console.log(response);
    resp.json({
      message: "User has been created",
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUserById = async (req, resp) => {
  const { name, email } = req.body;
  try {
    const response = await pool.query(
      "UPDATE users SET name=$1, email=$2 WHERE id=$3",
      [name, email, req.params.id]
    );
    resp.status(200).json({
      message: `User ${req.params.id} has been updated`,
    });
  } catch (error) {
    console.log(error);
    resp.status(400).json({
      error: error,
    });
  }
};

const deleteUserById = async (req, resp) => {
  try {
    const response = await pool.query("DELETE FROM users WHERE id=$1", [
      req.params.id,
    ]);
    resp.status(200).json({
      message: `User ${req.params.id} has beeen deleted`,
    });
  } catch (error) {
    console.log(error);
    resp.status(400).json({
      error: error,
    });
  }
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  deleteUserById,
  updateUserById,
};
