import React from 'react';
import { useState } from 'react';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookList = (props) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [editBook, setEditBook] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false)


    const handleDeleteModal = (id) => {
        //console.log(id);
        setDeleteId(id)

        setShowDeleteModal(true);
    };

    const handleDelete = () => {
        const filter = props.bookData.filter((book) => book.id !== deleteId);
        //console.log(filter);
        setShowDeleteModal(false);
        props.setBookData(filter)

        
        toast.warning("Kitabı listeden sildiniz..", { autoClose: 2000, position: "top-center", theme: "colored"});
    }   
    const handleEditModal = (book) => {
        //console.log(book);
        setEditBook(book)
        setShowEditModal(true);
    };
    const handleEditBook = () => {
        const editId= props.bookData.findIndex((book) => book.id === editBook.id);
        const cloneEditBook = [...props.bookData]
        cloneEditBook.splice(editId, 1, editBook)

       props.setBookData(cloneEditBook);
       setShowEditModal(false)
       toast.info("Kitap içeriğini güncellediniz...", { autoClose: 2000, position: "top-center", theme: "light"});
       
    }

    const handleRead = (book) => {
        //console.log(book);
        const updateRead = {...book, read: !book.read}
        //console.log(updateRead);

        const index =props.bookData.findIndex((item) => item.id === book.id);
        //console.log(index);

        const cloneData = [...props.bookData]
        cloneData[index] = updateRead;
        //console.log(updateRead);
        props.setBookData(cloneData);
        if(!book.read){
          toast.info("Kitabı okudunuz. Tebrikler..", { autoClose: 2000, position: "top-center", theme: "colored"});  
        }else{
           toast.warning("Kitabı okunanlar listesinden kaldırdınız.", { autoClose: 2000, position: "top-center", theme: "colored"});  
        }
        
    }

    const handleFavorite = (book) => {
        const updateFavorite = {...book, favorite: !book.favorite}
        const index =props.bookData.findIndex((item) => item.id === book.id);
        const cloneData = [...props.bookData]
        cloneData[index] = updateFavorite;

        props.setBookData(cloneData);
        if (!book.favorite) {
            toast.info("Kitap favorilerinize eklendi.", { autoClose: 2000, position: "top-center", theme: "colored"});
        }else{
            toast.warning("Kitap favorilerinizden kaldırıldı.", { autoClose: 2000, position: "top-center", theme: "colored"});
        }
    }
    console.log(props.bookData);

    return (
        <div className="mt-5"> 
            {props.bookData.map((book, i) => (
                <div class="card mt-2 shadow ">
                    <div 
                     className={` ${book.favorite ? "card-header d-flex align-items-center justify-content-between bg-success" 
                     : "card-header bg-secondary-subtle d-flex align-items-center justify-content-space-between"} `} key={book.id}>
                        <h6 className="text-dark">{i + 1}</h6>
                        <h6 className=""> {book.read ? `Okundu : ${new Date().toLocaleDateString()}` : ""}</h6>
                        <h6>{book.favorite ? "Favorilere Eklendi " : <i class="bi bi-chat-heart"></i>}</h6>
                    </div>
                    <div class={`"card-body d-flex align-items-center justify-content-between" ${book.read ? "bg-success-subtle text-white" : "none"}`}>
                        <div className="d-flex flex-column m-4">
                            <h5 class="card-title">{book.name.toUpperCase()}</h5>
                            <p class="card-text fs-6text-start">{book.info}</p>
                            <span className='fw-light'>{book.date}</span>
                        </div>
                        <div className="me-2">
                            <button className="btn btn-warning me-2"
                            onClick={()=>handleEditModal(book)}
                            ><i class="bi bi-pencil-square"></i></button>
                            <button 
                            onClick={()=>handleRead(book)}
                            className={` ${book.read ? "btn btn-success me-2" : "btn btn-info me-2"}`}>
                            {book.read ? <i class="bi bi-book"></i>:<i class="bi bi-book"></i>}
                            </button>
                            <button 
                            onClick={()=>handleFavorite(book)}
                            className={` ${book.favorite ? "btn btn-success me-2" : "btn btn-info me-2"}`}>
                            {book.read ? <i class="bi bi-chat-heart"></i> : <i class="bi bi-chat-heart"></i>}
                            </button>
                            <button 
                            onClick={()=> handleDeleteModal(book.id)}
                            className="btn btn-danger me-2"><i class="bi bi-trash"></i></button>
                        </div>
                    </div>
                </div>
            ))}
            {showDeleteModal && 
                <DeleteModal 
            handleDelete ={handleDelete}
            setShowDeleteModal= {setShowDeleteModal}
            
            />}
            {showEditModal&& 
            <EditModal 
            setShowEditModal={setShowEditModal}
            books={props.bookData}
            handleEditBook={handleEditBook}
            setEditBook= {setEditBook}
            editBook ={editBook}
            />
            }

            <ToastContainer />
        </div>
    );
}

export default BookList;