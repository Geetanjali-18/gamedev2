import React, { useState } from 'react'

const ReviewPage = (props) => {
    const [isReplied, setIsReplied] = useState(false)
    const [replyText, setReplyText] = useState("")

    const handleOnReplyNow = () => {
        setIsReplyActive(true)
    }
    const handleOnTextChange = (e) => {
        setReplyText(e.target.value)
    }

    const [isReplyActive, setIsReplyActive] = useState(false)

    const handleOnReplySend = () => {
        setIsReplied(true)
        setIsReplyActive(false)
    }
    return (

        <div class="card" style={{ width: "90%", margin: "auto" }}>
            <div class="card-body">
                <div className="personNameReview card-title">{props.rDevName} </div>
                <p class="card-text">{props.rDesc}</p>

            </div>
            <div className="givePersonReply card-body">
                {!isReplied && <div className="replyNowReview" onClick={handleOnReplyNow}>Reply</div>}
                {isReplyActive && <div class="input-group">
                    <textarea onChange={handleOnTextChange} class="form-control" value={replyText} aria-label="With textarea"></textarea>
                    <button class="input-group-text" onClick={handleOnReplySend}><i class="fa-solid fa-paper-plane"></i></button>
                </div>}
                {isReplied && <div className="card isReplySection">
                    <div className="card-text">
                        {replyText}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default ReviewPage