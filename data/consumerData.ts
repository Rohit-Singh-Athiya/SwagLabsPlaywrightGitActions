import { Country } from "../support/enums/constants"

export interface ConsumerData {
    firstName: string;
    lastName: string;
    postalCode: string;
}

export const countrySpecificData: {
    [key in Country]: ConsumerData;
} = {
    [Country.IND]: {
        firstName: 'Rohit',
        lastName: 'Singh',
        postalCode: '456002'
    },
     [Country.DNK]: {
        firstName: 'Alex',
        lastName: 'Denmark',
        postalCode: '1050'
    },
     [Country.NOR]: {
        firstName: 'Nyst',
        lastName: 'Norway',
        postalCode: '0150s'
    },

};