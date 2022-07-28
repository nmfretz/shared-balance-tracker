# Skipper Otto Share Tracker

:tropical_fish: A dashboard for tracking costs in a shared membership to a seafood co-op. React and Bootstrap for front end. Firebase for user authentication and database. Authorized users can add, edit, and delete orders.

Currently deployed at https://skippertracker.surge.sh/

<kbd> 
<img src="https://user-images.githubusercontent.com/85373263/181633065-be26676e-227d-4a59-91bd-3bcaed2dfdd5.png"/>
</kbd>

### Features & Design

#### Frontend

- React and Bootstrap
- React Router for client-side routing
- React Firebase Hooks
- React Date Picker for calendar component
- Restricts access to dashboard to signed in users. Redirects to login page if not signed in.

#### Backend

- :fire: Firebase for user authentication (google sign in) and database (cloud firestore).
- Database security rules set so that any signed in user has read access to database; however, only certain users have write access.

### TODOS

- [ ] add memoization (useMemo, useCallback)
- [ ] add UI for authentication errors
- [ ] add splitwise-like functionality (ability to split order between parties)

# Setup

- Run `npm install`
- Update `firebase-config.js` with your firebase project details.
- create `userEmails.js` in `src/data/` and export an object as follows:

```
export const FAMILY_TO_EMAIL = {
  FamilyNameExample1: ["example1@example.com", "example2@example.com"],
  FamilyNameExample2: ["example3@example.com", "example4@example.com"],
  etc...
};
```

# Development

Start react-app with `npm start`

# Deployment

Build the frontend for production with `npm run build`. Deploy the `build` folder.

Currently deployed at https://skippertracker.surge.sh/

# Screenshots

<kbd> 
<img src="https://user-images.githubusercontent.com/85373263/181636070-e79a2086-1abf-4177-b1b9-77986f04c932.png"/>
</kbd>
<br />
<br />
<kbd> 
<img src="https://user-images.githubusercontent.com/85373263/181633065-be26676e-227d-4a59-91bd-3bcaed2dfdd5.png"/>
</kbd>
<br />
<br />
<kbd> 
<img src="https://user-images.githubusercontent.com/85373263/181633797-326de48d-2142-478e-97b7-ee1d65ae3287.png"/>
</kbd>
<br />
<br />
<kbd> 
<img src="https://user-images.githubusercontent.com/85373263/181638549-d08fa115-469d-4169-920f-00e0fd6765fd.png"/>
</kbd>
<br />
<br />
<kbd> 
<img src="https://user-images.githubusercontent.com/85373263/181638557-c64d83e8-5890-4bbd-9f67-a53b97d666f0.png"/>
</kbd>
<br />
<br />
<kbd> 
<img src="https://user-images.githubusercontent.com/85373263/181642180-a378cf75-2ba7-4e5e-b0d5-8caf204aa02e.png"/>
</kbd>
<br />
<br />
<kbd> 
<img src="https://user-images.githubusercontent.com/85373263/181638562-9bda3d32-34e3-49b2-be58-bf22fff6ea83.png"/>
</kbd>
<br />
<br />
<kbd> 
<img src="https://user-images.githubusercontent.com/85373263/181638589-43b1f2b7-5ed8-4912-ad51-1745e20da3d5.png"/>
</kbd>
<br />
<br />
<kbd> 
<img src="https://user-images.githubusercontent.com/85373263/181638566-ad28bf79-9115-44ec-9b37-0c697387b53e.png"/>
</kbd>
