import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Accordion } from 'chayns-components';
import UserContainer from '../../containers/UserContainer';
import AcceptedReport from './acceptedReport'
import './acceptedReport.css'



class AcceptedReportContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        
        return(
            <Accordion head="Übernommene Reports">
                <AcceptedReport/>
                <AcceptedReport/>
            </Accordion>
        );
    }
}

export default AcceptedReportContainer;