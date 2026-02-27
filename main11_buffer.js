const buffer = new ArrayBuffer(16);
const view = new Uint8Array(buffer);
view[0] = 72; // ASCII for 'H'
view[1] = 105; // ASCII for 'i'

const decoder = new TextDecoder();
console.log("Decoded text from binary:", decoder.decode(view));