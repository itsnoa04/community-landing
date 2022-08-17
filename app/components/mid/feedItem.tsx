import { GroupTagProps } from "./groupTag";

export interface FeedItemProps {
    key: string;
    author: string;
    title: string;
    groups: GroupTagProps[];
}
const FeedItem = ({ key, author, title, groups }: FeedItemProps) => {
    <div>
        <h1>{title}</h1>
    </div>
}
export default FeedItem