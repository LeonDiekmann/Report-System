import React from 'react';
import { hot } from 'react-hot-loader';
import Intro from './intro/Intro';
import ReportContainer from '../components/reportContainer/reportContainer'
import AcceptedReportContainer from '../components/acceptedReportContainer/acceptedReportContainer'
import CreateReport from '../components/createReport/createReport'

const App = () => (
    <div>
        <Intro />
        <ReportContainer/>
        <AcceptedReportContainer/>
        <CreateReport/>
    </div>
);

export default hot(module)(App);
