import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:'13px'
  },
  heading: {
    color: '#F88F5F',
    letterSpacing: '2px',
    textShadow: '1px 1px rgba(0,0,0,0.02),2px 2px rgba(0,0, 0,0.02),3px 3px rgba(0,0, 0, 0.02),4px 4px rgba(0, 0,0,0.02), 5px 5px rgba(0,0,0,0.02),6px 6px rgba(0,0, 0,0.02), 7px 7px rgba(0,0, 0,0.02)'

  },
  image: {
    marginLeft: '15px',
  },

}));