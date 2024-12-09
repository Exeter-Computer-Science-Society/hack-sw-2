import { HashLoader } from "react-spinners"
import styles from "./Loading.module.css"

/**
 * A standard component to be used when something is loading on the screen
 * @param {String} size can be large or small (large by default). When small icon is smaller and message is not shown
 */
export function Loading({ size="large", color="white", message="Loading..." }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<HashLoader color={color} size={size === "large" ? 34 : 20} />
				<p>{message}</p>
			</div>
		</div>
	)
}