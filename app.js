console.log("Commit 1");
console.log("Commit 2");
console.log("Commit 3");

const meuConsole = (msg, csl) => csl.log(msg);
meuConsole("Feat 02", console);

const msg = (msg, csl) => csl.log(msg);
msg("Feat 03", console);

console.log("Commit 1");
console.log("Commit 2");
console.log("Commit 3");