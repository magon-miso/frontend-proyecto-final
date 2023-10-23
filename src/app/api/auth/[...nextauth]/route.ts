import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Auth } from "aws-amplify";
import { cli } from "webpack";
import aws from "aws-sdk";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.debug("****createCredential: ", JSON.stringify(credentials));
          // var aws = require("aws-sdk");
          console.log(
            "process.env.COGNITO_IDENTITY_POOL_ID",
            process.env.COGNITO_IDENTITY_POOL_ID,
            process.env.USER_POOL_ID,
            process.env.COGNITO_CLIENT_ID
          );
          aws.config.update({
            region: "us-east-1",
            credentials: new aws.CognitoIdentityCredentials({
              IdentityPoolId: process.env.COGNITO_IDENTITY_POOL_ID || "",
            }),
          });
          var cognitoidentityserviceprovider =
            new aws.CognitoIdentityServiceProvider();
          // const UserPoolId = process.env.USER_POOL_ID;
          const userParams = {
            AuthParameters: {
              EMAIL: credentials?.email || "",
              PASSWORD: credentials?.password || "",
            },
            AuthFlow: "USER_PASSWORD_AUTH",
            ClientId: process.env.COGNITO_CLIENT_ID || "",
            UserPoolId: process.env.USER_POOL_ID || "",
          };
          const errorInit = await cognitoidentityserviceprovider
            .adminInitiateAuth(userParams)
            .promise()
            .then((data: any) => {
              console.log("Data ---", data);
              return data;
              // return null;
            })
            .catch((error: any) => {
              console.error(
                "*****error createCredential adminInitiateAuth: ",
                error
              );
              console.error(JSON.stringify(error));
              return error;
            });
          if (errorInit) {
            console.error("*****errorInit: ", errorInit);
            if (errorInit.code) {
              return Promise.reject(new Error(errorInit.code));
            }
            return Promise.reject(new Error("Unknown Error"));
          }
        } catch (error: any) {
          console.log("Error ----", error);
          return null;
        }
        return null;
      },
    }),
    // Credentials({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "email" },
    //     password: { label: "password" },
    //   },
    //   async authorize(credentials) {
    //     try {
    //       const cognitoUser = await Auth.signIn({
    //         username: credentials?.email || "",
    //         password: credentials?.password || "",
    //       });
    //       console.log("Cognito user ----", cognitoUser);
    //       // const user = await Auth.currentAuthenticatedUser({
    //       //   bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    //       // });
    //       if (cognitoUser!!) {
    //         cognitoUser.Session = {
    //           ...cognitoUser.Session,
    //           token: cognitoUser.signInUserSession.idToken.jwtToken,
    //         };
    //         return cognitoUser.Session;
    //       }
    //       return null;
    //     } catch (error: any) {
    //       console.log("Error ----", error);
    //       return null;
    //     }
    //   },
    // }),
  ],

  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, user: session.user };
      }

      if (user) {
        console.log("Hay user-------- ", user);
        token.user = {
          ...user,
          id: Number(user.id),
          email: user.email ?? "",
          name: user.name ?? "",
        };
      }

      return token;
    },
    session({ session, token }) {
      console.log("Ander session in callback", session);
      session.user = token.user;
      return session;
    },
  },
  session: {
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  jwt: { maxAge: 60 * 60 * 24 * 7 },
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };

// const loginQantto = async (params: LoginDTO): Promise<Login | null> => {
//   try {
//     const res = await axios.post<Login>(
//       `${process.env.NEXT_PUBLIC_API_URL}users/login/`,
//       {
//         ...params,
//       },
//       { timeout: 20000 },
//     )

//     return res.data
//   } catch (error) {
//     console.error(
//       `[LOGIN ERROR FROM ${params.email}]`,
//       (error as AxiosError)?.response?.data,
//     )
//     throw error
//   }
// }
