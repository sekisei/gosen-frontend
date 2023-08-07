import axios from "axios";
import { useEffect } from "react";
import BatteryIcon from "../../Atoms/BatteryIcon";
import ItemTitle from "../../Atoms/Item/ItemTitle";
import SlideSwitch from "../../Atoms/SlideSwitch";
import { ItemInfo } from "../../types";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import "./ItemStyle.css";

const ItemPresenter = (props:{
    showDetails:boolean,
    setShowDetails:React.Dispatch<React.SetStateAction<boolean>>,
    itemInfo:ItemInfo,
}) => {

    useEffect(() => {
        axios.post(
            "http://localhost:8080/v1/system/add",
            props.itemInfo,
        ).then((res) => {
            console.log(res);
        });
    },[props.showDetails]);

    return(
        <>
            <div onClick={() => props.setShowDetails(!props.showDetails)} className="itemBase">
                <div className="slideSwitch">
                    <SlideSwitch/>
                </div>
                <div className="itemTitle">
                    <ItemTitle/>
                </div>
                <div className="statusIcon">
                    <BatteryIcon/>
                </div>
            </div>
            <div className="detailAdjust">
                <ItemDetailContainer {...props}/>
            </div>
        </>
    );
}

export default ItemPresenter;