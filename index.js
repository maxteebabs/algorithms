function zeros (n) {
  var count = 0;
  for (var i = 5; i <= n; i += 5) {
      var num = i;
      console.log(i, num);
      while (num % 5 === 0) {
          num /= 5;
      console.log(num);

          count++;
      }
  }
  return count;
}
zeros(100);

function palindrome_chain_length(n) {
  let steps = 0,
    reverse = Number(n.toString().split('').reverse().join(''));
      
  while (reverse !== n) {
    n += reverse;
    reverse = Number(n.toString().split('').reverse().join(''));
    ++steps;
  }
  
  return steps;
}
// palindrome_chain_length(87);
