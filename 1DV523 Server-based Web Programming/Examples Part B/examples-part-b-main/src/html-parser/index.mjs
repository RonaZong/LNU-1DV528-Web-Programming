/**
 * Parse a HTML document and extract data from it.
 */
import { parse, valid } from 'node-html-parser';

const document = `
<doctype html>
<html>
<head>
  <title>Pagetitle</title>
  <meta charset="utf8">
</head>
<body>
  <h1>Title 1</h1>
  <p>This is a paragraph containing a <a href="link_A.html">link A</a>.</p>
  <ul>
    <li><a href="link_B.html">Link B</a></li>
    <li><a href="link_C.html">Link C</a></li>
  </ul>
  </body>
</html>
`

const root = parse(document)

// Is the parsed data valid or not?
console.log(valid(root) ? 'Valid structure' : 'Parse error')

//console.log(root);

// Show all links
const anchors = root.querySelectorAll('a')
console.log(`There are ${anchors.length} anchors in the document.`)
//console.log(anchors)
console.log(anchors.map( (o) => o.rawAttrs ))
console.log(anchors.map( (o) => o.textContent ))

// Get the title
const title = root.querySelector('title')
console.log('\nDetails on the document title.')
//console.log(title)
console.log('* ' + title.rawText)
console.log('* ' + title.rawTagName)
