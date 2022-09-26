function findFrac(x: number) {

    let w = Math.floor(x);
    let f = x - w;
    let n = numDecimals(f);
    let d = 10**n;
    let a = f*d;
    let g = gcd(a, d);
    let ra = a / g;
    let rd = d / g;
    if ( f === 0.33 ) {
      ra = 1;
      rd = 3;
    };
    if ( f === 0.66 ) {
      ra = 2;
      rd = 3;
    };

  function numDecimals(f: number) {
    let n = 0;
    while(f > 0) {
      f *= 10;
      f -= Math.floor(f);
      n += 1;
    }
    return n;
  }

  //a > b
  function gcd(a: number, b: number): number {
    if(a === 0) {
      return b;
    } else if(b === 0) {
      return a;
    } else {
      let r = (a % b);
      return gcd(b, r);
    }
  }

  function present(w: number, ra: number, rd: number) {
    let z = '0';
    if( w !== 0 && ra !== 0 && rd !== 0) {
      z = (`${w} ${ra}/${rd}`);
    } else if ( w !== 0 && ra !== 0 && rd === 0 ) {
      z = (`${w}`);
    } else if ( w !== 0 && ra === 0 && rd !== 0 ) {
      z = (`${w}`);
    } else if (w === 0 && ra !== 0 && rd !== 0 ) {
      z = (`${ra}/${rd}`);
    } else {
      z = ('weird case');
    }
    return (z);
  }

  return ( present(w, ra, rd ) );
}

export default findFrac;
