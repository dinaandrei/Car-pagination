import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import logo  from '../../car.jpg';

class Car extends PureComponent {

    definitor = () => {
        const stats = Object.entries(this.props.carStats);
        return stats.map(element => 
            element[0] !== 'name' && element[0] !== 'id' && element[0] !== 'resource_uri' &&
            <div key={`${element[0]}pa${element[1]}nt${this.props.carStats.id}`} className={`element`}>
                <span style={{ fontWeight: 'bold' }}> {element[0]} </span> 
                : 
                {element[1]}
            </div>
        )
    }

    handleClick = () => {
        this.props.handleClick(this.props.carStats);
    }

    render = () => (
        <div onClick={this.handleClick} className="car">
            <img className="car__img" src={logo} alt="unavailable_image"/>
            <div className="car__content">
                <h2>{this.props.carStats.name}</h2>
                <div className="car__stats">
                    {this.definitor()}
                </div>
            </div>
        </div>
    )
};

Car.propTypes = {
    carStats: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
};
Car.defaultProps = {
    carStats: {
        acceleration: 'unavailable',
        cylinders: 'unavailable',
        displacement: 'unavailable',
        horsepower: 'unavailable',
        id: 'unavailable',
        mpg: 'unavailable',
        name: 'unavailable',
        weight: 'unavailable',
        year: 'unavailable',
    },
    handleClick:() => {}
}

export default Car;