
let buffer = new ArrayBuffer(16);

console.log(buffer.byteLength);   // 16

// At this point, we have a chunk of memory whose bytes are all pre-initialized to 0.

// Let's create a view that treats the data in the buffer as an array of 32-bit signed integers:
let int32View = new Int32Array(buffer);
console.log(int32View);   // Int32Array(4) [ 0, 0, 0, 0 ]
console.log(int32View.length);   // 4
console.log(int32View.BYTES_PER_ELEMENT);   // 4
console.log(int32View.buffer);  // ArrayBuffer {
                                //   [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>,
                                //   byteLength: 16
                                // }

// Now we can access the fields in the array just like a normal array:
for (let i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

int32View.forEach((item, i) => {
  console.log(i, item);
});
// 0 0
// 1 2
// 2 4
// 3 6
