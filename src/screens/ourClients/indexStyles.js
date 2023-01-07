import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    padding: "80px 144px",
    [theme.breakpoints.down('sm')]:{
      display:'block',
      padding: "20px 10px",

    }
  },
  divBrands: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]:{
      display:'inline-block',
      width:'100%',
      textAlign:'center'
    }
  },
  spotify: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBrand: {
    width: 35,
  },
  slack: {
    width: 80,
  },
  netflix: {
    width: 80,
  },
  heroku: {
    width: 80,
  },
  vimeo: {
    width: 80,
  },
  airbnb: {
    width: 80,
  },
  margin: {
    margin: "0px 45px",
  },
  h1: {
    marginBottom: 0,
    fontWeight: 700,
    fontSize: 48,
    color: "##212B36",
    [theme.breakpoints.down('sm')]:{
      fontWeight:700,
      fontSize:35,
      
    }
  },
  p1:{
    color:'#637381',
    [theme.breakpoints.down('sm')]:{
     textAlign:'-webkit-center'
    }
  }
}));
export default useStyles;
