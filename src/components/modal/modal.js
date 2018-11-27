import React from 'react'
import Modal from 'react-responsive-modal';
import CarEdit from '../cars/car-edit';

export default class ModalCar extends React.Component {


    render() {
        return (
            <Modal open={this.props.isActive} onClose={this.props.handleClose} center>
                <CarEdit handleSubmit={this.props.handleSubmit} carStats={this.props.carStats}/>
            </Modal>
        );
    }
}