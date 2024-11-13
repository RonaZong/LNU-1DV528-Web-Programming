var value = 42;
var string = '42';
if (value == '42') {
  console.log("Yes, it is 42");
}

if (string === '42') {
  console.log("Yes, it is 42");
}

var res = (value === 42 ? 42 : '42');
console.log(res);

var i = 0;
while (i < 42) {
  i++;
}
console.log(i);

for (i = 37; i <= 42; i++) {
  console.log(i);
}

function alpha(x, y) {
  return x + y;
}
console.log(alpha(40, 2));
