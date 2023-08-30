function findWord (array,word) {
  for (let index=0 ; index<=array.length; index++){
    const string = array[index];
    if (string === word) {
      return index;
    }
  }
  return -1
}
console.log(findWord(['nayan','sahil','hitesh','vedant','dhairya','dharmik'],'nayan'))
console.log(findWord(['nayan','sahil','hitesh','vedant','dhairya','dharmik'],'sahil'))
console.log(findWord(['nayan','sahil','hitesh','vedant','dhairya','dharmik'],'hitesh'))
console.log(findWord(['nayan','sahil','hitesh','vedant','dhairya','dharmik'],'vedant'))
console.log(findWord(['nayan','sahil','hitesh','vedant','dhairya','dharmik'],'dhairya'))
console.log(findWord(['nayan','sahil','hitesh','vedant','dhairya','dharmik'],'dharmik'))
console.log(findWord(['nayan','sahil','hitesh','vedant','dhairya','dharmik'],'dharmik'))