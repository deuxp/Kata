
const checkAir = function (samples, threshold) {
  let dirty = 0;

  // tally dirty
  samples.forEach(sample => {
    if (sample === 'dirty') {
      dirty++;
    }
  });

  // test percentage against threshold
  if ((dirty / samples.length) < threshold) {
    return 'Clean'
  } else {
    return 'Polluted'
  }
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