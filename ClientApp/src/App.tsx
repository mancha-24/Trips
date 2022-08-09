import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { Trips } from './components/Trip/Trips';
import { Create } from './components/Trip/Create';
import { Update } from './components/Trip/Update';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/create' component={Create} />
        <Route path='/trips' component={Trips} />
        <Route path='/update/:id' component={Update} />
    </Layout>
);
