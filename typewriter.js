let time = 0;
let interval = 50;
const sentence = "hello there from lighthouse labs";
for (let letter of sentence) {
 setTimeout(() => {
   process.stdout.write(letter);
 }, time += interval);
}
setTimeout(() => {
 process.stdout.write("\n");
}, time); // Russell explained setTimeouts to us and suggested use a global timeout

