import ActionButton from "../ui/action-button";
import Button from "../ui/button";
import TextArea from "../ui/textarea";

const CommentBar = ({  }) => {
    return (
        <div className="bottom-bar">
            <TextArea placeholder="댓글 입력" />
            <ActionButton imageSrc="../../assets/images/icon/paperclip.svg" altText="파일 업로드" />
            <Button label="보내기" style="solid" />
        </div>
    )
}

export default CommentBar;