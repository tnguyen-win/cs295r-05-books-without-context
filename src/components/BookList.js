import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
    const renderedBooks = books.map(book => <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />);

    return <div className='row row-cols-1 row-cols-lg-2 my-lg-5'>{renderedBooks}</div>;
};

export default BookList;
