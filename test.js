
function add(a, b) {
    return a + b;
}

const expected = 5;
const result = add(2, 3);

if (result === expected) {
    console.log("PASS: 2 + 3 is indeed 5!");
    process.exit(0); // Success!
} else {
    console.error(`FAIL: Expected ${expected} but got ${result}`);
    process.exit(1); // Failure!
}
