

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    "& .MuiInputLabel-formControl": {
      top: "-6px",
    }
  },
  select: {
    "& .MuiSelect-select": {
      "&:focus": {
        backgroundColor: "transparent",
      }
    }
  },
  secondRoot: {
      flexGrow: 1,
      paddingTop: 90,
    },
    productContainer: {
        backgroundImage: "linear-gradient(380deg,#fff,#f6faff)",
        backgroundRepeat: "no-repeat",
        height: "autp",
        padding: 0,
        minHeight: "80vh",
    },
    breadcrumbs: {
        paddingTop: 10,
        paddingBottom: 20,
    },
    sortStyle: {
      display: "flex",
      justifyContent: "flex-end",
    },
    styleSelect: {
      width: 250,
      height: 42,
      [theme.breakpoints.down('sm')]: {
        width: '150px',
      },
    },
  }));

export default useStyles