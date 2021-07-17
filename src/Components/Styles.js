import { makeStyles } from '@material-ui/core/styles';
import { BusinessCenter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#29304e",
   
  },
  appbar:{
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  socialButton:{
    position:"absolute",
    right: theme.spacing(2),
    hoverOpacity: "0.3",
  },
  title: {
    ...theme.typography.title,
    flexGrow: 1,
    padding: theme.spacing(3),
    color: "white",
  },
  header:{
    backgroundColor:"#29304e",
  },
  headerTitle:{
    color:"white",
  },
  headerText:{
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing(1),
    color:"white",
  },
  websiteButton:{
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  galleryRoot:{
    backgroundColor:"white",
  },
  gallery:{
    paddingTop:"30px",
  },
  galleryButton:{
    padding:theme.spacing(2),
    paddingBottom:"30px",
  },
  image: {
    width: "100%",
    maxHeight: "100%",
  },
  mint:{
    backgroundColor:"#29304e",
  },
  mintTitle:{
    color:"white",
  },
  footer: {
    marginTop:6,
    padding: theme.spacing(6),
  },
}));

export default useStyles;