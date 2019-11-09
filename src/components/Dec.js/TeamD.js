import React, { Component } from 'react';


class TeamD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: '',
    };
  }

  onSubmit(index) {
    this.props.winTeam(this.props.club, this.props.index);
    this.props.changeModal('ConfirmModal');
    if ((index === 0 || index === 1) && this.props.nextTeam) {
      this.setState({
        mode: 'btn1',
      });
    } else if ((index === 2 || index === 3) && this.props.nextTeam2) {
      this.setState({
        mode: 'btn2',
      });
    }
  }

  isDisabled(index) {
    if ((index === 0 || index === 1) && this.state.mode === 'btn1') {
      return true;
    } if ((index === 2 || index === 3) && this.state.mode === 'btn2') {
      return true;
    } return false;
  }


  render() {
    return (
      <div>
        <button
          type="button"
          className="positionD"
          onClick={() => this.onSubmit(this.props.index)}
          disabled={this.isDisabled(this.props.index)}
        >
          {this.props.club.title}
        </button>
        {Number(this.props.index) % 2 === 0
          && (
            <div className="line" />
          )}

        {
          Number(this.props.index) % 2 !== 0
          && (
            <div className="line2" />
          )
        }
      </div>

    );
  }
}

export default (TeamD);
