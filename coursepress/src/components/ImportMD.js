import React, { useState, useEffect } from 'react'
import Prism from 'prismjs'
import 'prism-react-renderer/themes/vsDark'
import { always, compose, ifElse, identity, remove } from 'ramda'
import MDX from './MDX'

/** removeHeading :: String -> String */
const removeHeading = md => {
  const lines = md.split('\n')
  const indexOfHeadline = lines.findIndex(line => line.match('#'))
  return remove(indexOfHeadline, 1, lines).join('\n')
}

/** removeMetadata :: String -> String */
const removeMetadata = md => md.replace(/ *\---[^)]*\--- */, '').trim()

/** cleanMarkdown :: Boolean -> String -> String */
const cleanMarkdown = removeTitle =>
  compose(removeMetadata, ifElse(always(removeTitle), removeHeading, identity))

export default ({ url, removeTitle = false }) => {
  const [markdown, setMarkdown] = useState(null)

  // useEffect to get access to fetch
  useEffect(() => {
    fetch(url)
      .then(r => (r.ok ? r.text() : Promise.reject()))
      .then(cleanMarkdown(removeTitle))
      .then(setMarkdown)
      .then(Prism.highlightAll)
      .catch(() => setMarkdown('# Tyvärr misslyckades sidan att laddas in.'))
  }, [])

  return <MDX>{markdown}</MDX>
}
