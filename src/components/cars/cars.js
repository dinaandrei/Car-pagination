import React, {Component} from 'react';
import PropTypes  from 'prop-types';
import Car from './car';

import './cars.css'

class Cars extends Component{

    mapCars = () => (
        this.props.objects.map( car => <Car key={car.id} carStats={car}/>)
    )

    render(){
        return(
            <div className="cars">
                {this.mapCars()}
            </div>
        );
    }
}

Cars.propTypes = {
    objects: PropTypes.array,
};
Cars.defaultProps = {
    objects: [],
}

export default Cars;