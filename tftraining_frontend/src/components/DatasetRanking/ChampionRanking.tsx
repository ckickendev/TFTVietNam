import React, { useEffect, useState } from "react";
import { NavBarComponent } from "../AuthComponent/NavBarComponent";
import authStore from "../../store/authStore";
import { FootContent } from "../HomePage/FootContent";
import { COLOR } from "../constants";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from "@mui/material";
import loadingStore from "../../store/loadingStore";
import { getAllChampionAPI, loadRankChampion } from "../../api/championApi";
import { IChampionData } from "../AdminPanel/ChampionAdmin/ChampionAdmin";

export const ChampionRanking = () => {
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
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
          const champions = await loadRankChampion();
          setAllChampions(champions);
          loadingStore.setIsLoading(false);
        };
        getAllChampion();
      }, []);

    

    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <div className="header-container">
            <div id="root">
                <div id="page-container">
                    <NavBarComponent authStore={authStore} />
                    <div id="content-wrap" style={{ backgroundColor: COLOR.BLACK_RANKING }}>
                        <div >
                            <div style={{ marginTop: '20px', color: COLOR.WHITE }}>
                                <h4 style={{fontFamily: "Poppins,Backup,Verdana,sans-serif", fontWeight: 600}}>TFT Champion Tier List</h4>
                                <p>Stats on the best tft champions to play in set 9.5. Select a unit to see the best items and builds for that unit. Data updates every 5 minutes.
                                </p>
                            </div>
                            <TableContainer component={Paper} style={{marginTop: '20px'}}>
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
                                        {allChampions?.map((champion : any) => (
                                            <StyledTableRow key={champion.name}>
                                                <StyledTableCell component="th" scope="row">
                                                    {champion.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">{champion.name}</StyledTableCell>
                                                <StyledTableCell align="center">{champion.name}</StyledTableCell>
                                                <StyledTableCell align="center">{champion.name}</StyledTableCell>
                                                <StyledTableCell align="center">{champion.name}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
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
