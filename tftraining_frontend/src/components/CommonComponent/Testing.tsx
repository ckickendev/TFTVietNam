import React from 'react'
import { CustomRankingDisplay } from './CustomRankingDisplay'

export const Testing = () => {
  return (
    <>
      <CustomRankingDisplay ranking="S" />
      <CustomRankingDisplay ranking="A" />

      <CustomRankingDisplay ranking="B"  />

      <CustomRankingDisplay ranking="C"  />
      <CustomRankingDisplay  ranking="D"  />

    </>
  )
}
