import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconPicture = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.017 7.343h-2.329l-1.145-1.718a.646.646 0 0 0-.537-.288H9.994a.646.646 0 0 0-.537.288L8.312 7.343H5.983C4.89 7.343 4 8.233 4 9.326v7.354c0 1.093.89 1.983 1.983 1.983h12.034c1.093 0 1.983-.89 1.983-1.983V9.326c0-1.094-.89-1.983-1.983-1.983zm.69 9.337c0 .38-.31.69-.69.69H5.983c-.38 0-.69-.31-.69-.69V9.326c0-.38.31-.69.69-.69h2.674a.646.646 0 0 0 .538-.289L10.34 6.63h3.32l1.145 1.717c.12.18.321.288.538.288h2.674c.38 0 .69.31.69.69v7.355z"
      />
      <path
        fill="currentColor"
        d="M12 9.348a3.324 3.324 0 0 0-3.32 3.32 3.323 3.323 0 0 0 3.32 3.32c1.83 0 3.32-1.489 3.32-3.32 0-1.83-1.49-3.32-3.32-3.32zm0 5.348a2.03 2.03 0 0 1-2.028-2.027A2.03 2.03 0 0 1 12 10.64a2.03 2.03 0 0 1 2.028 2.027A2.03 2.03 0 0 1 12 14.697z"
      />
    </svg>
  )
}

IconPicture.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconPicture