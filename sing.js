var beer = prompt();

for (i = beer; i > 0; i -= 1) {

    if (i > 1) {
        console.log(i + " bottles of beer on the wall,");
        console.log(i + " bottles of beer!")
    } else {
        console.log(i + " bottle of beer on the wall");
        console.log(i + " bottle of beer!");
    }
    console.log("take one down, pass it around")
}

console.log("No More Beer :(")