const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  process.stdout.write(key)
  if (key === '\u0003') {
    console.log(`\nThanks for using me! Ciao!`)
    process.exit();
  };
  if (key === 'b') {
    process.stdout.write('\x07')
  };
  if (Number(key) >= 1 && Number(key) <= 9 ) {
    console.log(`\nsetting timer for ${key} seconds`)
    setTimeout(() => {
      process.stdout.write('\x07')
    }, Number(key) * 1000);
  };
});