((x, bits) => { 
 x = Math.round(Math.abs(parseInt(x)));
 bits = parseInt(bits);

 let output = '';
 let highestValue = Math.pow(2, bits);

 if (highestValue < x) {
    console.log(`${bits} bits can not compute ${x}`);
    while (highestValue < x) {
        bits++;
        highestValue = Math.pow(2, bits);
    }
    console.log(`Bit amount changed to ${bits}`); 
 }

 while(x > 0) {
  output += x % 2 === 0 ? '0' : '1';
  x = Math.floor(x / 2); 
 }

 if (output.length < bits) {
     let zeros = bits - output.length;
     console.log('zeros', zeros);
     while (zeros > 0) {
         output += '0';
         zeros -= 1;
     }
 }
 console.log(output.split('').reverse().join(''));
})(process.env.X, process.env.BITS);
