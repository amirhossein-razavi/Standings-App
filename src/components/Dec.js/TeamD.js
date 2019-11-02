import React, { Component } from 'react';


class TeamD extends Component {

    onSubmit() {
        this.props.winTeam(this.props.club, this.props.index);
        this.props.changeModal("ConfirmModal");
    }
    

    render() {
        return (

            <div>
                <div href='#' className="positionD" onClick={() => this.onSubmit()}> {this.props.club.title} </div>
                {Number(this.props.index) % 2 === 0 &&
                    <div className="line">

                    </div>
                }

                {Number(this.props.index) % 2 !== 0 &&
                    <div className="line2">

                    </div>
                }
            </div>

        )
    }
}

export default (TeamD);

