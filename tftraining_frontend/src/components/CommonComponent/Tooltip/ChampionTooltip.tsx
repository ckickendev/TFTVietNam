import { Button, Tooltip, TooltipProps, Typography, styled, tooltipClasses } from '@mui/material';
import React, { useEffect, useState } from 'react'
import loadingStore from '../../../store/loadingStore';
import { getChampionByIdApi } from '../../../api/championApi';
import { CustomChampionAvatar } from '../CustomChampionAvatar';

export const ChampionTooltip = ({ id }: any) => {
    const [champion, setChampion] = useState({
        image: "",
        name:"",
        skill: ""
    });
    useEffect(() => {
        const getChampionById = async () => {
            loadingStore.setIsLoading(true);
            const champions = await getChampionByIdApi(id);
            setChampion(champions);
            loadingStore.setIsLoading(false);
        };
        getChampionById();
    }, [])
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    <Typography color="inherit">{champion.name}</Typography>
                    <br/>
                    <Typography style={{whiteSpace: "pre-wrap"}} color="inherit">{champion.skill}</Typography>
                </React.Fragment>
            }
        >
            {/* <Button>HTML</Button> */}
            <div>
                <CustomChampionAvatar height={28} width={28} src={champion?.image} />
            </div>
        </HtmlTooltip>
    )
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} placement="right-end" />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));
