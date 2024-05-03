function Todoitems({ passasArray, handleDeleteItem }) {
  return passasArray.map(({ name, dueDate }, index) => (
    <div key={index} className="container ">
      <div className="row safeer-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button
            onClick={() => handleDeleteItem(name)}
            type="button"
            className="btn btn-danger safeer-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ));
}
export default Todoitems;
