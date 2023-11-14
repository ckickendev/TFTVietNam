import { COLOR } from '../constants';

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
                return "##ffdf80"
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
    return (
        <div style={{ width: "18px", height: "18px", backgroundColor: color(), alignItems: 'center', borderRadius: "2px", color }}>
            {props.ranking}
        </div>
    )
}
