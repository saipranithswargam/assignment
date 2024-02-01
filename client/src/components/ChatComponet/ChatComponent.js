import styles from "./ChatComponent.module.css"
import MessageComponent from "../MessageComponent/MessageComponent"
import Data from "../../data/NestedComment"
const ChatComponent = () => {
    return <div className={styles.outerBox}>
        {Data?.map((data, index) => { return <MessageComponent Author={data?.author} Text={data?.text} Margin={index + 1} replies={data?.replies} /> })
        }
    </div>
}


export default ChatComponent