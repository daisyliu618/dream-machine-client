import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    minHeight: "40px",
    padding: "5px",
    marginBottom: "25px",
    background: "rgba(36, 209, 215, 0.75)",
    borderRadius: "5px",
    boxShadow: "0 5px 5px rgb(0 0 0 / 20%), 0 0 20px rgb(0 0 0 / 20%)",
    marginLeft: '1.5rem'
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  // userName: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   color:'#ED4E74',
  // },
  // brandContainer: {
  //   display: 'flex',
  //   alignItems: 'center',
  // },
  purple: {
    color: "rgb(253, 201, 31)",
    backgroundColor: "rgb(77, 31, 249)",
  },
}));
