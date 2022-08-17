import { useState } from "react";

const feed = () => {
    const [feed, setFeed] = useState([]);

    const getFeedData = async () => {
        const response = await fetch("/api/data/feed");
        const data = await response.json();
        setFeed(data);
    }

    return (
        <div>
            <h1>Feed</h1>
        </div>
    );
};
export default feed;
