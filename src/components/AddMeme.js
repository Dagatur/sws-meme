import React, {useState} from 'react';

const AddMeme = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [memes, setMemes] = useState('memeData');


    const handleSubmit = (e) => {
        e.preventDefault();
        const newMeme = { title, upvotes: 0, downvotes: 0, img, starred: false};
        if (title & img) {
            onAdd({ title, img, upvotes:0, downvotes:0, starred:false});
            setTitle('');
            setImg('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div>
                <label>Img url: </label>
                <input type='text' value='img' onChange={(e) => setImg(e.target.value)} required/>
            </div>
            <button type='submit'>Add Meme</button>
        </form>
    );
};

export default AddMeme;