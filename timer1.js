const arguments = process.argv; 
const timer = arguments.slice(2);

console.log(timer);

for (let time of timer) {
  if (Number(time) >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, Number(time) * 1000);
  };
  
  if (!time) {
    return 
  };
};






