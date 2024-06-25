import React, {useState} from 'react';
import '../styles/addMeme.css';

const AddMeme = ({memes, setMemes}) => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = Math.max(...memes.map(meme => meme.id)) + 1
        const newMeme = { id: newId ,title, upvotes: 0, downvotes: 0, img, starred: false};
        
        if (title && img) {
            setMemes((previousState)=>([...previousState, newMeme]));
            setTitle('');
            setImg('');
            alert("Meme added successfully!");
        }
    };

    return (
        <div className='container'>
        <form className='add-meme-form' onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div>
                <label>Img url: </label>
                <input type='text' value={img} onChange={(e) => setImg(e.target.value)} required/>
            </div>
            <button type='submit'>Add Meme</button>
        </form>
        </div>
    );
};

export default AddMeme;