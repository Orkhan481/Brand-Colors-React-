import React from 'react'
import ContentLoader from "react-content-loader"

const Loader = () => {
  return (
    <ContentLoader 
    speed={2}
    width={600}
    height={116}
    viewBox="0 0 600 116"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="22" y="53" rx="2" ry="2" width="74" height="50" /> 
    <rect x="20" y="15" rx="2" ry="2" width="187" height="30" /> 
    <rect x="106" y="54" rx="2" ry="2" width="74" height="50" /> 
    <rect x="281" y="53" rx="2" ry="2" width="74" height="50" /> 
    <rect x="195" y="53" rx="2" ry="2" width="74" height="50" />
  </ContentLoader>

  )
}

export default Loader