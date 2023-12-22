import NextAuth from "next-auth/next";
import User from "@/app/models/User"; //modelo de usuario de la base de datos
import bcrypt from "bcryptjs"; //encriptar la password
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  //como configrar la autenticacion (github, twitterm , google ,etc)
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        const userFound = await User.findOne({
          email: credentials?.email,
        }).select("+password"); //buscamos el usuario en la base de datos por el email
        if (!userFound) throw new Error("User not found");

        const passMatch = await bcrypt.compare(
          credentials!.password,
          userFound.password
        ); //comparamos la password del usuario con la de la base de datos
        if (!passMatch) throw new Error("User not found");

        //se se encuntra el usuario
        console.log("user found : ", userFound);
        return userFound;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.user = user;
      }
      return token; //debemo agregar informacion al token
    },
    session({ session, token }) {
      //alamacena la informacion del token en la session
      console.log("session and token : ", session, token);
      return session;
    },
  },
  pages:{
    signIn: "/", //ruta de inicio de sesion
  }
  
});

export { handler as GET, handler as POST };
