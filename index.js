var sus0=prompt("원하는 집합 이름")
var sus1=prompt("원하는 수")
var sus2=prompt("원하는 수")
var sus3=prompt("원하는 수")
var a = {
  b:[...sus1],
  c:[...sus2],
  d:[...sus3]
  
};

let set = new Set([...a.b,...a.c,...a.d]);
let set2 = [...set];
set2.sort(function(a, b) {
  return a - b;
});
let set3 = new Set(set2);
console.log(sus0,"의 집합은")
console.log(set3,"입니다");
