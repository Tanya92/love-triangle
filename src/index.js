/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let visited = {};
  for (let i = 0; i < preferences.length; i++){
    if (visited[i]) {
      continue;
    }
    let a = preferences[i];
    let b = preferences[a-1];
    let c = preferences[b-1];
    if (c == i + 1 && a != b && b != c) {
      count++;
      visited[i] = true;
      visited[a - 1] = true;
      visited[b - 1]  = true; 
    }
  }
  return count;
};
