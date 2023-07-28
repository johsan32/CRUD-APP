
import { useState } from 'react';
import { v4 as id } from 'uuid';
import BookList from './BookList';
import { toast } from 'react-toastify';

const Card = () => {

    const [bookData, setBookData] = useState([]);
    const [bookName, setBookName] = useState("");
    const [bookInfo, setBookInfo] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt, ligula sit amet gravida varius.");


    const handleChange = (e) => {
        setBookName(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bookName) {
         toast.error("Lütfen bir kitap ekleyiniz", { autoClose: 2000, position: "top-center", theme: "colored"});
         return;
        }
        const newBook ={
            id:id(),
            name:bookName,
            date:new Date().toLocaleString(),
            read:false,
            info:bookInfo,
            favorite: false,
        }
       //console.log(newBook)
        setBookData([...bookData, newBook]);
        setBookName("");
        setBookInfo(bookInfo);
        
        toast.success("Kitap okuma listenize eklendi", { autoClose: 2000, position: "top-center", theme: "colored"});

    };

    
    return ( 
        <div className="container">
            <form onSubmit={handleSubmit} className="mt-4 d-flex align-items-center justify-content-center">
                <input type="text"  
                className="form-control w-50"
                placeholder='Bir kitap adı giriniz....'
                value={bookName}
                onChange={handleChange}
                
                                
                />
                <button className="btn btn-primary ms-2">Ekle</button>
                {/* {addError &&(
                    <div className="alert">{addError}</div>
                ) } */}
            </form>
            <div className="container mb-5">
                {bookData.length === 0 && (
                <div className='mt-4'>
                    <h5>Herhangi bir kitap eklenmedi.</h5> 
                </div>
                )}
                {<BookList 
                bookData={bookData}
                setBookData={setBookData}
                />}
            </div>
        </div>
    );
}
 
export default Card;