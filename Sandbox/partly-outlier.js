function findOutlier(integers) {
  let even = integers.filter(x => x % 2 === 0);
  let odd = integers.filter(x => x % 2 !== 0);
  return even.length > 1 ? odd[0] : even[0];
}
console.log(findOutlier([0, 1, 2]));

/*
if filter even.length === 1
then filter even = outlier
else return filter !even = outlier
*/