const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = flipToVerticalArray(letters).map(vs => vs.join(''));
    let isMatch = false;
    
    for (l of horizontalJoin) {
      if (l.includes(word) ) {
        isMatch = true;
        return true;
      } 
    };
    if(!isMatch){
      for ( let v of verticalJoin ) {
        if (v.includes(word)){
          return true;
        }
      }
    };
    return false
};

const flipToVerticalArray = function(array) {
  let verticalArray = [];
  let len = array.length;
  let vlen = array[0].length;
  
  for(let i = 0; i < vlen; i++){
    verticalArray[i] = []
    for(let j = 0; j < len ; j++) {
      verticalArray[i][j] = array[j][i]
    }
  };
  return verticalArray;
};

module.exports = wordSearch

