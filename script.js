const data = 
["testing",// string
 false, // boolean
  30, // nmmber
{model: "3", color: "red"}, // object
[1, 2, 3, 4, 5], // array
];//lenght = 5, but last index = 4

const multiplier = data[4];

for(let i; i < multiplier.length; i++) {
    console.log("i:", i);
}