import React, { useEffect, useState } from "react";
import { getItemByIdAPI, getItemByNameAPI } from "../../../api/itemAPI";
import { Tooltip, TooltipProps, Typography, styled, tooltipClasses } from "@mui/material";
import { COLOR } from "../../constants";
import { CustomPropertyComponent } from "../CustomComponent/CustomPropertyComponent";

export const ItemTooltip = ({ id, nameAPI, size }: any) => {
    const [item, setItem] = useState({
        name: "",
        image: "",
        effect: "",
        property: [],
    });
    useEffect(() => {
        const getData = async () => {

            // Get data for trait
            if (id) {
                const item = await getItemByIdAPI(id);
                setItem(item);
            }
            if(nameAPI) {
                const item = await getItemByNameAPI(nameAPI);
                setItem(item);
            }
        };

        getData();
    }, [])
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    <div style={{ borderColor: COLOR.GREEN, borderWidth: 2, borderStyle: "solid", padding: 5, borderRadius: 5 }}>
                        <Typography fontSize={20} fontWeight={400} color={COLOR.BLACK_BACKGROUND}>{item?.name}</Typography>
                        {item?.property?.map((e) => {
                            return <CustomPropertyComponent type={e['type']} value={e['value']} />
                        })}
                        <Typography marginTop={2} fontWeight={400} fontSize={10} color={COLOR.BLACK_BACKGROUND}>{item?.effect}</Typography>
                    </div>

                </React.Fragment>
            }
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    src={`../images/items/${item?.image}.png`}
                    style={{ background: COLOR.BLACK_BACKGROUND, color: "#cfcfcf", borderRadius: 5 }}
                    width={size || 28}
                    height={size || 28}
                />
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
