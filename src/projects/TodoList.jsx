import { MDBBtn } from "mdb-react-ui-kit";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "../assets/style.css";

import { useState } from "react";

const TodoList = ({
  id,
  data,
  checked,
  onDeleteTask,
  onHandleCheckTodo,
  onEditTask,
}) => {
  //   const editTask = (index) => {
  //     console.log(index);
  //   };

  // State to track whether the task is being edited
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(data);

  // Function to handle editing
  const editTask = () => {
    setIsEditing(true); // Enable editing mode
  };

  // Function to save the edited task
  const saveEditedTask = () => {
    onEditTask(editedContent, id); // Pass the edited content and index to the parent
    setIsEditing(false); // Disable editing mode
  };

  return (
    <>
      <tr>
        <th scope="row">{id}</th>

        <td className={checked ? "task-done" : ""}>
          {isEditing ? (
            <input
              type="text"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            data
          )}
        </td>




        {/* <td className={checked ? "task-done" : ""}>{data}</td> */}

        <td>{checked ? "finished" : "In progress"}</td>


        <td className="d-flex">
          <MDBBtn
            type="submit"
            color="danger"
            onClick={() => onDeleteTask(data)}
          >
            Delete
          </MDBBtn>

          {/* <MDBBtn
            type="submit"
            color="primary"
            className="ms-1"
            onClick={() => editTask(data)}
          >
            Edit
          </MDBBtn> */}







          {/* Edit/Save Button */}
          {isEditing ? (
            <MDBBtn
              type="submit"
              color="primary"
              className="ms-1"
              onClick={saveEditedTask}
            >
              Save
            </MDBBtn>
          ) : (
            <MDBBtn
              type="submit"
              color="primary"
              className="ms-1"
              onClick={editTask}
            >
              Edit
            </MDBBtn>
          )}

















          <MDBBtn
            type="click"
            color="success"
            className="ms-1"
            onClick={() => onHandleCheckTodo(data)}
          >
            Finished
          </MDBBtn>
        </td>
      </tr>
    </>
  );
};

export default TodoList;
