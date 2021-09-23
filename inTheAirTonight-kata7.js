
const checkAir = function (samples, threshold) {
  let dirty = 0;

  // tally dirty
  samples.forEach(sample => {
    if (sample === 'dirty') {
      dirty++;
    }
  });
  // test percentage against threshold
  return (dirty / samples.length) < threshold ? 'Clean' : 'Polluted'
};





console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
)); // Polluted

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
)); // Polluted

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
)) // Clean


// 26 0f 45 minutes