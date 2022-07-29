export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Room = '/offer/:offerId',
  Favorites = '/favorites',
}

export enum ApiRoute {
  Offers = '/hotels',
}

export enum StarRating {
  '0%',
  '20%',
  '40%',
  '60%',
  '80%',
  '100%',
}

export enum IconUrl {
  Default = '/img/pin.svg',
  Active = '/img/pin-active.svg',
}

export const IconData = {
  SIZES: [27, 39] as [number, number],
  ANCHORE_COORDINATES: [14, 39] as [number, number],
} as const;

export const FIRST_ELEMENT_INDEX = 0;
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
export const DEFAULT_CITY = 'Paris';

export enum SortingOptions {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HighPrice = 'Price: high to low',
  TopRated = 'Top rated first',
}
