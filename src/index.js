
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let a = [];
  if (!matrix) return a;
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        a.push (matrix[i].reverse())
      }
      else {
        a.push (matrix[i]);
      }      
    }
    return a.flat();
}
