import { Button, Rating, Tooltip, TooltipProps, Typography, styled, tooltipClasses } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getChampionByIdApi, getChampionByNameApi, getListTraisByChampionId, getListTraisByChampionNameApi } from '../../../api/championApi';
import { CustomChampionAvatar } from '../CustomComponent/CustomChampionAvatar';
import { COLOR, SIZE } from '../../constants';
import './tooltip.scss'

export const ChampionTooltip = ({ id, nameAPI, size, isFullStar }: any) => {
    const [champion, setChampion] = useState({
        image: "",
        bgimage: "",
        name: "",
        skill: "",
        traits: [],
        cost: 0,
    });
    const [listTraits, setListTraits] = useState([]);
    useEffect(() => {
        const getData = async () => {

            if (id) {

                // Get data for champion
                const champion = await getChampionByIdApi(id);
                setChampion(champion);
                const traits = await getListTraisByChampionId(id);
                setListTraits(traits);
            } else {
                if (nameAPI) {

                    // Get data for champion
                    const champion = await getChampionByNameApi(nameAPI.trim());
                    setChampion(champion);
                    const traits = await getListTraisByChampionNameApi(nameAPI.trim());
                    setListTraits(traits);
                }
            }
            // Get data for traits
        };

        getData();
    }, [])
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    <div style={{ borderColor: COLOR.GREEN, borderWidth: 2, borderStyle: "solid", margin: 0, borderRadius: 5, width: SIZE.WIDTH_TOOLTIP_BG_CHAMPION }}>
                        <div style={{ position: 'relative' }}>
                        <div style={{  position: 'absolute', top: 10, left: 10, zIndex: 99 }}>
                                <Typography fontSize={16} fontWeight={500} style={{ whiteSpace: "pre-wrap", paddingLeft: 2, zIndex: 99, color: COLOR.WHITE }} >{champion.name}</Typography>
                            </div>
                            <div style={{ position: 'absolute', bottom: 10, left: 0, zIndex: 99 }}>
                                {listTraits?.map((trait: any) => {
                                    return (
                                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 5 }} key={trait._id}>
                                            <img src={`../images/traits/${trait?.image}.png`} width={SIZE.TRAIT_ICON_WIDTH} height={SIZE.TRAIT_ICON_HEIGHT} />
                                            <Typography fontSize={12} fontWeight={400} style={{ whiteSpace: "pre-wrap", paddingLeft: 5, zIndex: 99, color: COLOR.WHITE }} color="inherit">{trait?.name}</Typography>
                                        </div>
                                    )
                                })}
                            </div>
                            
                            <div style={{ position: 'absolute', bottom: 10, right: 10, zIndex: 99, display: 'flex', alignItems: 'center' }}>
                                <img color={COLOR.YELLOW} src="https://cdn.mobalytics.gg/assets/common/icons/tft-system/coin.svg" alt="coin" />
                                <Typography fontSize={12} fontWeight={400} style={{ whiteSpace: "pre-wrap", paddingLeft: 2, zIndex: 99, color: COLOR.WHITE }} color="inherit">{champion?.cost}</Typography>
                            </div>
                            <img src={`../images/bg_champions/${champion?.bgimage}.png`} width={'100%'} height={SIZE.HEIGHT_TOOLTIP_BG_CHAMPION} style={{ borderColor: COLOR.YELLOW, borderWidth: 2, borderStyle: "solid", borderRadius: 10 }} />
                        </div>

                        <Typography fontSize={13} fontWeight={300} style={{ whiteSpace: "pre-wrap", padding: 10 }} color="inherit">{champion.skill}</Typography>
                    </div>

                </React.Fragment>
            }
        >
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} className='tool-tip--cursor'>
                <CustomChampionAvatar height={size || 28} width={size || 28} src={champion?.image} />
                {isFullStar &&
                    <div className="stars_div">
                        <img className="Stars_img" height="12" src="https://www.metatft.com/cdn-cgi/image/height=12,format=auto/https://cdn.metatft.com/file/metatft/tiers/3.png" alt="Three Star Unit" />
                    </div>}
            </div>
        </HtmlTooltip>
    )
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip style={{ borderRadius: "5px" }} {...props} classes={{ popper: className }} placement="right-end" />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: COLOR.WHITE,
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 8,
        border: '0px solid #dadde9',
        borderRadius: 3,
        padding: 0
    },
}));
