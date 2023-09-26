const os = require('os');

// .arch(): Allows me to see the architecture of my operating system.
console.log(os.arch());

// .platform(): Allows me to see which operating system I am using.
console.log(os.platform());

// .cpus(): Allows me to see the information of my CPU,
// if I want to see the number of cores I add .length
console.log(os.cpus().length);

// .constants: Allows me to see all the errors and signals of the system.
console.log(os.constants);

// .freemem(): Allows me to see my memory in bytes.
console.log(os.freemem());
// Example of functions with .freemem()
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }
console.log(os.freemem());
console.log(kb(os.freemem()) + 'kb');
console.log(mb(os.freemem()) + 'mb');
console.log(gb(os.freemem()) + 'gb');

// .totalmem(): Allows me to see how much available memory I have.
console.log(gb(os.totalmem()) + 'gb');

// .homedir(): Allows me to see the home directory of the user.
console.log(os.homedir());

// .tmpdir(): Allows me to see the path of the temporary directory.
console.log(os.tmpdir());

// .hostname(): Allows me to see the hostname of the machine and use it in services.
console.log(os.hostname());

// .networkInterfaces(): Allows me to access the data of all the network interfaces of my machine.
console.log(os.networkInterfaces());

// In summary, the operating system module allows access to things that are usually very low level,
// but that are really tremendously useful.