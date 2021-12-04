import React from 'react'

const getStyle = fontSize => ({
  fontSize: fontSize * 4 + 16,
  fontWeight: '300',
  lineHeight: 1.5,
  mt: 4,
  mb: 3
})

const Heading = ({ is, fontSize, children, ...props }) =>
  ({
    h1: (
      <h1 style={getStyle(fontSize)} {...props}>
        {children}
      </h1>
    ),
    h2: (
      <h2 style={getStyle(fontSize)} {...props}>
        {children}
      </h2>
    ),
    h3: (
      <h3 style={getStyle(fontSize)} {...props}>
        {children}
      </h3>
    ),
    h4: (
      <h4 style={getStyle(fontSize)} {...props}>
        {children}
      </h4>
    ),
    h5: (
      <h5 style={getStyle(fontSize)} {...props}>
        {children}
      </h5>
    ),
    h6: (
      <h6 style={getStyle(fontSize)} {...props}>
        {children}
      </h6>
    )
  }[is])

export default Heading
