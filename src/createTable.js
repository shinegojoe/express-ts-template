const dotenv = require('dotenv')
const sqlite3 = require('better-sqlite3')
const cfgPath = `${process.cwd()}/config/development.env`

const env = dotenv.config({
  path: cfgPath
}).parsed


const dbInit = () => {
  const db = new sqlite3(env.DB_PATH, { verbose: console.log })
  return db
}

const createTestTable = (db) => {
  const sql = `CREATE TABLE testTable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    name TEXT NOT NULL
  );`
  const stmt = db.prepare(sql)
  const res = stmt.run()
  console.log('project table', res)
}

const main = () => {
  const db = dbInit()
  createTestTable(db)
  db.close()
}

main()

