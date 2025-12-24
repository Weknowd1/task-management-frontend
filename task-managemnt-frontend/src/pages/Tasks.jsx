import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";
import AddTaskModal from "../components/AddTaskModal";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const load = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <DashboardLayout>
      <div className="task-header">
        <h2>Tasks Management</h2>
        <button onClick={() => setShowModal(true)}>+ Add Task</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Task</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t, i) => (
            <tr key={t._id}>
              <td>{i + 1}</td>
              <td>{t.taskName}</td>
              <td>{t.description}</td>
              <td>⋮</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <AddTaskModal
          onClose={() => setShowModal(false)}
          refresh={load}
        />
      )}
    </DashboardLayout>
  );
};

export default Tasks;
