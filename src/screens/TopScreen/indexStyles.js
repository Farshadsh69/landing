import "../../assets/fonts/barlow/style.css";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {},
  GridContainer: {
    display: "flex",
    flexDirection: "row",
  },
  GridItemLeft: {
    width: 670,
    height: 670,
    display: "flex",
    flexDirection: "column !important",
    [theme.breakpoints.down('sm')]:{
      height:'auto',
    }
  },
  dinTitle: {
    marginBottom: 0,
    paddingBottom: 0,
  },
  title: {
    fontSize: "3em",
    marginBottom: "0px",
    [theme.breakpoints.down('sm')]:{
      fontSize:'2em',

    }
  },
  divP: {
    width: 414,
    fontSize: 15,
    left: 0,
    padding: "24px 0px 40px",
    color: "#637381",
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]:{
      width:250,
      fontSize:12,
    }
  },
  divBtn: {
    display: "flex",
    flexDirection: "row",
  },
  readyStart: {
    width: 153,
    height: 48,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FA541C",
    borderRadius: 8,
    fontSize: 15,
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    [theme.breakpoints.down('sm')]:{
      width:100,
      height: 30,
      fontSize: 9,


    }
  },
  forwardR: {
    marginLeft: 10,
    color:'#ffffff',
    [theme.breakpoints.down('sm')]:{
    fontSize:'10px !important',
    }
    
  },
  divFab: {
    width: 48,
    height: 48,
    borderRadius: 25,
    backgroundColor: "#22B8CF",
    margin: "0px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    [theme.breakpoints.down('sm')]:{
      width: 30,
    height: 30,
    }
  },
  IconVideo: {
    color: "#fff",
  },
  h5: {
    marginTop: 10,
    [theme.breakpoints.down('sm')]:{
      marginTop: 7,
fontSize:11,
    }
  },
  follower: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    marginTop: 60,
    borderTop: "1px solid #e6e6e6d1",
  },
  hOne: {
    position: "relative",
    fontFamily: "cursive",
    marginBottom: 0,
    marginTop: 60,
    "&::after": {
      content: "' '",
      position: "absolute",
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: "rgba(255, 193, 7, 0.24)",
      left: 0,
    },
    [theme.breakpoints.down('sm')]:{
      fontSize:'1.5em',
      paddingRight:15,
      marginTop:30,

    }
  },
  pOne: {
    fontSize: 11,
    color: "#637381",
  },
  hTwo: {
    position: "relative",
    fontFamily: "cursive",
    marginBottom: 0,
    marginTop: 60,
    "&::after": {
      content: "' '",
      position: "absolute",
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: "rgba(255, 72, 66, 0.24)",
      left: 0,
    },
    [theme.breakpoints.down('sm')]:{
      fontSize:'1.5em',
      paddingRight:15,
      marginTop:30,

    }
  },
  pTwo: {
    fontSize: 11,
    color: "#637381",
  },
  hThree: {
    position: "relative",
    fontFamily: "cursive",
    marginBottom: 0,
    marginTop: 60,
    "&::after": {
      content: "' '",
      position: "absolute",
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: "rgba(12, 214, 110, 0.24)",
      left: 0,
    },
    [theme.breakpoints.down('sm')]:{
      fontSize:'1.5em',
      paddingRight:15,
      marginTop:30,

    }
  },
  pThree: {
    fontSize: 11,
    color: "#637381",
  },
  GridItemRight: {},
  Image: {
    width: 670,
    height: 600,
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 320,
    },
  },
}));
export default useStyles;
