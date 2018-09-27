import React from 'react';
import { hot } from 'react-hot-loader';
import { Mode } from 'chayns-components';
import Intro from './intro/Intro';
import PersonFinderContainer from '../containers/PersonFinderContainer';
import UserListContainer from '../containers/UserListContainer';
import ReportContainer from '../components/reportContainer/reportContainer'
import AcceptedReportContainer from '../components/acceptedReportContainer/acceptedReportContainer'

const App = () => (
    <div>
        <Intro />
        <ReportContainer />
        <AcceptedReportContainer/>
    </div>
);

export default hot(module)(App);
