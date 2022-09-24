function findFrac(x) {
  let w = Math.floor(x);
  let f = x - w;
  let n = numDecimals(f);
  let d = 10**n;
  let a = f*d;
  let g = gcd(a, d);
  let ra = a / g;
  let rd = d / g;
  console.log(w, ra, rd);
}

function numDecimals(f) {
  let n = 0;
  while(f > 0) {
    f *= 10;
    f -= Math.floor(f);
    n += 1;
  }
  return n;
}

//a > b
function gcd(a, b) {
  if(a === 0) {
    return b;
  } else if(b === 0) {
    return a;
  } else {
    let r = (a % b);
    return gcd(b, r);
  }
}

// console.log(gcd(270, 192));
// console.log(numDecimals(0.1));
// console.log(numDecimals(0.3));
// console.log(numDecimals(1.25));
// console.log(numDecimals(0.0625));
console.log(findFrac(5.25));
