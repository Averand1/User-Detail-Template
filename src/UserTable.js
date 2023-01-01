import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import React from "react";

function UserTable({ users, expandedRows, setExpandedRows, openModal }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell
            style={{
              fontWeight: "bold",
              backgroundColor: "lightblue",
              outlineStyle: "auto"
            }}
          >
            Name
          </TableCell>
          <TableCell
            style={{
              fontWeight: "bold",
              backgroundColor: "lightblue",
              outlineStyle: "auto"
            }}
          >
            Username
          </TableCell>
          <TableCell
            style={{
              fontWeight: "bold",
              backgroundColor: "lightblue",
              outlineStyle: "auto"
            }}
          >
            Gender
          </TableCell>
          <TableCell
            style={{
              fontWeight: "bold",
              backgroundColor: "lightblue",
              outlineStyle: "auto"
            }}
          >
            Avatar
          </TableCell>
          <TableCell
            style={{
              fontWeight: "bold",
              backgroundColor: "lightblue",
              outlineStyle: "auto"
            }}
          >
            Additional Detail
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <TableRow
              expandable={true.toString()}
              onClick={() =>
                setExpandedRows((prevExpandedRows) => {
                  if (prevExpandedRows.includes(user.id)) {
                    return prevExpandedRows.filter((id) => id !== user.id);
                  } else {
                    return [...prevExpandedRows, user.id];
                  }
                })
              }
            >
              <TableCell>{user.first_name + " " + user.last_name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>
                <img src={user.avatar} alt="avatar" height="30" width="30" />
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => openModal(user)}>
                  Show Details
                </Button>
              </TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
}

export { UserTable };
