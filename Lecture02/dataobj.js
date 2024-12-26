const start = Data.now();
console.log('starting time...');
setTimeout(()=> {
    const millis = Data.now() - start;
    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);

},2000);