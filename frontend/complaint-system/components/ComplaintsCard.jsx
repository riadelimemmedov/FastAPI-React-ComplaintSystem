
//!React
import * as React from 'react';

//!MateriUI React
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Grid} from '@material-ui/core'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


//!Css class variables
import {ExpandMore} from  '../style/style.jsx'


//*CardComplaint
const CardComplaint = () => {
    //expanded
    const [expanded, setExpanded] = React.useState(false);

    //handleExpandClick
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    //?return jsx
    return (
        <Grid item key={1} xs={12} sm={2} md={4} style={{marginTop:'40px'}}>
            <Card sx={{ maxWidth: 345,boxShadow: 3 }} style={{marginTop:'20px'}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="/static/images/cards/paella.jpg"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>

                    <IconButton>
                    <BookmarkBorderIcon/>
                    </IconButton>

                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Card>
        </Grid>
    );
}

//export PrimarySearchAppBar
export default CardComplaint