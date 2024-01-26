import { useState } from "react";
import IconArrow from "../../../assets/icon/arrow.png";
import IconArrowGray from "../../../assets/icon/gray-arrow.png";

const NavLink = ({text}) => {

    const [imgChange, setImgChange] = useState(IconArrowGray)

    const imageChangeEnter = () => {
        setImgChange(IconArrow);
    }

    const imageChangeLeave = () => {
        setImgChange(IconArrowGray);
    }

    return(
        <div onMouseEnter={() => imageChangeEnter()} onMouseLeave={() => imageChangeLeave()}> 
            <a>{text}</a>
            <i>
                <img  src={imgChange} />
            </i>
        </div>
    )
};

export default NavLink;