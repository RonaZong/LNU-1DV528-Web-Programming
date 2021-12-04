import React, { useState, useEffect } from 'react'
import MDX from '../MDX'

const isConverted = children => typeof children !== 'string'

const isPlatform = name =>
  typeof window !== 'undefined' &&
  window.navigator.appVersion.indexOf(name) !== -1

const isOS = {
  win: isPlatform('Win'),
  mac: isPlatform('Mac'),
  linux: isPlatform('X11') || isPlatform('Linux')
}

const getActiveIndex = tabs => {
  const idx = tabs.findIndex(t => isOS[t.os])
  return idx === -1 ? 0 : idx
}

const createTabs = children =>
  children
    .filter(({ props }) => props.mdxType === 'Tab')
    .map(({ props }) => ({
      title: props.title,
      os: props.os,
      children: props.children
    }))

const TabHeader = ({ activeTab, tabs, onClick }) => (
  <div>
    {tabs.map((tab, i) => (
      <button
        className={'tab-button'}
        key={i}
        disabled={activeTab === i}
        onClick={() => onClick(i)}
      >
        {tab.title}
      </button>
    ))}
  </div>
)

const Tab = ({ children }) => (
  <div className={isConverted(children) ? 'tab-box-code' : 'tab-box'}>
    {isConverted(children) ? children : <MDX>{children}</MDX>}
  </div>
)

const Tabs = ({ children }) => {
  const [activeIndex, setActive] = useState(0)
  const tabs = createTabs(children)
  const activeTab = tabs[activeIndex]

  useEffect(() => {
    setActive(getActiveIndex(tabs))
  }, [])

  return (
    <div>
      <TabHeader activeTab={activeIndex} tabs={tabs} onClick={setActive} />
      <Tab>{activeTab.children}</Tab>
    </div>
  )
}

export default Tabs
