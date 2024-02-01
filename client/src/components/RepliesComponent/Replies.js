import { useState } from "react"
import styles from "./Replies.module.css"

const Replies = ({ Author, Text, PostText, Margin}) => {
    const [showMessages, setShowMessages] = useState(false);
    return <div className={styles.outerBox} >
        <div className={styles.authorDetails}>
            <button onClick={() => { setShowMessages(prevState => { return !prevState }) }} >showMessages</button>
            <img src={Author?.avatar} alt="author" />
            <p>{Author?.name}</p>
        </div>
        <div className={styles.postDetails}>
            {
                showMessages && <p style={{ margin: `0 ${Margin}rem` }}>{Text}</p>
            }
        </div>
    </div>
}


export default Replies