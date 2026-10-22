export interface OfficeLocation {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  openingHours: string;
  isHeadquarters?: boolean;
}

export const officeLocations: OfficeLocation[] = [
  {
    id: "birmingham",
    city: "Birmingham",
    name: "Birmingham Head Office",
    address: "66-68 Hagley Rd, Birmingham B16 8PF, United Kingdom",
    phone: "0333 004 0117",
    email: "info@visadirectimmigration.com",
    openingHours: "Monday – Friday: 9:00 AM – 6:00 PM | Saturday: By Appointment",
    isHeadquarters: true,
  },
  {
    id: "bristol",
    city: "Bristol",
    name: "Bristol Office",
    address: "Park House, Business Center, 10 Park St, Bristol BS1 5HX, United Kingdom",
    phone: "0333 004 0117",
    email: "info@visadirectimmigration.com",
    openingHours: "Monday – Friday: 9:00 AM – 5:30 PM",
  },
  {
    id: "reading",
    city: "Reading",
    name: "Reading Office",
    address: "Green Park, 200 Brook Dr, Reading RG2 6UB, United Kingdom",
    phone: "0333 004 0117",
    email: "info@visadirectimmigration.com",
    openingHours: "Monday – Friday: 9:00 AM – 5:30 PM",
  },
];

export const rotatingAddresses = [
  "Park House, Business Center, 10 Park St, Bristol BS1 5HX",
  "66-68 Hagley Rd, Birmingham B16 8PF",
  "Green Park, 200 Brook Dr, Reading, RG2 6UB",
  "103 Cranbrook Road, Ilford IG1 4PU",
  "3 Newbridge Square, Swindon, Wiltshire SN1 1HN",
];
