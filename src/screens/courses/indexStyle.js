import { makeStyles } from "@mui/styles";
import { fontSize } from "@mui/system";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  titleOne: {
    color: "#FA541C",
    marginBottom: 80,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 40,
      fontSize: 10,
    },
  },
  ImgProgrammer: {
    width: 466,
    height: 621,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: 280,
      height: 220,
    },
  },
  divRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 100,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
    },
  },
  titleTwo: {
    color: "#212B36",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      left: 0,
    },
  },
  divTitle: {
    paddingLeft: 0,
    marginLeft: 0,
  },
  subtitle: {
    color: "#637381",
    fontWeight: 400,
    lineHeight: "2em",
    paddingRight: 100,
    marginBottom: 100,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 50,
      paddingRight: 10,
      textAlign:'inherit'
    },
  },
  subtitle2: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 16,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      fontSize: 12,
    },
  },
  subtitleLeft: {
    color: "#637381",
    fontSize: 14,
    width: 228,
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      width: 24,
      height: 4,
      borderRadius: 10,
      backgroundColor: "#FA541C",
      top: -15,
      [theme.breakpoints.down('sm')]:{
        top: -5,

      }
    },
  },
  subtitleRight: {
    color: "#637381",
    fontSize: 14,
    width: 228,
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      width: 24,
      height: 4,
      borderRadius: 10,
      backgroundColor: "#FA541C",
      top: -15,
      [theme.breakpoints.down('sm')]:{
        top: -5,

      }
    },
  },
}));
export default useStyles;
