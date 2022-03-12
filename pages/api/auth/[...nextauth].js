import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      id: "facebook",
      name: "Facebook",
      type: "oauth",
      authorization: "https://www.facebook.com/v11.0/dialog/oauth?scope=email",
      token: "https://graph.facebook.com/oauth/access_token",
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.secret,
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token
    },
  }
});