import React from "react"
import { makeStyles } from "@material-ui/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Button from '@material-ui/core/Button';
import { Avatar, IconButton, CardMedia } from "@material-ui/core"
import ShareIcon from "@material-ui/icons/Share"


function CardMaker(props) {

    const { avatarUrl, title, subtitle, description, imageUrl} = props 
  
    return (
      <Card >
          
               <CardHeader
                    avatar={
                    <Avatar src={avatarUrl}/>
                    
                    }
                    action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                    }
                    title={title}
                    subheader={subtitle}
                />
                <CardMedia
                    style={{height: "150px"}} image={imageUrl}
                />

        <CardContent>
          <Typography color="textSecondary">
            
          </Typography>
          <Typography variant="body2" component="p">
            {description}
            <br />

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy Now</Button>
        </CardActions>
      </Card>
    );
  }

  export default CardMaker