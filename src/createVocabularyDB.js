const Database = require('better-sqlite3')
const db = new Database('vocabulary.db', { verbose: console.log })

const createScript = (db) => {
    const sql = `CREATE TABLE script (
        id INTEGER PRIMARY KEY AUTOINCREMENT,  
        name TEXT NOT NULL,
        text TEXT NOT NULL UNIQUE
    );`
    const stmt = db.prepare(sql)
    const res = stmt.run()
    console.log('script table', res)
  }

const createPage = ()=> {
  const sql = `CREATE TABLE page (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    name TEXT NOT NULL UNIQUE
  );`
  const stmt = db.prepare(sql)
  const res = stmt.run()
  console.log('page table', res)
}

const createVocabulary = (db) => {
  const sql = `CREATE TABLE vocabulary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    vocabulary TEXT NOT NULL,
    checked INTEGER DEFAULT 0,
    pageId INTEGER NOT NULL,
    FOREIGN KEY("pageId") REFERENCES "page"("id")
  );`
  const stmt = db.prepare(sql)
  const res = stmt.run()
  console.log('vocabulary table', res)
}

const createText = (db) => {
  const sql = `CREATE TABLE text (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    vid INTEGER NOT NULL,
    text TEXT NOT NULL UNIQUE,
    FOREIGN KEY("vid") REFERENCES "vocabulary"("id")
  );`
  const stmt = db.prepare(sql)
  const res = stmt.run()
  console.log('text table', res)
}

const createTranslate = (db) => {
  const sql = `CREATE TABLE translate (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    vocabulary TEXT NOT NULL UNIQUE,
    text TEXT NOT NULL
  );`
  const stmt = db.prepare(sql)
  const res = stmt.run()
  console.log('vocabulary table', res)
}

// createTab(db)
// createScript(db)
// createPage(db)
// createVocabulary(db)
// createText(db)
createTranslate(db)
