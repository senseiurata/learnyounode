var i,
  len = process.argv.length,
  sum = 0;
for(i = 2; i < len; i++) {
  sum += +process.argv[i];
}
console.log(sum);