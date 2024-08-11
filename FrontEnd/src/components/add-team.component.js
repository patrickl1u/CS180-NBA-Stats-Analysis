import React, { Component } from "react";
import TeamDataService from "../services/team.service";

export default class AddTeam extends Component {
    constructor(props) {
        super(props);
        this.onChangeNickname = this.onChangeNickname.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTeam = this.saveTeam.bind(this);
        this.newTeam = this.newTeam.bind(this);

        this.state = {
            id: null,
            nickname: "",
            abbreviation: "",

            submitted: false
        };
    }

    onChangeNickname(e) {
        this.setState({
            nickname: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            abbreviation: e.target.value
        });
    }

    saveTeam() {
        var data = {
            nickname: this.state.nickname,
            abbreviation: this.state.abbreviation
        };

        TeamDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    nickname: response.data.nickname,
                    abbreviation: response.data.abbreviation,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newTeam() {
        this.setState({
            id: null,
            nickname: "",
            abbreviation: "",
            published: false,

            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newTeam}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="nickname">Nickname</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nickname"
                                required
                                value={this.state.nickname}
                                onChange={this.onChangeNickname}
                                name="nickname"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="abbreviation">Abbreviation</label>
                            <input
                                type="text"
                                className="form-control"
                                id="abbreviation"
                                required
                                value={this.state.abbreviation}
                                onChange={this.onChangeDescription}
                                name="abbreviation"
                            />
                        </div>

                        <button onClick={this.saveTeam} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
