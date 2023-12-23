import React, { useState } from 'react';

const Problem1 = () => {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState('all');
  const [nameInput, setNameInput] = useState('');
  const [statusInput, setStatusInput] = useState('');

  const handleClick = (val) => {
    setShow(val);
  };


// const handleSubmit = () => {
//     // e.preventDefault();
//     const name = nameInput;
//     const status = statusInput;
//     const newTask = { name, status };
//     setTasks((prevTasks) => [...prevTasks, newTask]);
//     console.log(tasks);
//     setNameInput('');
//     setStatusInput('');
//   };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const name = nameInput;
    const status = statusInput;
    const newTask = { name, status };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log(tasks);
    setNameInput('');
    setStatusInput('');
  };

  const filterTasks = () => {
    return tasks
      .filter((task) => {
        switch (show) {
          case 'all':
            return true;
          case 'active':
            return task.status === 'Active' || task.status === 'active';
          case 'completed':
            return task.status === 'Completed' || task.status === 'completed';
          default:
            return false;
        }
      })
      .sort((a, b) => {
        if ((a.status === 'Active' || a.status === 'active') && (b.status !== 'Active' || b.status !== 'active')) return -1;
        if ((a.status === 'Completed' || a.status === 'completed') && (b.status !== 'Completed' || b.status !== 'completed')) return 1;
        return 0;
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                value={statusInput}
                onChange={(e) => setStatusInput(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary"
            //   onClick={()=>handleSubmit()}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'all' && 'active'}`}
                type="button"
                onClick={() => handleClick('all')}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'active' && 'active'}`}
                type="button"
                onClick={() => handleClick('active')}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'completed' && 'active'}`}
                type="button"
                onClick={() => handleClick('completed')}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filterTasks().map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;