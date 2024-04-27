function Todoitem2(){

  let todoName = "Learn react";
  let todoDate = "29/12/24";

  return  <div class="container ">
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
}
export default Todoitem2;