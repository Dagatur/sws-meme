import React from 'react';
import Meme from './meme';

function Memes({ memes, setMemes, isHot }) {
  const filteredMemes = isHot
    ? memes.filter(meme => meme.upvotes - meme.downvotes > 5)
    : memes.filter(meme => meme.upvotes - meme.downvotes <= 5);

  const updateMeme = (updatedMeme) => { 
    setMemes(memes.map(meme => meme.id === updatedMeme.id ? updatedMeme : meme));
  };

  return (
    <div className="memes">
      {filteredMemes.map(meme => (
        <Meme key={meme.id} meme={meme} onVote={updateMeme} />
      ))}
    </div>
  );
}

export default Memes;