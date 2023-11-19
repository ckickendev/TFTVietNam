import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from "@mui/material";
import { COLOR } from "../constants";
import { useEffect, useState } from "react";
import loadingStore from "../../store/loadingStore";
import axios from "axios";
import CONSTVALUE from "../../api/const";
import { getHeadersToken } from "../../api/championApi";
import { NavBarComponent } from "../AuthComponent/NavBarComponent";
import authStore from "../../store/authStore";
import { ItemTooltip } from "../CommonComponent/Tooltip/ItemTooltip";
import { CustomRankingDisplay } from "../CommonComponent/CustomComponent/CustomRankingDisplay";
import { FootContent } from "../HomePage/FootContent";

export const TraitRanking = () => {
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


    const [allTraits, setAllTraits] = useState<any>([]);

    useEffect(() => {
        const getAllTraits = async () => {
            loadingStore.setIsLoading(true);
            const response = await fetch(
                "https://api2.metatft.com/tft-stat-api/traits?queue=1100&patch=current&days=2&rank=CHALLENGER,GRANDMASTER&permit_filter_adjustment=true"
              );
              const data = await response.json();
              const totalPrequent = data.games[0].count;
              const traitDataList = data.results.map((element: any) => {
                let frequency = 0;
                let avgCount = 0;
                element.places.forEach((current: any, index: any) => {
                  frequency += current;
                  avgCount += current * (index + 1);
                });
                return {
                  name: element.trait,
                  frequency: frequency,
                  winrate: (element.places[0] / frequency) * 100,
                  percentage: (frequency / totalPrequent) * 100,
                  avgCount: avgCount / frequency,
                };
                ;
              })

            traitDataList.sort((a: any, b: any) => a.avgCount - b.avgCount);

            const finalList = await traitDataList.map(async (element: any) => {
                const dataTrait = await axios.get(
                    `${CONSTVALUE.ROOT_BACKEND}/trait/getTraitByNameAPI/${element.name}`,
                    { headers: getHeadersToken() }
                );

                return { ...element, dataTrait }
            })

            finalList.forEach((data: Promise<any>) => {
                data.then((e) => {
                    setAllTraits((old: any) => {
                        return [...old, e]
                    });
                })
            })

            loadingStore.setIsLoading(false);
        };
        getAllTraits();
    }, []);


    const getRankingItem = (avgPlace: number) => {
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
        <div className="header-container">
            <div id="root">
                <div id="page-container">
                    <NavBarComponent authStore={authStore} />
                    <div id="content-wrap" style={{ backgroundColor: COLOR.BLACK_RANKING }}>
                        <div >
                            <div style={{ marginTop: '20px', color: COLOR.WHITE }}>
                                <h4 style={{ fontFamily: "Poppins,Backup,Verdana,sans-serif", fontWeight: 600 }}>TFT Item Tier List</h4>
                                <p>Stats on the best tft champions to play in set 9.5. Select a unit to see the best items and builds for that unit. Data updates every 5 minutes.
                                </p>
                            </div>
                            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Item</StyledTableCell>
                                            <StyledTableCell align="center">Tier</StyledTableCell>
                                            <StyledTableCell align="center">Top (Average)</StyledTableCell>
                                            <StyledTableCell align="center">Winrate</StyledTableCell>
                                            <StyledTableCell align="center">Frequently</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {allTraits?.map((item: any, index: number) => {
                                            console.log("item", item);

                                            return (
                                                <StyledTableRow key={index}>
                                                    <StyledTableCell component="th" scope="row">
                                                        <div style={{ display: 'flex', justifyContent: 'start' }}>
                                                            <ItemTooltip id={item?.dataItem?.data.item[0]?._id} />
                                                            <Typography style={{ marginLeft: '12px' }} align='center' lineHeight={"24px"} fontSize={10} fontWeight={400} color={COLOR.BLACK_BACKGROUND}>{item?.dataItem?.data?.item[0]?.name}</Typography>
                                                        </div>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">
                                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <CustomRankingDisplay ranking={item?.rank} />
                                                        </div>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center">{item?.avgCount}</StyledTableCell>
                                                    <StyledTableCell align="center">{item?.winrate} %</StyledTableCell>
                                                    <StyledTableCell align="center">{item?.frequency}
                                                        <span> </span>
                                                        <span style={{ fontSize: '10px' }}>
                                                            {item?.percentage} %
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
    );
};
