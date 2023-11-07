import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:5000/books');

        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:5000/books/${id}`, { title: newTitle });
        const updatedBooks = books.map(book => {
            if (book.id === id) return { ...book, ...response.data };

            return book;
        });

        setBooks(updatedBooks);
    };

    const deleteBookById = async id => {
        await axios.delete(`http://localhost:5000/books/${id}`);

        const updatedBooks = books.filter((book) => book.id !== id);

        setBooks(updatedBooks);
    };

    const createBook = async title => {
        const response = await axios.post('http://localhost:5000/books', { title });
        const updatedBooks = [...books, response.data];

        setBooks(updatedBooks);
    };

    return (
        <div >
            <h1 className='display-1 fw-bold'>Reading List</h1>
            <div className='d-flex flex-column flex-lg-row gap-5'>
                <BookCreate onCreate={createBook} />
                <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
            </div>
        </div>
    );
}

export default App;
