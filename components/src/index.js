import ReactDOM from 'react-dom'
import React from 'react';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';
import CommentDetail from './components/CommentDetail';



const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    avatarUrl={faker.image.avatar()}
                    content={faker.random.words(3)}
                    author={faker.name.firstName()}
                    timeAgo={`Today at ${faker.date.recent(0).getHours()}:${faker.date.recent(0).getMinutes()}`} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatarUrl={faker.image.avatar()}
                    content={faker.random.words(3)}
                    author={faker.name.firstName()}
                    timeAgo={`Today at ${faker.date.recent(0).getHours()}:${faker.date.recent(0).getMinutes()}`} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatarUrl={faker.image.avatar()}
                    content={faker.random.words(3)}
                    author={faker.name.firstName()}
                    timeAgo={`Today at ${faker.date.recent(0).getHours()}:${faker.date.recent(0).getMinutes()}`} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatarUrl={faker.image.avatar()}
                    content={faker.random.words(3)}
                    author={faker.name.firstName()}
                    timeAgo={`Today at ${faker.date.recent(0).getHours()}:${faker.date.recent(0).getMinutes()}`} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatarUrl={faker.image.avatar()}
                    content={faker.random.words(3)}
                    author={faker.name.firstName()}
                    timeAgo={`Today at ${faker.date.recent(0).getHours()}:${faker.date.recent(0).getMinutes()}`} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />, document.querySelector('#root')
);