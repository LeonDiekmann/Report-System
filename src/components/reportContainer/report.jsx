import React from "react";
import { Accordion, Button, Gallery, Portal } from 'chayns-components';
import 'chayns-components/lib/react-chayns-gallery/index.css';

const Report = (element) => {
    console.log(element);
    return (
        <Accordion head={element.shortDesc} badge="Notfall" dataGroup="Report" className="accordion--wrapped">
            <div className="accordion__item" data-group="article">
                <div className="article-image-text collapsible">
                    <div className="article">
                        <div className="article__gallery">
                            <div className="mic-slider mic-slider--single-image">
                                <div className="mic-slider-container">
                                    <div className="mic-slider-wrapper">
                                        <div className="mic-slider-slide">
                                            <Gallery height={161.52} width={161.52} urls={["https://tappqa.tobit.com/Training/2018/LD/Stock.png"]} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="article__text">
                            <div className="article__content collapsible">
                                <div>
                                    <div className="description">{element.desc}</div>
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
                    Location: {element.location}
                    <br />
                    Name: {element.name}
                    <br />
                    Datum: {element.date}
                </div>
            </div>
            <Accordion head="History" className="accordion-wrapped">
                <div className="accordion__content">
                    <div>
                        <div className="left" style={{ float: "left" }}>
                            Heute
                        </div>
                        <div className="right">
                            Report von Leon Diekmann an Junior Team weitergeleitet
                        </div>
                    </div>
                    <br />
                    <div>
                        <div className="left" style={{ float: "left" }}>
                            Vor 3 Tagen
                        </div>
                        <div className="right">
                            Report von Leon Diekmann erstellt
                        </div>
                    </div>
                </div>
            </Accordion>
            <div className="center" style={{ marginTop: "10px", marginBottom: "9px" }}>
                <Button style={{ margin: "0 5px" }}>
                    Übernehmen
                            </Button>
                <Button style={{ margin: "0 5px" }}>
                    Abschließen
                            </Button>
            </div>

        </Accordion>
    );
}

export default Report;