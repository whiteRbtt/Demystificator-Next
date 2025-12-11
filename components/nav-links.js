import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const NavLinks = (props) => {
  return (
    <>
      <div className={`nav-links-thq-links-elm ${props.rootClassName} `}>
        <span className="navLink">{props.link}</span>
      </div>
      <style jsx>
        {`
          .nav-links-thq-links-elm {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .nav-linksroot-class-name {
            align-self: center;
          }
          @media (max-width: 767px) {
            .nav-links-thq-links-elm {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

NavLinks.defaultProps = {
  rootClassName: '',
  link: 'à propos',
}

NavLinks.propTypes = {
  rootClassName: PropTypes.string,
  link: PropTypes.string,
}

export default NavLinks
