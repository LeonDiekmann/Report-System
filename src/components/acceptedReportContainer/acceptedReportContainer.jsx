import React from 'react';
import { Accordion } from 'chayns-components';
import AcceptedReport from './acceptedReport'
import './acceptedReport.css'

const testObj = [{
    shortDesc: "Report System Bug",
    desc: "Im Report System werden die Reports nicht richtig angezeigt",
    location: "TKWY",
    name: "Leon Diekmann",
    date: "25. September 2018"
},
{
    shortDesc: "Kaputter Teppich",
    desc: "In Tobit 2 im ersten Stock ist an einer Stelle der Teppich kaputt",
    location: "Campus",
    name: "leon Diekmann",
    date: "25. September 2018"
}];

class AcceptedReportContainer extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <Accordion head="Übernommene Reports">
                <AcceptedReport {...testObj[0]} />
                <AcceptedReport {...testObj[1]} />
            </Accordion>
        );
    }
}

export default AcceptedReportContainer;