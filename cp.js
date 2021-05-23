// const sqlite3 = require('better-sqlite3')


// const source = '/home/taka/project/vocabulary-trainer-server/vocabulary.db'
// const target = '/home/taka/project/express-ts-template/vocabulary.db'

// const db = new sqlite3(source, { verbose: console.log })
// const db2 = new sqlite3(target, { verbose: console.log })


// const sql1 = 'SELECT * from script'
// const stmt1 = db.prepare(sql1)
// const res = stmt1.all()
// console.log(res.length)
// for (const item of res) {
//     const sql = 'INSERT INTO script(name, text)  VALUES($name, $text)'
//     // console.log(item)
//     const stmt = db2.prepare(sql)
//     const res = stmt.run({
//         name: item.name,
//         text: item.text
//     })
//     console.log(res)
// }

const text = 'Leonard: We both have people in our lives who… want to nip intestinal polyps in the bud.'
const re = /\s\d.../g

const qqq = '\''
const x = text.replace(re, '')
console.log(x)


