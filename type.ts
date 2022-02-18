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

type IncomnigsCountry = {
    caption: string;
    value: number;
};

type IncomnigsDistrict = {
    code: string;
    caption: string;
    value: number;
    subitems: IncomnigsCountry[];
};

type IncomnigsRegion = {
    regions: IncomnigsDistrict
};

type IncomnigsReport = {
    country: IncomnigsCountry;
    districts: IncomnigsDistrict[];
    regions: IncomnigsRegion[];
};

export type Incomnigs = {
    [year: string]: IncomnigsReport;
};
