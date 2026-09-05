const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "Akmysql@1"
});

let getRandomUser = () => {

  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// inserting new data 
let q = "INSERT INTO user(id, username, email, password) VALUES ?";
let data = [];
for(let i = 1;i <= 100; i++) {
  data.push(getRandomUser());
}

try {

  connection.query(q, [data], (err,result) => {
    if(err) throw err;
    console.log(result);

  });

}

catch (err) {
    console.log(err);
}

//inserting new data 
// let q = "INSERT INTO user(id, username, email, password) VALUES ?";
// let users = [ 
//   ["123b","123_newuserb","abc@gmail.comb","abcb"],
//   ["123c","123_newuserc","abc@gmail.comc","abcc"],
// ];

// try {

//   connection.query(q, [users], (err,result) => {
//     if(err) throw err;
//     console.log(result);

//   });

// }

// catch (err) {
//     console.log(err);
// }

connection.end();