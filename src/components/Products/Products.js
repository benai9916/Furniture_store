import React, { useEffect, useState } from "react";
import useStyles from "./style";
import {
  Box,
  Breadcrumbs,
  Typography,
  FormControl,
  Select,
  Container,
  Grid,
  InputLabel,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

import Card from "../Cards/Cards";
import { getAllProducts } from "../redux/actions/productActions";
import { updateCatalog } from "../redux/actions/updateCatalogAction";

const AddProducts = ({ search }) => {
  const classes = useStyles();
  const [favorites, setFavourites] = useState(0);
  const [cart, setCart] = useState(0);
  const [sortProduct, setSortProduct] = useState();
  let totalProduct = 0;

  const dispatch = useDispatch();

  // get product
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const products = useSelector((state) => state.products);

  const updateCart = () => {
    setCart(cart + 1);
  };

  const updateFav = () => {
    setFavourites(favorites + 1);
  };

  useEffect(() => {
    dispatch(
      updateCatalog({
        cart: cart,
        favorites: favorites,
      })
    );
  }, [cart, favorites]);

  // sort
  const handleSort = (e) => {
    setSortProduct(e.target.value);
  };

  totalProduct = Object.keys(products).length;

  const sortByRatingNPrice = products.sort((a, b) => {
    switch (sortProduct) {
      case "price_low_high":
        return a.price - b.price;
      case "price_high_low":
        return b.price - a.price;
      case "rating_high_low":
        return b.Rating - a.Rating;
      case "rating_low_high":
        return a.Rating - b.Rating;
      default:
        return products;
    }
  });

  return (
    <div className={classes.productContainer}>
      <Container width="xl" className={classes.secondRoot}>
        <Box>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textSecondary">Home</Typography>
            <Typography color="textSecondary">Charis</Typography>
            <Typography color="textPrimary">Recliners</Typography>
          </Breadcrumbs>
          <Grid container className={classes.breadcrumbs}>
            <Grid item xs={6}>
              <Typography variant="h5" fontWeight="fontWeightBold">
                Recliners
              </Typography>
              <Typography
                variant="caption"
                fontWeight="fontWeightLight"
                color="textSecondary"
                className={classes.breadcrumbs}
              >
                Total Product {totalProduct}
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.sortStyle}>
              <FormControl variant="outlined" className={classes.formControl}>
                <div className={classes.formControl}>
                  <InputLabel
                    htmlFor="outlined-age-native-simple"
                    className={classes.formControl}
                  >
                    Sort by
                  </InputLabel>
                  <Select
                    native
                    value={sortProduct}
                    onChange={handleSort}
                    label="Age"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                    className={`${classes.styleSelect} ${classes.select}`}
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price_low_high">Price Low to High</option>
                    <option value="price_high_low">Price High to Low</option>
                    <option value="rating_high_low">Rating High to Low</option>
                    <option value="rating_low_high">Rating Low to High</option>
                  </Select>
                </div>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {typeof products !== "undefined" && (
          <Grid container spacing={4}>
            {sortByRatingNPrice
              .filter(
                (txt) =>
                  txt["product_name"]
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  txt["Product_description"]
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  String(txt["price"])
                    .toLowerCase()
                    .includes(search.toLowerCase())
              )
              .map((items, index) => (
                <Grid key={index} item lg={4} md={6} xs={12} sm={6}>
                  <Card
                    items={items}
                    updateCart={updateCart}
                    updateFav={updateFav}
                  />
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default AddProducts;
