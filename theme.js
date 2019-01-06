const theme = {
  palette: {
    primary: {
      light:'#0A3B89',
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
  },
  header: {
    color:'white',
    //fontFamily: "Neuzeit Grotesk",
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputField: {
    backgroundColor:'#002E78',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    marginBottom: 10,
    marginTop:10,
    alignSelf:'flex-end',
    justifyContent:'center',
    alignSelf:'center',
  },
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
    fontWeight: 'bold',
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
};

export default theme;
