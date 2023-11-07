import { useState } from 'react';

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const handleChange = event => setTitle(event.target.value);
    const handleSubmit = event => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return (
        <div>
            <h3 className='display-5 mt-5 mt-lg-0 mb-3'>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <span className='input-group-text border-secondary-subtle'>Title</span>
                    <input className='form-control' value={title} onChange={handleChange} />
                    <button className='input-group-text btn btn-success success border-secondary-subtle'>Create</button>
                </div>
            </form>
        </div>
    );
}

export default BookCreate;
