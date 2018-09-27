import React from 'react';
import { Accordion, Input, SelectButton, Checkbox, FileUpload, Button } from 'chayns-components';
import 'chayns-components/lib/react-chayns-upload/index.css';
import './CreateReport.css'

let listDep = [
    {
        id: 1,
        name: "Junior Team"
    },
    {
        id: 2,
        name: "Test Team"
    },
    {
        id: 3,
        name: "UI/UX"
    }
];

let listLoc = [
    {
        id: 1,
        name: "Bamboo"
    },
    {
        id: 2,
        name: "TKWY"
    },
    {
        id: 3,
        name: "Campus"
    }
];

class CreateReport extends React.Component {
    constructor() {
        super();
    }

    render() {
        
        return(
            <Accordion head="Report erstellen" defaultOpened>
                <div className="accordion__content">
                    <div style={{marginBottom: "15px"}}>
                        <FileUpload
                            multiple={false}
                            type="image"
                            onChange={(files, validFiles) => {
                            console.log(`You have selected ${files.length} files of which ${validFiles.length} are valid`);
                            }}
                        />
                    </div>
                    <Input type="text" placeholder="Kurzbeschreibung" responsive={true} style={{    width: "100%",marginBottom: "5px"}}/>
                    <Input type="text" placeholder="Beschreibung (optional)" responsive={true} style={{    width: "100%",marginBottom: "5px"}}/>
                    <div style={{marginTop: "10px"}}>
                        <div style={{float: "left"}}>
                            Abteilung
                        </div>
                        <div className="right" >
                            <SelectButton
                                style={{marginRight: "10px"}}
                                label={listDep[0].name}
                                list={listDep}
                                onSelect={(value) => { 
                                    console.log(value);
                                }}
                                listKey="id"
                                listValue="name"
                            />
                        </div>
                    </div>
                    <div style={{marginTop: "10px"}}>
                        <div style={{float: "left"}}>
                            Location
                        </div>
                        <div className="right" >
                            <SelectButton
                                style={{marginRight: "10px"}}
                                label={listLoc[0].name}
                                list={listLoc}
                                onSelect={(value) => { 
                                    console.log(value);
                                }}
                                listKey="id"
                                listValue="name"
                            />
                        </div>
                    </div>
                    <div style={{marginTop: "15px"}}>
                        <Checkbox
                            label="Notfall"
                            toggleButton={true}
                            onChange={ (value) => { console.log(value); }}
                        />
                    </div>
                    <div className = "center">
                        <Button>
                            Report erstellen
                        </Button>    
                    </div>
                </div>               
            </Accordion>
        );
    }
}

export default CreateReport;