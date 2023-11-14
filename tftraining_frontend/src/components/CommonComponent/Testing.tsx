import React from 'react'
import { CustomPropertyComponent } from './CustomComponent/CustomPropertyComponent'
import { TYPE_PROPERTY } from '../constants'

export const Testing = () => {
  return (
    <>
      <CustomPropertyComponent type={TYPE_PROPERTY.MN} value={12} />
    </>
  )
}
