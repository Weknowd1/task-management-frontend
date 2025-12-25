

import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import AddTaskModal from "../components/AddTaskModal";
import EditTaskModal from "../components/EditTaskModal";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const load = async () => {
    // const res = await api.get("/tasks");
    const res = await api.get("/api/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const deleteTask = async (id) => {
    const ok = window.confirm("Are you sure you want to delete this task?");
    if (!ok) return;

    // await api.delete(`/tasks/${id}`);
    await api.delete(`/api/tasks/${id}`);
    load();
  };

  return (
    <DashboardLayout>
     <div className="task-header">
  <h2>Tasks Management</h2>

  <div style={{ display: "flex", gap: "10px" }}>
    <button onClick={() => setShowAddModal(true)}>
      + Add Task
    </button>

    <button
      style={{ background: "#555" }}
      onClick={() => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        window.location.href = "/login";
      }}
    >
      Sign Out
    </button>
  </div>
</div>


      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Task</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((t, i) => (
            <tr key={t._id}>
              <td>{i + 1}</td>
              <td>{t.taskName}</td>
              <td>{t.description}</td>
              <td className="task-actions">
                <button
                  className="edit-btn"
                  onClick={() => setEditTask(t)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(t._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddModal && (
        <AddTaskModal
          onClose={() => setShowAddModal(false)}
          refresh={load}
        />
      )}

      {editTask && (
        <EditTaskModal
          task={editTask}
          onClose={() => setEditTask(null)}
          refresh={load}
        />
      )}
    </DashboardLayout>
  );
};

export default Tasks;
