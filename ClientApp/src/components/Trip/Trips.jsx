import React, { Component } from 'react';

export class Trips extends Component
{
    constructor(props){
        super(props);

        this.state = {
            trips: [],
            loading: false
        }
    }

    renderAllTripsTable(trips){
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date Started</th>
                        <th>Date completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>a</th>
                        <th>a</th>
                        <th>a</th>
                        <th>a</th>
                        <th> - </th>
                    </tr>
                </tbody>
            </table>
        );
    }

    render(){
        let content = this.state.loading ? (
            <p>
                <em>loading...</em>
            </p>
        ) : (
            this.renderAllTripsTable(this.state.trips)
        )
        return (
            <div>
                <h1>All trips</h1>
                <p>Here you can see all trips</p>
                {content}
            </div>
        );
    }
}