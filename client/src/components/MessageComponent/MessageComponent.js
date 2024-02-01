import { useState } from "react"
import styles from "../MessageComponent/MessageComponent.module.css"
import Replies from "../RepliesComponent/Replies";
const MessageComponent = ({ Author, Text, PostText, Margin, replies }) => {
    const [showMessages, setShowMessages] = useState(false);
    return <div className={styles.outerBox}>
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
        {
            replies?.map((data, index) => {
                return <Replies Author={data?.author} Text={data?.text} Margin={Margin + index} Replies={data?.replies} />
            })
        }
    </div>
}


export default MessageComponent