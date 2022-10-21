var sus=prompt("원하는 수\n ex\) 1,2,3....")
var sus2=prompt("원하는 수\n ex\) 1,2,3....")
var sus3=prompt("원하는 수\n ex\) 1,2,3....")
var a = {
  b:[...sus],
  c:[...sus2],
  d:[...sus3]
  
};

let set = new Set([...a.b,...a.c,...a.d]);
let set2 = [...set];
set2.sort(function(a, b) {
  return a - b;
});
console.log([...set2]);
