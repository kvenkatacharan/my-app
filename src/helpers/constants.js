const constants = {
  baseUrl: "https://medfit-backend.herokuapp.com/api/v1/",
  //"http://localhost:8080/api/v1/",
  //"https://medfit-backend.herokuapp.com/api/v1/",
  appUrl: "http://appmedfit.s3-website.us-east-2.amazonaws.com/",
  //"http://appmedfit.s3-website.us-east-2.amazonaws.com/"
  signIn: "user/signIn",
  signUp: "user/signUp",
  SignOut: "user/signOut",
  getUsersWithCondition: "user/getUsersWithCondition",
  updateUser: "user/update",
  addUser: "user/add",
  getUser: "user/get",

  dummyLogin: {
    user: { email: "appmedfitpatient@gmail.com", password: "Medfit@123" },
    admin: { email: "appmedfitadm1n@gmail.com", password: "Medfit@123" },
  },
};

export default constants;
