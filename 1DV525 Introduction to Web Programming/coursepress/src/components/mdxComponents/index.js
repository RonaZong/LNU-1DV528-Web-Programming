import React from 'react'
import Code from './code'
import CodeBlock from './codeBlock'
import Pre from './pre'
import AnchorTag from './anchor'
import Hint from './Hint'
import Tabs from './Tabs'

const titleToId = ({ children }) =>
  children
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[åä]/g, 'a')
    .replace(/ö/g, 'o')

/* eslint-disable react/display-name */
export default {
  h1: props => <h1 id={titleToId(props)} {...props} />,
  h2: props => <h2 id={titleToId(props)} {...props} />,
  h3: props => <h3 id={titleToId(props)} {...props} />,
  h4: props => <h4 id={titleToId(props)} {...props} />,
  h5: props => <h5 id={titleToId(props)} {...props} />,
  h6: props => <h6 id={titleToId(props)} {...props} />,
  p: props => <p {...props} />,
  pre: Pre,
  code: CodeBlock,
  inlineCode: props => <code className={'inline-code'}>{props.children}</code>,
  a: props => <AnchorTag {...props} />,
  hint: Hint,
  Hint,
  tabs: Tabs,
  Tabs
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
}
