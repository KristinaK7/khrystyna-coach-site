# Khrystyna Coach Website

Static bilingual website for a fitness coach with Firebase-backed reviews and a protected admin moderation page.

## Project Structure

```text
.
├── index.html              # Ukrainian public page
├── cz.html                 # Czech public page
├── admin.html              # Review moderation page
├── .firebaserc             # Firebase project alias for CLI/deploys
├── assets/
│   ├── css/
│   │   ├── site.css        # Shared public-site styles
│   │   └── admin.css       # Admin-only styles
│   ├── js/
│   │   ├── firebase.js     # Firebase config and database/auth helpers
│   │   ├── site.js         # Public-site interactions and review form
│   │   └── admin.js        # Admin login and review moderation logic
│   └── media/              # Images and local visual assets
└── data/
    └── reviews-data.js     # Legacy/static review data backup
```

## Pages

- `index.html` is the Ukrainian version.
- `cz.html` is the Czech version.
- `admin.html` is used to approve, hide, and delete reviews from Firebase Firestore.

## Firebase

Firebase is initialized in `assets/js/firebase.js`.

Public pages:
- submit new reviews to the `reviews` collection;
- show only reviews with `status: "approved"`.

Admin page:
- uses Firebase Authentication;
- supports short login aliases that map to the internal `admin.local` auth domain;
- loads all reviews and allows changing status or deleting reviews.

Firestore security rules should protect moderation actions so only the admin account can read all reviews, update statuses, or delete reviews.

## Notes

- Do not store passwords, Gmail app passwords, API secrets, or private keys in this repository.
- Firebase frontend config is safe to keep in the project; security should be enforced through Firebase Authentication and Firestore Rules.
- The removed Firebase Cloud Functions email notification setup is not part of the current project because it requires paid Firebase functionality.
