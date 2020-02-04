const connection = require("../db/connection");

exports.fetchUserByUsername = username => {
  console.log("in model", username);
  return connection
    .select("*")
    .from("users")
    .where("username", "=", username);
};
