import React, {useState} from "react";
import useStyles from "./style";
import {
  IconButton,
  Card,
  Typography,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Tooltip,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";

const Favourite = ({updateFav, setFav, items, updateColor}) => {
  const classes = useStyles();


  return (
    <IconButton
    aria-label="add to favorites"
    className={classes.fav}
    onClick={(e) => {updateFav(e); updateColor(e)}}
  >
    <Tooltip title="Save as fav" aria-label="add">
      <FavoriteIcon fontSize="large" className={ setFav ? classes.colorMe : " "}/>
    </Tooltip>
  </IconButton>
  )
}

const Cards = ({ items, updateFav, updateCart }) => {
  const classes = useStyles();
  const [setFav, setFavColor] = useState()

  const updateColor = (e) => {
    e.preventDefault()
    setFavColor(v => !v)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={items.product_image}
          title="Contemplative Reptile"
        />
        <CardContent style={{ paddingBottom: 0 }}>
          <Typography gutterBottom variant="h6" component="h6">
            {items.product_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {items.Product_description}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            &#8377;{items.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        disableSpacing
        style={{ paddingTop: 0, position: "relative" }}
      >
        
        <Favourite items={items} updateFav={updateFav}
        setFav={setFav} setFavColor={setFavColor} updateColor={updateColor}
        />

        <IconButton
          aria-label="add to favorites"
          className={classes.fav}
          onClick={updateCart}
        >
          <Tooltip title="Add to cart" aria-label="add">
            <AddBoxOutlinedIcon color="primary" fontSize="large" />
          </Tooltip>
        </IconButton>

        <Box
          component="fieldset"
          mb={2}
          borderColor="transparent"
          className={classes.rating}
        >
          <Typography variant="caption" component="legend">
            Rating
          </Typography>
          <Rating
            name="size-medium"
            value={items.Rating || 0}
            precision={0.5}
            readOnly
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default Cards;
