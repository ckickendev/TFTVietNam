import React, { useEffect, useState } from "react";
import { NavBarComponent } from "../AuthComponent/NavBarComponent";
import authStore from "../../store/authStore";
import { FootContent } from "../HomePage/FootContent";
import { COLOR } from "../constants";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import { getHeadersToken } from "../../api/championApi";
import axios from "axios";
import CONSTVALUE from "../../api/const";
import { ChampionTooltip } from "../CommonComponent/Tooltip/ChampionTooltip";
import { CustomRankingDisplay } from "../CommonComponent/CustomComponent/CustomRankingDisplay";
import { observer } from "mobx-react";
import { LoadingCustom } from "../../utils/LoadingCustom";


export const ChampionRanking = observer(({ loadingStore, authStore }: any) => {
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
            // backgroundColor: COLOR.BLACK,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: COLOR.BLACK_BACKGROUND,
            color: COLOR.WHITE,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));


    const [allChampions, setAllChampions] = useState<any>([]);

    useEffect(() => {
        const getAllChampion = async () => {
            loadingStore.setIsLoading(true);
            const response = await axios.get(
                "https://api2.metatft.com/tft-stat-api/units?queue=1100&patch=current&days=2&rank=CHALLENGER&permit_filter_adjustment=true"
            );

            const totalPrequent = await response.data.games[0].count;
            const unitDataList = await response.data.results.map((element: { places: any[]; unit: any; }) => {
                let frequency = 0;
                let avgCount = 0;
                element.places.forEach((current, index) => {
                    frequency += current;
                    avgCount += current * (index + 1);
                });

                // const dataChampion = await axios.get(
                //     `${CONSTVALUE.ROOT_BACKEND}/champion/getChampionByNameApi/${element.unit}`,
                //     { headers: getHeadersToken() }
                // );

                return {
                    name: element.unit,
                    frequency: frequency,
                    winrate: ((element.places[0] / frequency) * 100).toFixed(2),
                    percentage: ((frequency / totalPrequent) * 100).toFixed(2),
                    rank: getRankingChampion((avgCount / frequency)),
                    avgCount: (avgCount / frequency).toFixed(2),
                    avgCountNumber: avgCount,
                };
            });

            unitDataList.sort((a: any, b: any) => a.avgCount - b.avgCount);

            const finalList = await unitDataList.map(async (element: any) => {
                const dataChampion = await axios.get(
                    `${CONSTVALUE.ROOT_BACKEND}/champion/getChampionByNameApi/${element.name}`,
                    { headers: getHeadersToken() }
                );

                return { ...element, dataChampion }
            })

            finalList.forEach((data: Promise<any>) => {
                data.then((e) => {
                    setAllChampions((old: any) => {
                        return [...old, e]
                    });
                })
            })
            loadingStore.setIsLoading(false);
        };
        getAllChampion();
    }, []);

    const getRankingChampion = (avgPlace: number) => {
        if (avgPlace < 4.2) {
            return "S";
        } else if (avgPlace < 4.40) {
            return "A";
        } else if (avgPlace < 4.61) {
            return "B";
        } else if (avgPlace < 4.8) {
            return "C";
        } else {
            return "D";
        }

    }

    return (
        <>
            {loadingStore.getIsLoading() && (
                <LoadingCustom isOpen={loadingStore.getIsLoading()} />
            )}
            <div className="header-container">
                <div id="root">
                    <div id="page-container">
                        <NavBarComponent authStore={authStore} />
                        <div id="content-wrap" style={{ backgroundColor: COLOR.BLACK_RANKING }}>
                            <div >
                                <div style={{ marginTop: '20px', color: COLOR.WHITE }}>
                                    <h4 style={{ fontFamily: "Poppins,Backup,Verdana,sans-serif", fontWeight: 600 }}>TFT Champion Tier List</h4>
                                    <p>Stats on the best tft champions to play in set 9.5. Select a unit to see the best items and builds for that unit. Data updates every 5 minutes.
                                    </p>
                                </div>
                                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Champion</StyledTableCell>
                                                <StyledTableCell align="center">Tier</StyledTableCell>
                                                <StyledTableCell align="center">Top (Average)</StyledTableCell>
                                                <StyledTableCell align="center">Winrate</StyledTableCell>
                                                <StyledTableCell align="center">Frequently</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {allChampions?.map((champion: any, index: number) => {

                                                return (
                                                    <StyledTableRow key={index}>
                                                        <StyledTableCell component="th" scope="row">
                                                            <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                                <ChampionTooltip id={champion?.dataChampion?.data.champion[0]?._id} />
                                                                <Typography style={{ marginLeft: '12px' }} align='center' lineHeight={"24px"} fontSize={10} fontWeight={400} color={COLOR.BLACK_BACKGROUND}>{champion?.dataChampion?.data.champion[0]?.name}</Typography>
                                                            </div>
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                                <CustomRankingDisplay ranking={champion?.rank} />
                                                            </div>
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">{champion?.avgCount}</StyledTableCell>
                                                        <StyledTableCell align="center">{champion?.winrate} %</StyledTableCell>
                                                        <StyledTableCell align="center">{champion?.frequency}
                                                            <span> </span>
                                                            <span style={{ fontSize: '10px' }}>
                                                                {champion?.percentage} %
                                                            </span>
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            <FootContent />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
});
