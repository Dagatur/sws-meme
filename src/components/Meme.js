import React, { useState } from 'react'

function Meme({ meme, onVote }) {
    const [upvotes, setUpvotes] = useState(meme.upvotes);
    const [downvotes, setDownvotes] = useState(meme.downvotes);
    const [starred, setStarred] = useState(meme.starred);

    const handleUpvote = () => {
        setUpvotes(upvotes + 1);
        onVote(meme.title, upvotes + 1, downvotes);
    };

    const handleDownvote = () => {
        setDownvotes(downvotes + 1);
        onVote(meme.title,upvotes, downvotes + 1);
    };
    
    const handleStar = () => {
        setStarred(!starred);
    };

    return (
        <div className='meme'>
            <h2>{meme.title}</h2>
            <img src={meme.img} alt={meme.title} />
            <div id='votes-box'>
                <div class='vote'>Upvotes: {upvotes}</div>
                <div class='vote'>Downvote: {downvotes}</div>
            </div>
            <div>
                <button onClick={handleUpvote}>Upvote</button>
                <button onClick={handleDownvote}>Downvote</button>
                <button onClick={handleStar}>{starred ? 'Unstar' : 'Star'}</button>
            </div>
        </div>
    );
}

export default Meme;