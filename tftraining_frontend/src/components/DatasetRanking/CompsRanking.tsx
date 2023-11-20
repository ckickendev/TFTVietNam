import React, { useEffect, useState } from 'react'
import { NavBarComponent } from '../AuthComponent/NavBarComponent'
import { FootContent } from '../HomePage/FootContent'
import authStore from '../../store/authStore'
import { COLOR } from '../constants'
import { observer } from 'mobx-react'
import { LoadingCustom } from '../../utils/LoadingCustom'
import { CompsUnitElement } from './CompsUnitElement'

export interface IComps {
    champions: any,
    builds: any,
    name: string
}

export const CompsRanking = observer(({ loadingStore, authStore }: any) => {
    
    const [teamComps, setTeamComps] = useState<IComps[]>([]);

    useEffect(() => {
        const loadCompsData = async () => {
            loadingStore.setIsLoading(true);
            const response = await fetch(
                "https://api2.metatft.com/tft-comps-api/comps_data"
            );
            const data = await response.json();
            console.log(data);
            var arrayData = Object.keys(data.results.data.cluster_details).map(
                (key) => data.results.data.cluster_details[key]
            );
            const comps = arrayData.map((team) => {
                let compsName = "";
                team.name.forEach((e: any) => {
                    const handle = e.name.split("_");
                    compsName += " " + handle[1];
                });
                const unitData = {
                    champions: team.units_string.split(","),
                    builds: team.builds,
                    name: compsName,
                };
                return unitData;
            });

            comps.sort((a: any, b: any) => a.avgCount - b.avgCount);

            loadingStore.setIsLoading(false);
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
                            <div id="tftmodel">
                                {teamComps.map((team: IComps) => {
                                    return <CompsUnitElement team={team} />
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
