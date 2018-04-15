import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get("https://swapi.co/api/people/").then(response => {
            this.setState({ people: response.data.results });
        });
    }

    render() {
        const peopleComponent = this.state.people.map((person, i) => {
            return (
                <div>
                    <Link to={`/personDetails/${i + 1}`}>{person.name}</Link>
                </div>
            )
        });

        return (
            <div>
                {peopleComponent}
            </div>
        )
    }
}

export default PeopleList;