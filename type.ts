type Region = {
    code: number;
    caption: string;
};

export type District = {
    caption: string;
    shortCaption: string;
    code: number;
    regions: Region[];
};

type Cashflows = {
    caption: string;
    value: number;
};

type IncomnigsDistricts = {
    code: string;
    caption: string;
    value: number;
    subitems: Cashflows[];
};

type IncomingsCountry = {
    caption: string;
    value: number;
};

type IncomingsRegions = {
    code: string;
    caption: string;
    value: number;
    subitems: Cashflows[];
};

export type DataByYear = {
    country: IncomingsCountry;
    districts: IncomnigsDistricts[];
    regions: IncomingsRegions[];
};

export type FederalDistricts = {
    [code: number]: string;
};

export type Regions = {
    [code: number]: string;
};

export type Report = {
    [caption: string]: number;
};

