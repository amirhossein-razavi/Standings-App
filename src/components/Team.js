import React, { Component } from 'react';

class Team extends Component {
  render() {

    const { item , teams , deleteTeam , editTeam} = this.props;

    return (
      <tr className="table-striped tdColor">
        <td>{teams.length - item.index}</td>
        <td>{item.title} ({item.username})</td>
        <td>{item.GF}</td>
        <td>{item.GA}</td>
        <td>{item.GD}</td>
        <td>{item.Pts}</td>
        <td>
          <a
            href="#"
            onClick={() => deleteTeam(item.id)}
          >
            <i className="fa fa-trash fa-lg sarb" />
          </a>
          <a
            href="#"
            onClick={() => editTeam(item)}
          >
            <i className="fa fa-edit fa-lg sarb"/>
          </a>
        </td>
      </tr>
    )
  }
}

export default (Team);