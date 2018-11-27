import React from 'react';

class CarEit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: null
        }
    }

    componentDidMount() {
        const form = { ...this.props.carStats }
        this.setState({ form });
    }

    handleChange = (event) => {
        const formCopy = this.state.form;
        formCopy[event.target.name] = event.target.value;
        this.setState(() => ({ form: formCopy }));
    }

    mapStats = () => (
        this.state.form &&
        Object.entries(this.state.form).map(stats => 
            stats[0] !== 'resource_uri' && stats[0] !== 'id' && 
            <div className="row">
                <p>
                    {stats[0]}
                </p>
                <textarea
                    value={this.state.form[stats[0]]}
                    onChange={this.handleChange}
                    rows="2"
                    cols="50"
                    name={stats[0]}
                >
                    {stats[1]}
                </textarea>
            </div>
        )
    )

    handleSubmit = () => {
        this.props.handleSubmit(this.state.form);
    }

    render() {
        return (
            <div className="car-edit">
                {this.mapStats()}
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default CarEit;