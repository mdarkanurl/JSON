const data = require("./experiment.json");

// for(x in data) {
//     console.log(x);
//     console.log(data[x]);
// }

// const data1 = {
//     name: "Ali",
//     "age": 17
// }

// console.log(JSON.stringify(data1))
console.log(JSON.parse(`{
    "friends": [
        {
            "name": "Jovan Ahemd",
            "age": 17
        },
        {
            "name": "Mohammad Ali",
            "age": 25
        }
    ]
}`));

