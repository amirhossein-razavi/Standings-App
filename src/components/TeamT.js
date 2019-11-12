import React, { Component } from 'react';


class TeamT extends Component {
  onSubmit() {
    this.props.winTeam(this.props.club, this.props.index);
    this.props.changeModal('ConfirmModal');
  }


  render() {
    return (

      <div>
        <button type="button" className="position1" onClick={() => this.onSubmit()}>
          {this.props.club.title}
        </button>
        {Number(this.props.index) % 2 === 0
          && <div className="line" />}

        {Number(this.props.index) % 2 !== 0
          && <div className="line2" />}
      </div>

    );
  }
}

export default (TeamT);
