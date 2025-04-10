import dotenv from "dotenv"
// import {User}  from '../model/User';
import passport  from 'passport';
import {Strategy as GoogleStrategy}  from 'passport-google-oauth20';
dotenv.config()
console.log(process.env.GOOGLE_CLIENT_ID)

// Use GoogleStrategy for OAuth 2.0 authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback", // Update with your callback URL
    },
    (accessToken, refreshToken, profile, done) => {
      // try {
      //   // Check if the user already exists in the database
      //   let user = await User.findOne({ googleId: profile.id });

      //   // console.log('profile: ', profile.emails.value);

      //   if (!user) {
      //     // If not, create a new user
      //     user = new User({
      //       email: profile.emails[0].value,
      //       username: profile.displayName,
      //       googleId: profile.id,
      //       profilePicture: profile.photos[0].value,
      //     });

      //     await user.save();
      //   }

        return done(null, user);
      // } catch (error) {
        // return done(error, null);
      }
    // }
  )
);

// Serialize and Deserialize User for session management
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // User.findById(id, (err, user) => {
    done(err, user);
  // });
});
export default passport