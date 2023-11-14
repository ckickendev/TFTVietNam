import { COLOR } from '../../constants';

export const CustomRankingDisplay = (props: { ranking: "S" | "A" | "B" | "C" | "D" }) => {
    const color = () => {
        switch (props.ranking) {
            case "S":
                return "#ff7e83";
                break;
            case "A":
                return "#ffbf7f"
                break;
            case "B":
                return "#ffdf80"
                break;
            case "C":
                return "#feff7f"
                break;
            case "D":
                return "#bffe7f"
                break;
            default:
                return COLOR.WHITE
        }
    }

    const styleText = {
        borderRadius: "2px",
        cursor: "pointer",
        display: 'flex',
        fontSize: '18px',
        fontWeight: '600',
        justifyContent: 'center',
    }

    return (
        <div style={{ width: "28px", height: "28px", backgroundColor: color(), color: "#111", ...styleText }}>
            {props.ranking}
        </div>
    )
}
