import React from 'react'
import { IComps } from './CompsRanking'
import "./style/CompsUnitElement.scss"
import { ChampionTooltip } from '../CommonComponent/Tooltip/ChampionTooltip'


export const CompsUnitElement = (props: { team: IComps }) => {
  return (
    <div className='compsWrapper'>
      <div className='teamChampion'>
        <h3>{props.team.name}
        </h3>
        <div className='championsList'>
          {props.team.champions.map((champion) => {
            console.log("champion " ,champion);
            
            return <ChampionTooltip id={champion}  />
          })}
        </div>
      </div>

      <div className='compsQuantity'>
        {props.team.name}
      </div>
      <div className='carrier_champion'>{props.team.name}</div>

    </div>
  )
}
