import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>Welcome to trips manager!</h1>
    <p>Use this manager to manage your trips, by:</p>
    <ul>
      <li>Add a new trip</li>
      <li>Update a trip</li>
      <li>Delete a trip</li>
      <li>Show all trip</li>
    </ul>
  </div>
);

export default connect()(Home);
