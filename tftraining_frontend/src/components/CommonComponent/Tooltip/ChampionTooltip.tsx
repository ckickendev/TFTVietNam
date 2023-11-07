import { Button, Tooltip, TooltipProps, Typography, styled, tooltipClasses } from '@mui/material';
import React, { useEffect, useState } from 'react'
import loadingStore from '../../../store/loadingStore';
import { getChampionByIdApi } from '../../../api/championApi';
import { CustomChampionAvatar } from '../CustomChampionAvatar';
import { COLOR } from '../../constants';

export const ChampionTooltip = ({ id }: any) => {
    const [champion, setChampion] = useState({
        image: "",
        bgimage: "",
        name: "",
        skill: "",
        traits: [],
    });
    useEffect(() => {
        const getChampionById = async () => {
            loadingStore.setIsLoading(true);
            const champion = await getChampionByIdApi(id);
            setChampion(champion);
            loadingStore.setIsLoading(false);
        };
        
        getChampionById();
    }, [])
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    <div style={{ borderColor: COLOR.GREEN, borderWidth: 2, borderStyle: "solid", margin: 0, borderRadius: 5 }}>
                        <div style={{position: 'relative'}}>
                            <div style={{ position: 'absolute', bottom: 10, left: 0, zIndex: 99 }}>
                                {champion?.traits?.map((trait: any) => {
                                    return <Typography fontSize={10} fontWeight={400} style={{ whiteSpace: "pre-wrap", paddingLeft: 10, zIndex: 99, color: COLOR.WHITE }} color="inherit">Chien binh tasn the</Typography>
                                })}
                                
                            </div>
                            <img src={champion?.bgimage} width="100%" style={{ borderColor: COLOR.YELLOW, borderWidth: 2, borderStyle: "solid", borderRadius: 10 }} />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <Typography fontSize={30} color={COLOR.BLACK_BACKGROUND}>{champion.name}</Typography>
                            <br />
                        </div>
                        <Typography fontSize={13} fontWeight={300} style={{ whiteSpace: "pre-wrap", padding: 10 }} color="inherit">{champion.skill}</Typography>
                    </div>

                </React.Fragment>
            }
        >
            <div>

                <CustomChampionAvatar height={28} width={28} src={champion?.image} />
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
        maxWidth: 230,
        fontSize: 8,
        border: '0px solid #dadde9',
        borderRadius: 3,
        padding: 0
    },
}));
