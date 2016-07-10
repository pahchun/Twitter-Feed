import React from 'react';
import Tweet from './Tweet';

const TwitterFeed = props => {
  let tweets = props.data.map(tweet =>{

    let handleReply = () => alert('reply');
    let handleRetweet = () => alert('retweet');
    let handleLike = () => alert('like');
    let handleMore = () => alert('favorite');

    let tweetImg;
    let tweetImageDisplay;
    let tweetText = tweet.text;


    if (Object.getOwnPropertyNames(tweet.entities).length > 0){
      tweetImg = tweet.entities.media[0].media_url;
      tweetImageDisplay = tweet.entities.media[0].display_url;
      tweetText = tweetText.replace(` ${tweetImageDisplay}`,'');
    }

      return(
        <Tweet
          key = {tweet.id_str}
          text = {tweet.text}
          userName = {tweet.user.name}
          screenName = {tweet.user.screen_name}
          profileImg = {tweet.user.profile_image_url}
          retweetCount = {tweet.retweet_count}
          favoriteCount = {tweet.favorite_count}
          favorited = {tweet.favorited}
          retweeted = {tweet.retweeted}
          timestamp = {Date.parse(tweet.timestamp_ms*1000)}
          tweetImgUrl = {tweetImg}
          tweetImgText = {tweetImageDisplay}
          handleReply = {handleReply}
          handleRetweet = {handleRetweet}
          handleLike = {handleLike}
          handleMore = {handleMore}
        />
      );
    });

    return (
      <ul>
        {tweets}
      </ul>
    );
};
export default TwitterFeed;
