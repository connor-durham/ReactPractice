import React from "react"
import CardMaker from "./CardMaker";
import { Grid } from "@material-ui/core"

const Content = () => {

    return (

        <Grid container spacing={4}>

            <Grid item xs={12} sm={4}>
                <CardMaker />
            </Grid>

            <Grid item xs={12} sm={4}>
                <CardMaker />
            </Grid>

            <Grid item xs={12} sm={4}>
                <CardMaker />
            </Grid>

            <Grid item xs={12} sm={4}>
                <CardMaker />
            </Grid>

            <Grid item xs={12} sm={4}>
                <CardMaker />
            </Grid>

        </Grid>


    )
}

export default Content