import {Button, OverlayTrigger, Tooltip} from "react-bootstrap";
import SwalModal from "sweetalert2";



function EmojiRow({ symbol, title }) {

    // copy emoji to clipboard
    const copyEmoji = (_emoji) => {
        navigator.clipboard.writeText(_emoji)

        // show alert
        SwalModal.fire({
            position: 'top-end',
            title: `<h4>${_emoji} has been copied!</h4>`,
            showConfirmButton: false,
            timer: 1000,
            background: '#505664',
            color: 'white',
        })
    }

    return (
        <div className="emoji-item mt-1" style={{cursor: 'pointer'}} onClick={() => {copyEmoji(symbol)}}>
            <span>{symbol}</span> <span>{title}</span>

        </div>
    )
}

export default EmojiRow