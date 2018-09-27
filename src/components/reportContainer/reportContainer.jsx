import React from 'react';
import { Accordion } from 'chayns-components';
import Report from "./report";
import "./report.css";

const testObj = [{
        shortDesc: "Report System Bug",
        desc: "Im Report System werden die Reports nicht richtig angezeigt",
        location: "TKWY",
        name: "Leon Diekmann"
    },
    {
        shortDesc: "Kaputter Teppich",
        desc: "In Tobit 2 im ersten Stock ist an einer Stelle der Teppich kaputt",
        location: "Campus",
        name: "leon Diekmann"
    }];
class ReportContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        
        return(
            <Accordion head="Reports" defaultOpened>
                    <Report {...testObj[0]}/>     
                    <Report {...testObj[1]}/>          
            </Accordion>
        );
    }
}
export default ReportContainer;