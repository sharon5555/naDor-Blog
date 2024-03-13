import { useState } from "react";

const Create = () => {
    const [title, setTitle ] = useState('');
    const [body, setBody ] = useState('');
    const [author, setAuthor ] = useState('sharon');

    return (
        <div className="create">
        <h2>Add a New Blog</h2>
        <form>
        <label>Blog title:</label>
        <input
        type="text"
        required
        value={ title }
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea 
        required
        value={ body }
        onChange={(e) => setBody(e.target.value)}>
        </textarea>
        <label>Blog author:</label>
        <select 
        value={ author } 
        onChange={(e) => setAuthor(e.target.value)}
        >
        <option value="naDor">Sharon</option>
        <option value="pretty">Pearl</option>
        <option value="tina">Destiny</option>
        </select>
        <button>Add Blog</button>
        <p>{ title }</p>
        <p>{ body }</p>
        <p>{ author }</p>
        </form>
        </div>
    );
}

export default Create;