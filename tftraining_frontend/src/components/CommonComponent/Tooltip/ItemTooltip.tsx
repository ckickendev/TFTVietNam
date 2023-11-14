import React, { useEffect, useState } from "react";
import loadingStore from "../../../store/loadingStore";
import { getItemByIdAPI } from "../../../api/itemAPI";
import { Tooltip, TooltipProps, Typography, styled, tooltipClasses } from "@mui/material";
import { COLOR } from "../../constants";
import { CustomPropertyComponent } from "../CustomComponent/CustomPropertyComponent";

export const ItemTooltip = ({ id }: any) => {
    const [item, setItem] = useState({
        name: "",
        image: "",
        effect: "",
        property: [],
    });
    useEffect(() => {
        const getData = async () => {
            loadingStore.setIsLoading(true);

            // Get data for trait
            const item = await getItemByIdAPI(id);
            console.log(item);
            
            setItem(item);

            loadingStore.setIsLoading(false);
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
                    src={item?.image}
                    style={{ background: COLOR.BLACK_BACKGROUND, color: "#cfcfcf", borderRadius: 5 }}
                    width={28}
                    height={28}
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
