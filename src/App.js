import "./styles.css";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { UserModal } from "./UserModal";
import { UserTable } from "./UserTable";

function App() {
  const [users, setUsers] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const RandomUsers = async () => {
    return await axios
      .get("https://random-data-api.com/api/v2/users?size=20")
      .then((response) => setUsers(response.data));
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    RandomUsers();
  }, []);
  return (
    <div className="App">
      <UserTable
        users={users}
        expandedRows={expandedRows}
        setExpandedRows={setExpandedRows}
        openModal={openModal}
      />
      <UserModal
        modalOpen={modalOpen}
        selectedUser={selectedUser}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
