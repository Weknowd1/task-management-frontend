// import { useState } from "react";
// import api from "../services/api";
// import "../styles/modal.css";

// const AddTaskModal = ({ onClose, refresh }) => {
//   const [taskName, setTaskName] = useState("");
//   const [description, setDescription] = useState("");

//   const save = async () => {
//     await api.post("/tasks", { taskName, description });
//     refresh();
//     onClose();
//   };

//   return (
//     <div className="modal-bg">
//       <div className="modal">
//         <h3>Add Task</h3>
//         <input placeholder="Task Name" onChange={(e) => setTaskName(e.target.value)} />
//         <input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
//         <button onClick={save}>Save</button>
//         <p onClick={onClose}>Cancel</p>
//       </div>
//     </div>
//   );
// };

// export default AddTaskModal;

import { useState } from "react";
import api from "../services/api";
import "../styles/modal.css";

const AddTaskModal = ({ onClose, refresh }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const save = async () => {
    await api.post("/tasks", { taskName, description });
    refresh();
    onClose();
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <h3>Add Task</h3>

        <input
          placeholder="Task Name"
          onChange={(e) => setTaskName(e.target.value)}
        />

        <input
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={save}>Save</button>
        <p onClick={onClose}>Cancel</p>
      </div>
    </div>
  );
};

export default AddTaskModal;
