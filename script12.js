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