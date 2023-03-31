const index = () => {
  return (
    <>
      <form action="">
        <h3>Add the new task a your list!</h3>
        <div className="form-group">
          <label htmlFor="">Task Name</label>
          <input type="text" placeholder="Make a new dasboard panel" />
          <button type="submit">Create Task</button>
        </div>
      </form>
    </>
  );
}

export default index;