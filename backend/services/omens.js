//acts as bridge between route and db

const db = require("./db")
const config = require("../config")

async function getAll() {
  const rows = await db.query("SELECT * FROM omens")
  return rows
}

async function createOmen(omen) {
  const res = await db.query(
    `INSERT INTO omens (animal,meaning,img,date,addContext)
        VALUES ('${omen.animal}','${omen.meaning}','${omen.img}','${omen.date}','${omen.addContext}')`
  )

  let msg = "Error in creating omen"

  if (!res.affectedRows) {
    return { msg }
  }

  const newOmen = await db.query(
    `SELECT * FROM omens where animal='${omen.animal}'`
  )
  return newOmen
}

async function updateOmen(animal, omen) {
  const res = await db.query(
    `UPDATE omens SET date="${omen.date}" WHERE animal=${omen.animal} `
  )

  let msg = `Error when updating animal ${animal}`

  if (res.affectedRows) {
    msg = `Omen successfully updated for animal ${animal}`
  }

  return { msg }
}

module.exports = { getAll, createOmen, updateOmen }
