import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    const handleDeleteClick = () => onDelete(book.id);
    const handleEditClick = () => setShowEdit(!showEdit);
    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    let content = <h3>{book.title}</h3>;

    if (showEdit) content = <BookEdit onSubmit={handleSubmit} book={book} />;

    return (
        <div className='col'>
            <div className='card border border-secondary-subtle shadow-lg mb-4'>
                <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
                <div className='my-5'>{content}</div>
                <div>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={handleDeleteClick}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default BookShow;
