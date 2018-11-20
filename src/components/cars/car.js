import React from 'react';
import PropTypes from 'prop-types';
import logo  from '../../car.jpg';

const car = (props) => {

    const definitor = () => {
        const stats = Object.entries(props.carStats);
        return stats.map(element => 
            element[0] !== 'name' && element[0] !== 'id' && element[0] !== 'img' &&
            <div className={`element`}>
                <span style={{ fontWeight: 'bold' }}> {element[0]} </span> 
                : 
                {element[0]}
            </div>
        )
    }

    return (
        <div className="car">
            <img className="car__img" src={logo} alt="unavailable_image"/>
            <div className="car__content">
                <h2>{props.carStats.name}</h2>
                <div className="car__stats">
                    {definitor()}
                </div>
            </div>
        </div>
    );
};

car.propTypes = {
    carStats: PropTypes.object.isRequired,
};
car.defaultProps = {
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
        img: '../../car.jpg',
    },
}

export default car;