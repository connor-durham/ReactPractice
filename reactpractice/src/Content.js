import React from "react"
import CardMaker from "./CardMaker";
import { Grid } from "@material-ui/core"
import mouseList from "./mouseInfo"

const Content = () => {

    const getMouseList = mouseObject => {
        return (

        <Grid item xs={12} sm={4}>
            <CardMaker {...mouseObject} />
        </Grid>
        
        )
    }

    return (

        <Grid container spacing={4}>


                {mouseList.map(mouseObject => getMouseList(mouseObject))}


        </Grid>


    )
}

export default Content