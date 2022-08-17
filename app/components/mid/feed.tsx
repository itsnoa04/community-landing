import axios from "axios";
import { useEffect, useState } from "react";
import feedSchema from "../../schema/feed";
import FeedItem from "./feedItem";

const Feed = () => {
  const [feed, setFeed] = useState<feedSchema[]>([]);

  useEffect(() => {
    axios.get("/api/feed").then((res) => {
      setFeed(res.data);
    });
  }, []);

  return (
    <>
      {feed.map((item) => {
        return (
          <FeedItem
            key={item?.id}
            author={item?.author}
            authorImage={item?.authorImg}
            title={item?.title}
            groupName={item?.group?.name}
            groupColor={item?.group?.color}
            groupTextColor={item?.group?.textColor}
          />
        );
      })}
    </>
  );
};
export default Feed;
