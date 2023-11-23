import React, { useEffect, useState } from "react";
import { getAllTraitsAPI, getTraitByIdAPI } from "../../../api/traitAPI";
import { COLOR } from "../../constants";
import { Tooltip, TooltipProps, Typography, tooltipClasses } from "@mui/material";
import { CustomIconTraitComponent } from "../CustomComponent/CustomIconTraitComponent";
import styled from "@emotion/styled";
import { LoadingCustom } from "../../../utils/LoadingCustom";

export const TraitToolTip = ({ id }: any) => {

    const [trait, setTrait] = useState({
        name: "",
        image: "",
        effect: "",
        unit_activate: []
    });
    useEffect(() => {
        const getData = async () => {

            // Get data for trait
            if (id) {
                const trait = await getTraitByIdAPI(id);
                setTrait(trait);
            }
        };

        getData();
    }, [])
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    {trait?.name || "Loading Data"}
                    {!trait?.name || <div style={{ borderColor: COLOR.GREEN, borderWidth: 2, borderStyle: "solid", padding: 5, borderRadius: 5 }}>
                        <Typography fontSize={15} color={COLOR.BLACK_BACKGROUND}>{trait?.name}</Typography>
                        <Typography fontSize={12} fontWeight={300} style={{ whiteSpace: "pre-wrap", padding: 0, margin: "10px 0px" }} color="inherit">{trait?.effect}</Typography>
                        <div>
                            {trait?.unit_activate?.map((unit: any) => {
                                return (
                                    <div style={{ display: 'flex' }}>
                                        <Typography fontSize={10} style={{ whiteSpace: "pre-wrap", padding: 0, margin: "2px 0px" }} >{`(${unit?.count_activate})`}</Typography>
                                        <Typography fontSize={10} style={{ whiteSpace: "pre-wrap", padding: 0, margin: "2px 2px" }} >{`${unit?.effect_activate}`}</Typography>
                                    </div>
                                )
                            })}
                        </div>
                    </div>}


                </React.Fragment>
            }
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CustomIconTraitComponent height={28} width={28} src={trait?.image} />
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
