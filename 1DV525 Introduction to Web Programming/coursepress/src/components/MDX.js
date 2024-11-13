import React from 'react'
import MDX from '@mdx-js/runtime'

import components from './mdxComponents'

export default ({ children }) => <MDX components={components}>{children}</MDX>
