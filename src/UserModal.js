import {
  Modal,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button
} from "@material-ui/core";
import React from "react";

function UserModal({ modalOpen, selectedUser, closeModal }) {
  return (
    <Modal open={modalOpen} onClose={closeModal}>
      <div
        style={{
          padding: 20,
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "30em",
          height: "18em",
          marginTop: "-9em",
          marginLeft: "-15em",
          border: "1px solid #ccc",
          backgroundColor: "lightgreen"
        }}
      >
        <div style={{ position: "relative" }}>
          <Button
            style={{
              backgroundColor: "whitesmoke",
              position: "absolute",
              top: 0,
              right: 0
            }}
            onClick={closeModal}
          >
            X
          </Button>
        </div>
        <Table>
          <TableBody>
            {selectedUser ? (
              <React.Fragment>
                <TableRow>
                  <TableCell style={{ background: "#75e6da" }}>Name</TableCell>
                  <TableCell style={{ background: "#75e6da" }}>
                    {selectedUser.first_name} {selectedUser.last_name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "#75e6da" }}>
                    Username
                  </TableCell>
                  <TableCell style={{ background: "#75e6da" }}>
                    {selectedUser.username}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "#75e6da" }}>
                    Address
                  </TableCell>
                  <TableCell style={{ background: "#75e6da" }}>
                    {selectedUser.address["street_address"]},{" "}
                    {selectedUser.address["street_name"]},
                    {selectedUser.address["city"]}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "#75e6da" }}>
                    Employment Title and Skill
                  </TableCell>
                  <TableCell style={{ background: "#75e6da" }}>
                    {selectedUser.employment["title"]}
                    <br />
                    {selectedUser.employment["key_skill"]}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ background: "#75e6da" }}>
                    Credit Card Number
                  </TableCell>
                  <TableCell style={{ background: "#75e6da" }}>
                    {selectedUser.credit_card["cc_number"]}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ) : (
              <p>No user selected</p>
            )}
          </TableBody>
        </Table>
      </div>
    </Modal>
  );
}

export { UserModal };
