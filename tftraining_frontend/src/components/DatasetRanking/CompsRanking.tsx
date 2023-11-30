import React, { useEffect, useState } from 'react'
import { NavBarComponent } from '../AuthComponent/NavBarComponent'
import { FootContent } from '../HomePage/FootContent'
import authStore from '../../store/authStore'
import { COLOR } from '../constants'
import { observer } from 'mobx-react'
import { LoadingCustom } from '../../utils/LoadingCustom'
import { CompsUnitElement } from './CompsUnitElement'

export interface IComps {
    championsListName: Array<any>,
    champions: Array<any>,
    builds: any,
    name: string,
    qtt: any,
    stars: Array<any>,
}

export const CompsRanking = observer(({ loadingStore, authStore }: any) => {

    const [teamComps, setTeamComps] = useState<IComps[]>([]);

    useEffect(() => {
        const loadCompsData = async () => {
            loadingStore.setIsLoading(true);
            // Get data quantity
            const responseQtt = await fetch("https://api2.metatft.com/tft-comps-api/comps_stats?queue=1100&patch=current&days=2&rank=CHALLENGER,GRANDMASTER&permit_filter_adjustment=true");
            const dataQtt = await responseQtt.json();
            console.log("dataqtt", dataQtt);

            const totalData = dataQtt?.filter_adjustment?.sample_size || dataQtt?.filter_adjustment?.new_sample_size; 

            const teamCompsQttRes = dataQtt?.results?.map((element: any) => {
                const placeArr = element?.places;
                let avgPlace = 0, totalWin = 0, totalTop4 = 0;
                const totalMatch = placeArr[8];;
                if (placeArr) {
                    placeArr.forEach((value: number, index: number) => {
                        if (index <= 7) {
                            avgPlace += value * (index + 1);
                        }
                        if (index <= 3) {
                            totalTop4 += value;
                        }
                    })
                    avgPlace = avgPlace / totalMatch
                }
                console.log("totalData", totalData);
                
                return {
                    avgPlace: avgPlace.toFixed(2),
                    pickRate: (totalMatch / totalData * 100).toFixed(2),
                    top4Rate: (totalTop4 / totalMatch * 100).toFixed(2),
                    winRate: (placeArr[0] / totalMatch * 100).toFixed(2)
                }
            })

            // Get data comps
            const response = await fetch(
                "https://api2.metatft.com/tft-comps-api/comps_data"
            );
            const data = await response.json();
            console.log("data comps", data);

            var arrayData = Object.keys(data.results.data.cluster_details).map(
                (key) => data.results.data.cluster_details[key]
            );
            const comps = arrayData.map((team, index) => {
                let compsName = "";
                team.name.forEach((e: any) => {
                    const handle = e.name.split("_");
                    compsName += " " + handle[1];
                });

                const championsListAfterSplit = team.units_string.split(",");
                const championsList = championsListAfterSplit.map((e: any) => {
                    return e.trim();
                })
                const championsListName = championsList.map((champion: any) => {
                    const cl = champion.split("_")
                    return cl[1].trim();
                })

                let startsChamp: any[] = [];
                team?.stars?.forEach((element: any) => {
                    const splitChamp = element.split("_");
                    if (championsListName.includes(splitChamp[1])) {
                        startsChamp.push(element)
                    }
                })
                const unitData = {
                    stars: startsChamp,
                    champions: championsList,
                    championsListName: championsListName,
                    builds: team.builds,
                    name: compsName,
                    qtt: teamCompsQttRes[index + 1]
                };
                return unitData;
            });

            loadingStore.setIsLoading(false);
            console.log("comps", comps);

            comps.sort((a: any, b: any) => a.qtt.avgPlace - b.qtt.avgPlace);

            setTeamComps(comps);
        };
        loadCompsData();

    }, []);
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
                            <div style={{ marginTop: '20px', color: COLOR.WHITE }}>
                                <h4 style={{ fontFamily: "Poppins,Backup,Verdana,sans-serif", fontWeight: 600 }}>TFT Comps</h4>
                                <p>Stats on the best tft champions to play in set 9.5. Select a unit to see the best items and builds for that unit. Data updates every 5 minutes.
                                </p>
                            </div>
                            <div id="tftmodel" style={{ width: "80%" }}>
                                {teamComps.map((team: IComps, index: number) => {
                                    return <CompsUnitElement key={index} team={team} />
                                })}
                            </div>
                            <FootContent />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
});
