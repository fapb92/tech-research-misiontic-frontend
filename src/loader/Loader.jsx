import React from 'react'
import style from "./Loader.module.css"

export const Loader = () => {

    return <div className={style.loaderBody}>
        <div className={style["lds-spinner"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
}


