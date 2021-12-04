import React, { useState } from 'react'
import config from '../../../config'
import TreeNode from './treeNode'

const defaultItemOr = (label, item) => ({
  label,
  items: [],
  ...item
})

const calculateTreeData = edges => {
  const originalData = config.sidebar.ignoreIndex
    ? edges.filter(({ node }) => node.fields.slug !== '/')
    : edges
  return originalData
    .map(({ node: { fields } }) => ({ slug: fields.slug, title: fields.title }))
    .reduce(
      (accu, { slug, title }) => {
        const parts = slug.split('/')
        let { items: prevItems } = accu
        parts.slice(1, -1).forEach(part => {
          prevItems = defaultItemOr(
            part,
            prevItems.find(({ label }) => label == part)
          ).items
        })
        const existingItem = prevItems.find(
          ({ label }) => label === parts[parts.length - 1]
        )
        if (!existingItem) {
          prevItems.push({
            label: parts[parts.length - 1],
            url: slug,
            items: [],
            title
          })
        }
        return accu
      },
      { items: [] }
    )
}

const Tree = ({ location, edges }) => {
  const [treeData] = useState(() => calculateTreeData(edges))
  const [collapsed, setCollapsed] = useState({})
  const toggle = url => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url]
    })
  }
  return (
    <TreeNode
      className={`${
        config.sidebar.frontLine ? 'showFrontLine' : 'hideFrontLine'
      } firstLevel`}
      setCollapsed={toggle}
      collapsed={collapsed}
      {...treeData}
      location={location}
    />
  )
}

export default Tree
