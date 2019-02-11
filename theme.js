const theme = {
  palette: {
    primary: {
      light:'#0A3B89',
      lighter: '#82adf2',
      main: '#002E78',
      midDark: '#00235B',
      dark: '#031E4A',
    },
    secondary: {
      main: '#74C857',
      light: '#97E47C',
      dark: '#5FB640',
      contrastText: '#FFF',
    },
    green:{
      main:"#74D301",
    },
    red:{
      main:"#ff001e",
      light:"#ff8997",
      midDark:"#D0021B",
    }
  },
  walletQRImage:{
    alignSelf:'center',
    width:300,
    height:300,
    margin:20,
  },
  header: {
    color:'white',
    //fontFamily: "Neuzeit Grotesk",
    fontSize: 24,
    fontWeight: 'bold',
  },
  picker: {
    backgroundColor:'#002E78',
    color: 'white',
    alignSelf:'center',
    height: 40,
    width: 280,
  },
  inputField: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:5,
    marginBottom:5,
    padding:3,
    paddingLeft:15,
    paddingRight:10,
  },
  inputFieldLabel: {
    opacity: 0.8, 
    color: '#FFFFFF', 
    //fontFamily: "Sofia Pro", 
    fontSize: 14,
  },
  inputFiledText: {
    color: '#FFFFFF', 
    //fontFamily: "Neuzeit Grotesk",
  },
  shape: {
    borderRadius: 20,
  },
  greyPalette: {
    darkText: '#454545',
    regularText: '#6D6D6D',
    descriptionText: '#919191',
    disabledText: '#DDD',
    divider: '#DDD',
    background: '#F5F5F5',
    white: '#FFF',
  },
  primaryButton: {
    backgroundColor: '#00235B',
    borderRadius: 0,
    margin:5,
    //marginBottom:10,
    alignSelf:'flex-end',
    justifyContent:'center',
    alignSelf:'center',
    width: 300,
    height: 40,
  },
  defaultContainerWidth:300,
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf:'center',
    padding: 5,
  },
  text: {
    //fontFamily: "Neuzeit Grotesk",
    color: '#FFFFFF',
    fontSize: 16,
    //fontWeight: 'bold',
    textAlign: 'center',
    alignSelf:'center',
    padding: 5,
  },
  secondaryButton: {
    textTransform: 'none',
    backgroundColor: '#002E78',
    borderRadius: 0,
    color: '#FFFFFF'
  },
  avatar:{
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    width:40,
    height:40,
    borderRadius:100,
    backgroundColor:'#00235B',
  },
  headerImage:{
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00235B'
  }
};

export default theme;
