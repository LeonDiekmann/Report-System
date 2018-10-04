import React from 'react';
import { Accordion, Input, SelectButton, Checkbox, FileUpload, Button, TextArea } from 'chayns-components';
import 'chayns-components/lib/react-chayns-upload/index.css';
import './CreateReport.css'


let listGroups;

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

export default class CreateReport extends React.Component {
    constructor() {
        super();
    }
    

    render() {
        return (
            <Accordion head="Report erstellen" defaultOpened>
                <div className="accordion__content">
                    <div style={{ marginBottom: "15px" }}>
                        <FileUpload
                            upload
                            multiple={false}
                            type="image"
                            onUpdate={(files, validFiles) => {
                                console.log(`You have selected ${files.length} files of which ${validFiles.length} are valid`);
                            }}
                        />
                    </div>
                    <Input type="text" placeholder="Kurzbeschreibung" responsive={true} style={{ width: "100%", marginBottom: "5px" }} />
                    {/* <Input type="text" placeholder="Beschreibung" style={{ width: "100%", marginBottom: "5px" }} /> */}
                    <TextArea placeholder="Beschreibung" required autogrow style={{ width: "100%" }} />
                    <div style={{ marginTop: "10px" }}>
                        <div style={{ float: "left" }}>
                            Abteilung
                        </div>
                        <div className="right" >
                            <SelectButton
                                style={{ marginRight: "10px" }}
                                label={"Test"}
                                list={listGroups}
                                onSelect={(value) => {
                                    console.log(value);
                                }}
                                listKey="id"
                                listValue="name"
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <div style={{ float: "left" }}>
                            Location
                        </div>
                        <div className="right" >
                            <SelectButton
                                style={{ marginRight: "10px" }}
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
                    <div style={{ marginTop: "15px" }}>
                        <Checkbox
                            label="Notfall"
                            toggleButton={true}
                            onChange={(value) => {
                                console.log(this.state.show);
                                if (value) {
                                    chayns.dialog.confirm(`Achtung`, `Wenn du ein Report als Notfall abschickst werden alle zuständigen Personen kontaktiert egal wie spät es ist. Bist du dir sicher, dass es sich bei dem Problem um einen Notfall handelt?`)
                                        .then(function (data) {
                                            console.log(data);
                                        });
                                }
                            }}
                        />
                    </div>
                    <div className="center">
                        <Button>
                            Report erstellen
                        </Button>
                    </div>
                </div>
                {this.fetchGroups()}
                {console.log(chayns.env.user.tobitAccessToken)}
                {console.log(chayns.env.site.tapp.id)}
            </Accordion>
        );
    }
    fetchGroups() {
        this.fetchGroupsPromise().then((result) => {
            listGroups = result.data
            Console.log(listGroups);
        }).catch(() => {
            console.log("failed");
        });
    }

    fetchGroupsPromise() {
        return new Promise((resolve,reject) => {
            try{
            fetch(`http://localhost:5000/group`, {
                headers: {
                    "Authorization": `Bearer ${chaynsInfo.user.tobitAccessToken}`,
                    "TappId": chayns.env.site.tapp.id
                }
            })
            .then((response) => {
                return response.json()
            }).then((json) => {
                resolve(json);
                console.log('parsed json', json)
            }).catch( (ex) => {
                console.log('parsing failed', ex)
                reject(ex);
            })
            }
            catch (ex){
                reject(ex);
            }
        });
    }
}

