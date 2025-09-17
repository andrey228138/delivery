import React from 'react'
import ContentLoader from "react-content-loader"
export default function Food_Skeleton() {
  return (
   <>
   <ContentLoader 
    speed={2}
    width={300}
    height={430}
    viewBox="0 0 300 430"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="NaN" cy="NaN" r="NaN" /> 
    <circle cx="140" cy="135" r="130" /> 
    <rect x="0" y="279" rx="0" ry="0" width="290" height="33" /> 
    <rect x="81" y="294" rx="0" ry="0" width="5" height="1" /> 
    <rect x="1" y="324" rx="0" ry="0" width="288" height="60" /> 
    <rect x="5" y="400" rx="0" ry="0" width="99" height="35" /> 
    <rect x="210" y="395" rx="6" ry="6" width="81" height="32" />
  </ContentLoader>
   </>
  )
}
