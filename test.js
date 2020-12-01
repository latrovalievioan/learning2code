const r = "hello.javay";
const regex = /\..+/gi;

console.log(r.match(regex).join().replace(".", ""));
