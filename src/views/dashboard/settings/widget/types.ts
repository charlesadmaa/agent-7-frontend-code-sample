export interface themeInterface {
  id: string | number;
  name: string;
  colorCode: string;
}

export interface defaultType {
  id: string | number;
  value: string;
}

interface defaultTypeInterface {
  data: defaultType[];
  active: defaultType;
}

export interface widgetSettingsInterface {
  theme: themeInterface[];
  activeTheme: themeInterface;
}

export interface backgroundImageType {
  id: string | number;
  name: string;
  src: string;
}

export interface backgroundImageInterface {
  data: backgroundImageType[];
  active: backgroundImageType;
}

interface visibilityInterface {
  reverseChatBoxPosition: boolean
  showOnDesktop: boolean,
  showOnTablet: boolean,
  showOnMobile: boolean,
  showRepProfileImage: boolean
}

interface behaviorInterface {
  hideIfAway: boolean
  askForEmail: boolean,
  askForPhone: boolean,
  forceVisitorIdentity: boolean,
  enableMediaUpload: boolean,
  showReadReceipts: boolean,
  deleteChatHistoryAfterOneDay: boolean,
  showVisitorMessageRealTime: boolean
}

interface securityInterface {
  lockDomain: boolean
}

interface countryInterface {
  name: string,
  code: string
}

interface restrictedInterface {
  restrictedCountries: String[],
  allowedCountries: String[],
  restrictedPages: String[],
  restrictedIP: String[],
}

export interface widgetDataInterFace {
  propertyId: string;
  widgetCode: string;
  widgetSettings: widgetSettingsInterface,
  themeText: defaultTypeInterface,
  wellcomeMessage: defaultTypeInterface,
  backgroundImage: backgroundImageInterface,
  visibility: visibilityInterface,
  behavior: behaviorInterface,
  security: securityInterface,
  countries: countryInterface[],
  restricted : restrictedInterface,
}