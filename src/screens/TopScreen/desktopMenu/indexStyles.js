import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  divMenu: {
      width:'100%',
    display: "flex",
    flexDirection: "row",
    justifyContent:'start',
    flex: 3,
  },
  ulMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft:0,
  },
  divSearch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    flex: 1,
  },
}));
export default useStyles;
