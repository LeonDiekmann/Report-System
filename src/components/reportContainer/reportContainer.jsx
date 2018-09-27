import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Accordion } from 'chayns-components';
import UserContainer from '../../containers/UserContainer';
import Report from "./report";
import "./report.css";


class ReportContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        
        return(
            <Accordion head="Reports" defaultOpened>
                    <Report/>     
                    <Report/>
                    <Report/>           
            </Accordion>
        );
    }
}

export default ReportContainer;