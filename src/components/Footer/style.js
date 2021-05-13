

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#2d3142",
        padding: 50,
        height: 150,
        marginTop: 50,
    },
    root: {
        color: "white",
    },
    centerAlign: {
    display: "flex",
     justifyContent: "center"
    },
}));

export default useStyles;