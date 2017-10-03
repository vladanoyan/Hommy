import App from './App';
import HomePage from './HomePage';
import Listing from './Listing';
import Contact from './Contact';
import Terms from './Terms';
import ListingDetails from './ListingDetails';

export default [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/app',
    component: App,
    routes: [
      { path: '/app/listings',
        component: Listing,
      },
      { path: '/app/contacts',
        component: Contact,
      },
      { path: '/app/terms',
        component: Terms,
      },
      { path: '/app/listing/:listingId/details',
        component: ListingDetails,
      },
    ],
  },
];
