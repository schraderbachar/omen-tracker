//connect to db
const mysql = require("mysql2/promise")
const config = require("../config")
const { connect } = require("http2")

async function query(sql, params) {
  const conn = await mysql.createConnection(config.db)
  const [res] = await conn.execute(sql, params)

  return res
}

module.exports = {
  query,
}
