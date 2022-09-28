function findFrac(input: number) {

    let whole = Math.floor(input);
    let decimal = input - whole;
    let decimalPlaces = numDecimals(decimal);
    let denominator = 10**decimalPlaces;
    let numerator = decimal*denominator;
    let comDenom = gcd(denominator, numerator);
    let newNum = numerator / comDenom;
    let newDenom = denominator / comDenom;
    if (0.32 < decimal && 0.34 > decimal) {
      newNum = 1;
      newDenom = 3;
    };
    if(0.65 < decimal && 0.67 > decimal) {
      newNum = 2;
      newDenom = 3;
    }

  function numDecimals(decimal: number) {
    let n = 0;
    while(decimal > 0) {
      decimal *= 10;
      decimal -= Math.floor(decimal);
      n += 1;
    }
    return n;
  }

  function gcd(denominator: number, numerator: number): number {
    if(denominator === 0) {
      return numerator;
    } else if(numerator === 0) {
      return denominator;
    } else {
      let remainder = (denominator % numerator);
      return gcd(numerator, remainder);
    }
  }

  function present(whole: number, newNum: number, newDenom: number) {
    let quantity = '0';
    if( whole !== 0 && newNum !== 0 && newDenom !== 0) {
      quantity = (`${whole} ${newNum}/${newDenom}`);
    } else if ( whole !== 0 && newNum !== 0 && newDenom === 0 ) {
      quantity = (`${whole}`);
    } else if ( whole !== 0 && newNum === 0 && newDenom !== 0 ) {
      quantity = (`${whole}`);
    } else if (whole === 0 && newNum !== 0 && newDenom !== 0 ) {
      quantity = (`${newNum}/${newDenom}`);
    } else {
      quantity = ('weird case');
    }
    return (quantity);
  }

  return ( present(whole, newNum, newDenom ) );
}

export default findFrac;
