import React from 'react'
import { COLOR, TYPE_PROPERTY } from '../../constants';
import { Typography } from '@mui/material';

export const CustomPropertyComponent = (props: { type: string, value: number }) => {
    const renderImage = () => {
        switch (props.type) {
            case TYPE_PROPERTY.MN: {
                return 'https://cdn.mobalytics.gg/assets/lol/images/item-categories/mana.svg';
            }
            case TYPE_PROPERTY.AP: {
                return 'https://cdn.mobalytics.gg/assets/lol/images/item-categories/ability-power.svg';
            }
            case TYPE_PROPERTY.AD: {
                return 'https://cdn.mobalytics.gg/assets/lol/images/item-categories/attack-damage.svg'
            }
            case TYPE_PROPERTY.MR: {
                return 'https://cdn.mobalytics.gg/assets/lol/images/item-categories/magic-resist.svg'
            }
            case TYPE_PROPERTY.AS: {
                return 'https://cdn.mobalytics.gg/assets/lol/images/item-categories/attack-speed.svg'
            }
            case TYPE_PROPERTY.HE: {
                return 'https://cdn.mobalytics.gg/assets/lol/images/item-categories/health.svg'
            }
            case TYPE_PROPERTY.AR: {
                return 'https://cdn.mobalytics.gg/assets/lol/images/item-categories/armor.svg'
            }
        }
    }
    return (
        <div style={{display: 'flex'}}>
            <img src={renderImage()} alt='renderImage' />
            <Typography fontSize={12} fontWeight={400} style={{ whiteSpace: "pre-wrap", paddingLeft: 2, zIndex: 99, color: COLOR.BLACK_BACKGROUND }}>{props.value}</Typography>
        </div>
    )
}
