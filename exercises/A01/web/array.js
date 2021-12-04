var couse = ['page', 'image', 'form', 'table', 'column',
'row', 'responsive', 'typography', 'java', 'python',
'javascript', 'quantum', 'computing', 'read', 'write',
'print', 'web', 'example', 'image', 'site'];
course.map(function(x) {return x.toUpperCase()})
course.pop();
course.shift()
course.reverse()

for (var i = 0; i < course.length; i++) {
  console.log(course[i]);
}
