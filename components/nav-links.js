import React from 'react'

import PropTypes from 'prop-types'

const NavLinks = (props) => {
  return (
    <>
      <div className={`nav-links-links ${props.rootClassName} `}>
        <span className="navLink">{props.link}</span>
      </div>
      <style jsx>
        {`
          .nav-links-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .nav-links-root-class-name {
            align-self: center;
          }
          @media (max-width: 767px) {
            .nav-links-links {
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
