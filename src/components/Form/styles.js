import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: "15px",
    boxShadow: "0 10px 10px rgb(0 0 0 / 20%), 0 0 50px rgb(0 0 0 / 20%)",

    "&:hover": {
      boxShadow: "0 0 10px #fff, -10px 0 30px #F6F50A, 10px 0 10px #F6F50A",
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
