import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    Providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Providers.Twitter({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SERCRET,
        }),
        // Providers.Email({
        //     server: {
        //         host: '',
        //         port: '',
        //         auth: {
        //             user: '',
        //             pass: ''
        //         }
        //     },
        //     form: '',
        // })
        
    ]
}

export default (req, res) => NextAuth(req, res, options)