'use client'

import { IoCloseSharp } from "react-icons/io5"

import styles from "./Popup.module.css"
import { useRef } from "react"


export function Popup({ trigger, setTrigger, size="medium", children }) {

    const wrapper = useRef()

    return trigger ? (
        <section ref={wrapper} onClick={e => {
            if(e.target === wrapper.current) {
                setTrigger(false)
            }
        }} className={size === "small" ? styles.containerSmall : size === "medium" ? styles.container : size === "large" ? styles.containerLarge : styles.container }>
            <div className={styles.popup}>
                <button
                    className={styles.close}
                    onClick={() => setTrigger(false)}
                >
                    <IoCloseSharp />
                </button>
                {children}
            </div>
        </section>
    ) : (
        <></>
    )
}