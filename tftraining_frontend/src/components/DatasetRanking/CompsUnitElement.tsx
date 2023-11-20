import React from 'react'
import { IComps } from './CompsRanking'


export const CompsUnitElement = (props: {team: IComps} ) => {
  return (
    <div>{props.team.name}</div>
  )
}
