import React, {PureComponent} from 'react';
import PropTypes  from 'prop-types';
import Car from './car';
import Modal from '../modal/modal';

import './cars.css'

class Cars extends PureComponent{

    constructor(props){
        super(props);
        this.state={
            isActive:false,
            carStats:null,
        }
    }

    handleClose = () => {
        this.setState({isActive:false})
    }
    
    handleCarClick = (carStats) => {
        this.setState({
            carStats,
            isActive:true
        })
    }

    handleSubmit = () => {
        console.log("pressed in modal")
    }

    mapCars = () => (
        this.props.objects.map( car => <Car handleClick={this.handleCarClick} key={car.id} carStats={car}/>)
    )

    render(){
        return(
            <div className="cars">
                {this.mapCars()}
                <Modal 
                    {...this.state}
                    handleClose={this.handleClose}
                />
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