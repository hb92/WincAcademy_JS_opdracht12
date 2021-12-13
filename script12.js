//While loop

let colors = ["yellow", "blue", "red", "orange"];
let i = 0;

while ( i < colors.length) {
    console.log(colors[i]);
    i++;
}

//For loop

for (i=0; i < colors.length; i++) {
    console.log(colors[i]);
}

//Array Methods

colors.forEach(element => console.log(element));

/*
1: - while loop heeft 6 regels
    - for loop heeft 4 regels
2: 3
3: Ik begrijp dat dit voor ervaren coders eenvoudiger is, maar ik vind de for methode toch net iets overzichtelijiker omdat ik dan beter zie en begrijp wat er gebeurd

//vraag 4: Volgens mij is dit nog steeds een iteratie vermits overheen alle waardes wordt geloopt*/

var obj = {a: 1, b: 2, c: 3, d:4, e:5};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}