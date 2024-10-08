const awsmobile = {
  Auth: {
    region: "us-east-1",
    userPoolId: 'us-east-1_kTBmzCuoU', // Tu User Pool ID
    userPoolWebClientId: '78qbqjejduf3svuknrhddtkbp4', // El App Client ID
    mandatorySignIn: false,
    authenticationFlowType: 'USER_SRP_AUTH',
    oauth: {
      domain: 'post-master.auth.us-east-1.amazoncognito.com', // El dominio sin https://
      scope: ['openid', 'profile', 'email', 'aws.cognito.signin.user.admin'], // Scopes de OAuth
      redirectSignIn: 'https://main.d1sda4wfq545xc.amplifyapp.com/', // La URL de redirección después de iniciar sesión
      redirectSignOut: '', // La URL de redirección después de cerrar sesión
      responseType: 'code' // Usamos el flujo Authorization Code Grant
    }
  }
};

export default awsmobile;
