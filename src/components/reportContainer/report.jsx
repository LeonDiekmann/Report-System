import React from "react";
import { Accordion,Button } from 'chayns-components';

const badge = <i>Notfall</i>;
const Report = (element) => (
    <Accordion head = "Report 1" badge = {badge} style= {{marginBottom: "0px"}} dataGroup = "Report">
        <div className="accordion__item" data-group="article">
            <div className="article-image-text collapsible">
                <div className="article">
                    <div className="article__gallery">
                        <div className="mic-slider mic-slider--single-image">
                            <div className="mic-slider-container">
                                <div className="mic-slider-wrapper">
                                    <div className="mic-slider-slide">                            
                                        <img src="https://tappqa.tobit.com/Training/2018/LD/Stock.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article__text">
                        <div className="article__content collapsible">
                            <div>
                                <div className="description">Dieses Programm ist noch nicht fertig und müsste gefixed werden.<br/>12345<br/>Leon Diekmann</div>
                            </div>
                            <div className="controls">
                                <div className="article-controls detailed">
                                    <div className="trigger accordion--trigger">
                                        
                                    </div>
                                    <div className="cc__amount-control cc__amount-control--shop">
                                        <Button className="choosebutton" >
                                            <div>
                                                Übernehmen
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Accordion>
);

export default Report;