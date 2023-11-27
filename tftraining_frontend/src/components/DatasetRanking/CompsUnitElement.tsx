import React from 'react'
import { IComps } from './CompsRanking'
import "./style/CompsUnitElement.scss"
import { ChampionTooltip } from '../CommonComponent/Tooltip/ChampionTooltip'


export const CompsUnitElement = (props: { team: IComps }) => {
  return (
    <div className='compsWrapper'>
      <div className='teamChampion'>
        <h6>{props.team.name}
        </h6>
        <div className='championsList'>
          {props.team.champions.map((champion, index) => {
            return (<div className='championTooltipElement'>
              <ChampionTooltip size={38} nameAPI={champion} />
              <p className='championsList championsList--Name'>{props.team.championsListName[index]}</p>
            </div>)
          })}
        </div>
      </div>

      <div className='compsQuantity'>
        <div className=' compsQuantity-wrapper'>
          <div className=' compsQuantity-value'>
            AVG Place
          </div>
          <div className=' compsQuantity-name'>
            {props?.team?.qtt?.avgPlace}
          </div>
        </div>
        <div className=' compsQuantity-wrapper'>
          <div className=' compsQuantity-value'>
            Pick Rate
          </div>
          <div className=' compsQuantity-name'>
            {props?.team?.qtt?.pickRate} %
          </div>
        </div>
        <div className=' compsQuantity-wrapper'>
          <div className=' compsQuantity-value'>
            Win Rate
          </div>
          <div className=' compsQuantity-name'>
            {props?.team?.qtt?.winRate} %
          </div>
        </div>
        <div className=' compsQuantity-wrapper'>
          <div className=' compsQuantity-value'>
            Top 4 Rate
          </div>
          <div className=' compsQuantity-name'>
            {props?.team?.qtt?.top4Rate} %
          </div>
        </div>
      </div>
      <div className='carrier_champion'>
        {props.team.builds.map((element: any) => {
          return <div className='carrier_champion_element'>
            <ChampionTooltip size={38} nameAPI={element.unit} />
          </div>
        })}
      </div>

    </div>
  )
}