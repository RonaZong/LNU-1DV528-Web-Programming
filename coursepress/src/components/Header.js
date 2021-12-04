import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from './link'
import './styles.css'
import config from '../../config.js'

import Search from './search/index'

import LNULogoImg from './images/logo-wordmark-sv.png'

import Sidebar from './sidebar'
const help = require('./images/help.svg')
const isSearchEnabled = !!(config.header.search && config.header.search.enabled)

let searchIndices = []
if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`
  })
}

const Header = ({ location }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            courseName
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={data => {
      const logoImg = require('./images/logo.png')
      const twitter = require('./images/twitter.svg')
      const {
        site: {
          siteMetadata: { headerTitle, courseName, logo, headerLinks }
        }
      } = data

      console.log('headerLinks', headerLinks)

      const finalLogoLink = logo.link !== '' ? logo.link : '/'
      return (
        <div className={'navBarWrapper'}>
          <nav className={'navbar navbar-default navBarDefault'}>
            <div className={'navbar-header navBarHeader'}>
              <Link to={finalLogoLink} className={'navbar-brand navBarBrand'}>
                {logo.image !== '' ? (
                  <img
                    className={'navBarBrandIcon img-responsive'}
                    src={logo.image}
                    alt={'logo'}
                  />
                ) : (
                  <img
                    className={'navBarBrandIcon img-responsive'}
                    src={logoImg}
                    alt={'logo'}
                  />
                )}
                <div>
                  <img
                    src={LNULogoImg}
                    className={'lnu-logo'}
                    alt={headerTitle}
                  />
                  <div className={'courseName'}>{courseName}</div>
                </div>
              </Link>
              <button
                type='button'
                className={'navbar-toggle collapsed navBarToggle'}
                data-toggle='collapse'
                data-target='#navbar'
                aria-expanded='false'
                aria-controls='navbar'
              >
                <span className={'sr-only'}>Toggle navigation</span>
                <span className={'icon-bar'} />
                <span className={'icon-bar'} />
                <span className={'icon-bar'} />
              </button>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper hidden-xs navBarUL'}>
                <Search collapse indices={searchIndices} />
              </div>
            ) : null}
            <div
              id='navbar'
              className={'navbar-collapse collapse navBarCollapse'}
            >
              <div className={'visible-xs'}>
                <Sidebar location={location} />
                <hr />
                {isSearchEnabled ? (
                  <div className={'searchWrapper navBarUL'}>
                    <Search collapse indices={searchIndices} />
                  </div>
                ) : null}
              </div>
              <ul
                className={
                  'nav navbar-nav navBarUL navBarNav navbar-right navBarULRight'
                }
              >
                {headerLinks.map((link, key) => {
                  if (link.link !== '' && link.text !== '') {
                    return (
                      <li key={key}>
                        <a
                          className='navbar-external-link'
                          href={link.link}
                          target='_blank'
                        >
                          {link.text}
                        </a>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </nav>
        </div>
      )
    }}
  />
)

export default Header
