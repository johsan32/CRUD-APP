
const EditModal = (props) => {

    
    return (
        <div class="card mb-3 modal">
            <div class="card-body modal-info">
                <h5 class="card-title">{props.editBook.name.toUpperCase()}' <span className="fw-light">adlı kitabın içeriğini düzenliyorsunuz.</span> </h5>
                <input type="text" 
                className="form-control"
                value= {props.editBook.name}
                onChange={(e) => props.setEditBook({...props.editBook, name: e.target.value})}
                />

                <textarea type="text" 
                className="form-control"
                style={{height:"100px"}}
                value= {props.editBook.info}
                onChange={(e) => props.setEditBook({...props.editBook, info: e.target.value})}
                />
                <button className="btn btn-danger"
                onClick={props.handleEditBook} 
                >Kaydet</button>
                <button 
                    onClick={() => props.setShowEditModal(false)}
                    className="btn btn-warning">Vazgeç</button>
            </div>
        </div>
    );
}

export default EditModal;