import React from 'react';
import faker from 'faker';

const CommentDetail = ({ author, timeAgo, content, avatarUrl }) => {
    return (
        <div className="comment">
            <a className="avatar">
                <img alt="avatar" src={avatarUrl} />
            </a>
            <div className="content">
                <a className="author">{author}</a>
                <div className="metadata">
                    <span className="date">{timeAgo}</span>
                </div>
                <div className="text">
                    {content}
                </div>
                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;
