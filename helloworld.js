const fs = require('fs');
const bytes = fs.readFileSync(__dirname + '/helloworld.wasm')

let hello_world = null;
let start_string_index = 100;
let memory = new WebAssembly.Memory({ initial: 1 });
