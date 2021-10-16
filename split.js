String.prototype.pSplit = function(split = ''){
    let poly = [];
    let res = ''
    for (let i = 0; i < str.length; i++) {
      let li = str[i]
      if (li === split || (split === '' && res)) {
        poly.push(res)
        res = ''
      }
      if (li !== split) {
        res += li
      }
    }
    if (res) {
      poly.push(res)
      temp = ''
    }
    return poly
  }
  
  let str = 'Genius By Birth, Evil By Choice.';
  console.log(str.pSplit());