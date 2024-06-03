import React, { useState } from 'react'
import '../styles/meme.css';

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
            <div className='votes-box'>
                <button className='vote' onClick={handleUpvote}><i class="fa-solid fa-thumbs-up"></i></button>
                <div className='vote'>{upvotes}</div>
                <button className='vote' onClick={handleDownvote}><i class="fa-solid fa-thumbs-down"></i></button>
                <div className='vote'>{downvotes}</div>
                <button onClick={handleStar} className="star-button"><i className={starred ? 'fas fa-star' : 'far fa-star'}></i></button>
            </div>
        </div>
    );
}

export default Meme;