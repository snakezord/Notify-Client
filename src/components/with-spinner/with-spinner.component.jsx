import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const WithSpinner = WrappedComponent => ({ isFetching, ...otherProps }) => {
  return isFetching ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  )
}

export default WithSpinner