const urlDecode = function (text) {
  let o = {};
  // deal w whitespace
  while (text.indexOf('%20') > -1) {
    const middle = text.indexOf('%20');
    const prefix = text.slice(0, middle)
    const suffix = text.slice(middle + 3)
    text = `${prefix} ${suffix}`
  }
  // base
  if (text.indexOf('&') <= -1) {
    const key = text.slice(0, text.indexOf('='));
    const value = text.slice(text.indexOf('=') + 1);
    o[key] = value;
    return o
    // recursion
  } else {
    const single = text.slice(0, text.indexOf('&'));
    const recurring = text.slice(text.indexOf('&') + 1);

    return Object.assign(urlDecode(single), urlDecode(recurring))
  }
};


// console.log(urlDecode("duck=rubber"));  // {duck: "rubber"}
// console.log(urlDecode("bootcamp=Lighthouse%20Labs"));  // {bootcamp: "Lighthouse Labs"}
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));  // {city: "Vancouver", weather: "lots of rain"}
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);  // "lots of rain"
