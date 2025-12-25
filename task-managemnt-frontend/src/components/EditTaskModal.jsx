import { useState } from "react";
import api from "../services/api";
import "../styles/modal.css";

const EditTaskModal = ({ task, onClose, refresh }) => {
  const [taskName, setTaskName] = useState(task.taskName);
  const [description, setDescription] = useState(task.description);

  const update = async () => {
    // await api.put(`/tasks/${task._id}`, { taskName, description });
    await api.put(`/api/tasks/${task._id}`, { taskName, description });
    refresh();
    onClose();
  };

  return (
    <div className="modal-bg">
      <div className="modal">
        <h3>Edit Task</h3>

        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={update}>Update</button>
        <p onClick={onClose}>Cancel</p>
      </div>
    </div>
  );
};

export default EditTaskModal;
