import React, { useEffect, useState } from 'react'
import OpenedSvg from '../images/opened'
import ClosedSvg from '../images/closed'
import config from '../../../config'
import Link from '../link'

const classNameFromDepth = depth =>
  `${depth === 1 ? ' subItem' : depth > 1 ? ' subItem subSubItem' : ''}`

const isMobileSize = window => window && window.innerWidth < 767

const TreeNode = ({
  className = '',
  setCollapsed,
  collapsed,
  url,
  title,
  items,
  location,
  ...rest
}) => {
  const [isOnDesktop, setIsOnDesktop] = useState(true)
  const hasChildren = items.length !== 0
  const collapse = () => {
    if (!config.sidebar.frontLine && title && hasChildren) {
      setCollapsed(url)
    }
  }

  // useEffect to have access to "window"
  useEffect(() => {
    // Collapse sidebar if needed
    if (
      !isMobileSize(window) &&
      config.sidebar.startCollapsed &&
      collapsed[url] === undefined &&
      hasChildren
    ) {
      setIsOnDesktop(false)
      collapse()
    }
  }, [])
  const depth = (url && url.split('/').length - 2) || 0
  const isCollapsed = collapsed[url]
  const active =
    location &&
    (location.pathname === url ||
      location.pathname === config.gatsby.pathPrefix + url)

  const calculatedClassName = `${className} item ${
    active ? 'active' : ''
  }${classNameFromDepth(depth)}`

  return (
    <li className={calculatedClassName}>
      {isOnDesktop && !config.sidebar.frontLine && title && hasChildren ? (
        <button onClick={collapse} className='collapser'>
          {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
        </button>
      ) : null}

      {title && (
        <Link to={url} onClick={() => isCollapsed && collapse()}>
          {title}
        </Link>
      )}

      {(!isCollapsed && hasChildren) || title === undefined ? (
        <ul>
          {items
            .sort((a, b) => (a.label >= b.label ? 1 : -1))
            .map((item, i) => (
              <TreeNode
                key={i + item.url}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
                {...item}
                location={location}
              />
            ))}
        </ul>
      ) : null}
    </li>
  )
}
export default TreeNode
