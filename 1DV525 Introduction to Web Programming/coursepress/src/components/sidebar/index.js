import React from 'react'
import Tree from './tree'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'
import { ExternalLink } from 'react-feather'
import '../styles.css'
import config from '../../../config'

// eslint-disable-next-line no-unused-vars
const ListItem = ({ className, ...props }) => (
  <li className={className}>
    <a href={props.to} {...props} />
  </li>
)

const Sidebar = props => (
  <div className={'sideBarWrapper'}>
    <aside className={'sideBar'} {...props}>
      {props.children}
    </aside>
  </div>
)

const Divider = styled(props => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => (
      <Sidebar>
        <ul className={'sideBarUL'}>
          <Tree edges={allMdx.edges} location={location} />
          {config.sidebar.links.length > 0 && <hr />}
          {config.sidebar.links
            .filter(link => link.link !== '' && link.text !== '')
            .map((link, key) => (
              <ListItem key={key} to={link.link}>
                {link.text}
                <ExternalLink size={14} />
              </ListItem>
            ))}
        </ul>
      </Sidebar>
    )}
  />
)

export default SidebarLayout
