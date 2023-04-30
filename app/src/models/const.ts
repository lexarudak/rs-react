import { PageNames, RouteList } from 'models';

export const NAV_LIST: [number, RouteList, PageNames][] = [
  [0, RouteList.homePage, PageNames.testPage],
  [1, RouteList.formsPage, PageNames.formsPage],
  [2, RouteList.aboutPage, PageNames.aboutPage],
];

export const BIG_CARD_FIELDS = ['Species', 'Type', 'Gender', 'Origin', 'Location'];

export const DEFAULT_CHAR_TYPE = 'Regular';
