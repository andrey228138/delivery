import React from 'react'
import ContentLoader from 'react-content-loader'
export default function New_Skeleton() {
  return (
     <ContentLoader 
    speed={2}
    width={289}
    height={127}
    viewBox="0 0 289 127"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  
  >
    <circle cx="NaN" cy="NaN" r="NaN" /> 
    <rect x="81" y="294" rx="0" ry="0" width="5" height="1" /> 
    <rect x="-2" y="0" rx="12" ry="12" width="289" height="127" />
  </ContentLoader>
  )
}
