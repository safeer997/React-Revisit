function Todoitem1() {
  let todoName = "Buy Milk";
  let todoDate = "23/09/24";
  return (
    <div class="container ">
      <div class="row safeer-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger safeer-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem1;
