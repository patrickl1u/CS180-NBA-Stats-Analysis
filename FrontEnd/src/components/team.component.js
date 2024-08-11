import React, {Component} from "react";
import teamDataService from "../services/team.service";

export default class team extends Component {
    constructor(props) {
        super(props);
        this.onChangeNickname = this.onChangeNickname.bind(this);
        this.onChangeAbbreviation = this.onChangeAbbreviation.bind(this);

        this.getteam = this.getteam.bind(this);
        this.updateteam = this.updateteam.bind(this);
        this.deleteteam = this.deleteteam.bind(this);

        this.state = {
            currentteam: {
                team_id: null,
                nickname: "",
                abbreviation: "",
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getteam(this.props.match.params.id);
    }

    onChangeNickname(e) {
        const nickname = e.target.value;

        this.setState(function (prevState) {
            return {
                currentteam: {
                    ...prevState.currentteam,
                    nickname: nickname
                }
            };
        });
    }

    onChangeAbbreviation(e) {
        const description = e.target.value;

        this.setState(prevState => ({
            currentteam: {
                ...prevState.currentteam,

            }
        }));
    }

    getteam(id) {
        teamDataService.get(id)
            .then(response => {
                this.setState({
                    currentteam: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    updateteam() {
        teamDataService.update(
            this.state.currentteam.id,
            this.state.currentteam
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The team was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteteam() {
        teamDataService.delete(this.state.currentteam.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/teams')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const {currentteam} = this.state;

        return (
            <div>
                {currentteam ? (
                    <div className="edit-form">
                        <h4>Team Details</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Nickname</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nickname"
                                    value={currentteam.nickname}
                                    onChange={this.onChangeNickname}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Abbreviation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="abbreviation"
                                    value={currentteam.abbreviation}
                                    onChange={this.onChangeAbbreviation}
                                />
                            </div>

                        </form>


                        <button
                            className="badge badge-danger mr-2"
                            onClick={this.deleteteam}
                        >
                            Delete
                        </button>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateteam}
                        >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br/>
                        <p>Please click on a team...</p>
                    </div>
                )}
            </div>
        );
    }
}
