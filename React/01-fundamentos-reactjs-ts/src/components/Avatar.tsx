import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface IAvatartProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export function Avatar({hasBorder = true, ...props}: IAvatartProps) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        {...props}
        />
    );
}