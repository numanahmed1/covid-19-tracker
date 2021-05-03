import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

function InfoBox({ title, cases, isRed, active, total, ...props }) {
    return (

            <Card onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}>
                <CardContent>
                    <Typography className="infoBox__title" color="textSecondary" >
                        {title}
                    </Typography>

                    <Typography className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`} >
                        <strong className="infoBox__casesNumber">{cases}</strong> <span>Today</span>
                    </Typography>

                    <Typography className="infoBox__total" color="textSecondary" >
                        {total} Total
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default InfoBox;
