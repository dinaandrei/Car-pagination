import React from 'react';
import Pagination from "react-js-pagination";
import Cars from './cars/';

import "bootstrap/less/bootstrap.less";

const url = 'http://9d3034ef-c7be-4b82-bb93-3758b3df6bdb.pub.cloud.scaleway.com';

class CarController extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemsCountPerPage: 0,
            totalItemsCount: 0,
            next: null,
            previous: null,
            cars: [],
        }
    }

    componentDidMount() {
        this.fetchData('/api/v1/car/?format=json');
    }

    fetchData = (uri) => {
        fetch(`${url}${uri}`, {
            method: 'get'
        }).then(res => res.json())
            .then(response => {
                this.setState({
                    itemsCountPerPage: response.meta.limit,
                    totalItemsCount: response.meta.total_count,
                    next: response.meta.next,
                    previous: response.meta.previous,
                    cars: response.objects,
                })
            })
            .catch(error => console.error('Error:', error));
    }

    determineUri = (uri) => {
        if (uri) return uri;

        const activeOffset = (this.state.activePage - 1) * 20;

        return `/api/v1/car/?offset=${activeOffset}&limit=${this.state.itemsCountPerPage}&format=json`;
    }

    handlePageChange = (pageNumber) => {
        let quickUri = null;
        if (pageNumber === this.state.pageNumber - 1) {
            quickUri = this.props.previous;
        } else if (pageNumber === this.state.activePage + 1) {
            quickUri = this.props.next;
        }
        this.setState({ activePage: pageNumber },
            () => {
                const uri = this.determineUri(quickUri);
                this.fetchData(uri);
            }
        );
    }

    handleSubmit = (data) => {
        const uri = `${url}${data.resource_uri}`;
        console.log(uri);
        fetch(uri, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                const cars = [...this.state.cars];
                const index = cars.findIndex(car => car.id === res.id)
                if(index !== -1) cars[index]=res;
                this.setState({cars})
            });
    }


    render() {
        return (
            <div>
                <Cars handleSubmit={this.handleSubmit} objects={this.state.cars} />
                <div>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

export default CarController;