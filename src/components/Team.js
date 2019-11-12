import React from 'react';

const Team = ({ item, teams, deleteTeam, editTeam }) => (

  <tr className="table-striped tdColor">
    <td>{teams.length - item.index}</td>
    <td>
      {item.title}
      {' '}
      (
      {item.username}
      )
    </td>
    <td>{item.GF}</td>
    <td>{item.GA}</td>
    <td>{item.GD}</td>
    <td>{item.Pts}</td>
    <td>
      <a
        href="#"
        onClick={() => deleteTeam(item.id)}
      >
        <i className="fa fa-trash fa-lg icons" />
      </a>
      <a
        href="#"
        onClick={() => editTeam(item)}
      >
        <i className="fa fa-edit fa-lg icons" />
      </a>
    </td>
  </tr>
);

export default (Team);
