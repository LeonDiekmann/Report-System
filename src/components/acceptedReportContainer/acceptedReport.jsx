import React from "react";
import { Accordion,Button, Gallery, SelectButton } from 'chayns-components';
import 'chayns-components/lib/react-chayns-gallery/index.css';

let list = [
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
const AcceptedReport = (element) => (
    <Accordion head = "Übernommener Report 1" badge = "Notfall"  dataGroup = "acceptedReport" className="accordion--wrapped">
        <div className="accordion__item" data-group="article">
            <div className="article-image-text collapsible">
                <div className="article">
                    <div className="article__gallery">
                        <div className="mic-slider mic-slider--single-image">
                            <div className="mic-slider-container">
                                <div className="mic-slider-wrapper">
                                    <div className="mic-slider-slide">                            
                                        <Gallery height={161.52} width={161.52} urls={["https://tappqa.tobit.com/Training/2018/LD/Stock.png"]}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article__text">
                        <div className="article__content collapsible">
                            <div>
                                <div className="description">Dieses Programm ist noch nicht fertig und müsste gefixed werden.<br/>Bamboo<br/>Leon Diekmann</div>
                            </div>
                            <div className="controls">
                                <div className="article-controls detailed">
                                    <div className="trigger accordion--trigger">
                                    </div>
                                    <div className="cc__amount-control cc__amount-control--shop">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{float: "left",marginLeft: "10px"}}>
                    Abteilung:
                </div>
                <div className="right" >
                    <SelectButton
                        style={{marginRight: "10px"}}
                        label="Abteilung"
                        list={list}
                        onSelect={(value) => { 
                            console.log(value);
                            chayns.dialog.confirm(`Weiterleiten`,`Möchtest du den Report an ${value.selection[0].name} weiterleiten?`)
                            .then(function (data) {
                            console.log(data);
                            });
                        }}
                        listKey="id"
                        listValue="name"
                    />
                </div>
            </div> 
            <div className="center" style={{marginTop: "50px"}}>
                <Button>
                        Abschließen
                </Button>
            </div>
        </div>
        
    </Accordion>
);

export default AcceptedReport;