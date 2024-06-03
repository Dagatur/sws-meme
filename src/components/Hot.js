import React, { useState, useEffect } from 'react';
import Meme from './meme';
import memeData from '../data/memeData';

function Hot() {
    const [memes, setMemes] = useState(memeData);

    useEffect(() => {
        const filteredMemes = memeData.filter(meme => (meme.upvotes - meme.downvotes) > 5);
        setMemes(filteredMemes);
    }, []);

    const handleVote = (title, upvotes, downvotes) => {
        const updatedMemes = memes.map(meme =>
            meme.title === title ? {...meme, upvotes, downvotes} : meme
        ).filter(meme => (meme.upvotes - meme.downvotes) > 5);
        setMemes(updatedMemes);
    };

    return (
        <div>
            {memes.map(meme => (
                <Meme key={meme.title} meme={meme} onVote={handleVote} />
            ))}
        </div>
    );
}

export default Hot;