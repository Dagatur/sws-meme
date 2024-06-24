import React from 'react'
import '../styles/meme.css';

function Meme({ meme, onVote, }) {

    const handleUpvote = () => {
        onVote({ ...meme, upvotes: meme.upvotes + 1 });
      };
    
      const handleDownvote = () => {
        onVote({ ...meme, downvotes: meme.downvotes + 1 });
      };
    
    const handleStar = () => {
        onVote({ ...meme, starred: !meme.starred });
    };

    return (
        <div className='meme'>
            <h2>{meme.title}</h2>
            <img src={meme.img} alt={meme.title} />
            <div className='votes-box'>
                <button className='vote' onClick={handleUpvote}><i class="fa-solid fa-thumbs-up"></i></button>
                <div className='vote'>{meme.upvotes}</div>
                <button className='vote' onClick={handleDownvote}><i class="fa-solid fa-thumbs-down"></i></button>
                <div className='vote'>{meme.downvotes}</div>
                <button onClick={handleStar} className="star-button"><i className={meme.starred ? 'fas fa-star' : 'far fa-star'}></i></button>
            </div>
        </div>
    );
}

export default Meme;