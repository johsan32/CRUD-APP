const DeleteModal = (props) => {


    return (
        <div className="modal">
            <div class="card w-75 mb-3 bg-transparent border">
                <div class="card-body modal-info">
                    <h5 class="card-title">Name</h5>
                    <p class="card-text">Eklediğiniz kitabı silmek istiyor musunuz?</p>
                    <button 
                    onClick={props.handleDelete}
                    className="btn btn-danger"                    
                    >Sil
                    </button>
                    <button 
                    onClick={() => props.setShowDeleteModal(false)}
                    className="btn btn-warning">Vazgeç</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;