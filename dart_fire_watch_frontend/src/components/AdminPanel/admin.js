import React from 'react'
import { LeftPanel } from './LeftPanel'
import { RightPanel } from './RightPanel'
import "./admin.scss"

export const Admin = () => {
  return (
    <div className='page-container-admin-page'>
      <LeftPanel />
      <RightPanel />
    </div>
  )
}
