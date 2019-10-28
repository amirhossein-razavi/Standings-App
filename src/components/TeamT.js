import React, { Component } from 'react';


class TeamT extends Component {

    onSubmit() {
        this.props.winTeam(this.props.club, this.props.club.index);
        this.props.changeModal("ConfirmModal");
    }

    render() {
        return (

            <div>
                <div href='#' className="position1" onClick={() => this.onSubmit()}> {this.props.club.title} </div>
                {Number(this.props.club.index) % 2 === 0 &&
                    <div className="line">

                    </div>
                }

                {Number(this.props.club.index) % 2 !== 0 &&
                    <div className="line2">

                    </div>
                }
            </div>

        )
    }
}

export default (TeamT);

