module.exports = {

words:function(wordcount){
var counts = {};

var  word = wordcount.trim().split(/[\s,]+/);

for(var i = 0; i< word.length; i++) {
   
  counts[word[i]] = +counts[word[i]]  ? counts[word[i]]+1 : 1;
}return counts;
}
}