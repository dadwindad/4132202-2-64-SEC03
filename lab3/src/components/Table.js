import React from "react";

function GenTable(peoples) {
  return peoples.map((people) => {
    const { id, name: rname } = people;
    return (
      <tr>
        <td>{id}</td>
        <td>{rname}</td>
      </tr>
    );
  });
}

function DataTable() {
  const students = [
    { id: 1, name: "win" },
    { id: 2, name: "Ma" },
  ];

  return (
    <>
      <table>
        <tbody>{GenTable(students)}</tbody>
      </table>
    </>
  );
}

export default DataTable;
