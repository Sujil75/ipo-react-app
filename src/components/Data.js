export const IPOColNames = [
    {id: 1, item: 'Company/Issue Date'},
    {id: 2, item: 'Issue Size'},
    {id: 3, item: 'Price Ranges'},
    {id: 4, item: 'Min invest/qty'}
]

export const IpoData = [
  {
    id: "ipo_001",
    company: "GO AIR",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129199/sxfczddsxsizqakd2cp8.jpg",
    dates: "4th – 7th Oct 2022",
    issueSize: "₹3600 Crores",
    priceBand: "₹50–60",
    investment: "₹50,000",
    sharesLots: "100 Shares / 5 Lots"
  },
  {
    id: "ipo_002",
    company: "BAJAJ ENERGY",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129296/mkyh0peuz8txt9x7wati.jpg",
    dates: "4th – 7th Oct 2022",
    issueSize: "₹3600 Crores",
    priceBand: "₹50–60",
    investment: "₹50,000",
    sharesLots: "100 Shares / 5 Lots"
  },
  {
    id: "ipo_003",
    company: "OYO",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129327/j6sfsbwouc48r63p9rtj.png",
    dates: "To be announced",
    issueSize: "₹3600 Crores",
    priceBand: "₹50–60",
    investment: "₹50,000",
    sharesLots: "100 Shares / 5 Lots"
  },
  {
    id: "ipo_004",
    company: "TATA CAPITAL",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129368/i7z5tg1mvtb6fembbtde.png",
    dates: "12th – 15th Nov 2022",
    issueSize: "₹4200 Crores",
    priceBand: "₹180–200",
    investment: "₹48,000",
    sharesLots: "240 Shares / 6 Lots"
  },
  {
    id: "ipo_005",
    company: "PHARMEASY",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129392/ffsupcypopo6mkuasepo.jpg",
    dates: "20th – 23rd Nov 2022",
    issueSize: "₹2800 Crores",
    priceBand: "₹95–105",
    investment: "₹49,875",
    sharesLots: "475 Shares / 5 Lots"
  },
  {
    id: "ipo_006",
    company: "PAYTM INSURANCE",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129418/xtlfzlvcrnnxtpib2nra.png",
    dates: "1st – 4th Dec 2022",
    issueSize: "₹3100 Crores",
    priceBand: "₹120–130",
    investment: "₹52,000",
    sharesLots: "400 Shares / 4 Lots"
  }
]


export const IpoDetailItems = [
  {
    id: "ipo_001",
    company: "GO AIR",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129199/sxfczddsxsizqakd2cp8.jpg",
    companyLegalName: "Go Air Private Limited",
    ipoDetails: {
      issueSize: "₹3,600 Cr.",
      priceRange: "₹50 – 60",
      minimumAmount: "₹50,000",
      lotSize: "100 shares / 5 lots",
      issueDates: "4 Oct – 7 Oct 2022",
      listedOn: "12 Oct 2022",
      listedPrice: "₹58",
      listingGains: "₹6 (11.5%)"
    },
    ipoTimeline: [
      { stage: "Bidding starts", date: "4 Oct 2022" },
      { stage: "Bidding ends", date: "7 Oct 2022" },
      { stage: "Allotment finalization", date: "10 Oct 2022" },
      { stage: "Refund initiation", date: "10 Oct 2022" },
      { stage: "Demat transfer", date: "11 Oct 2022" },
      { stage: "Listing date", date: "12 Oct 2022" }
    ]
  },
  {
    id: "ipo_002",
    company: "BAJAJ ENERGY",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129296/mkyh0peuz8txt9x7wati.jpg",
    companyLegalName: "Bajaj Energy Limited",
    ipoDetails: {
      issueSize: "₹3,600 Cr.",
      priceRange: "₹50 – 60",
      minimumAmount: "₹50,000",
      lotSize: "100 shares / 5 lots",
      issueDates: "4 Oct – 7 Oct 2022",
      listedOn: "13 Oct 2022",
      listedPrice: "₹55",
      listingGains: "₹3 (5.8%)"
    },
    ipoTimeline: [
      { stage: "Bidding starts", date: "4 Oct 2022" },
      { stage: "Bidding ends", date: "7 Oct 2022" },
      { stage: "Allotment finalization", date: "11 Oct 2022" },
      { stage: "Refund initiation", date: "11 Oct 2022" },
      { stage: "Demat transfer", date: "12 Oct 2022" },
      { stage: "Listing date", date: "13 Oct 2022" }
    ]
  },
  {
    id: "ipo_003",
    company: "OYO",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129327/j6sfsbwouc48r63p9rtj.png",
    companyLegalName: "OYO Private Limited",
    ipoDetails: {
      issueSize: "₹3,600 – 3,700 Cr.",
      priceRange: "₹100 – 200",
      minimumAmount: "₹50,000",
      lotSize: "150 shares / lots",
      issueDates: "12 Dec – 15 Dec 2022",
      listedOn: "15 Dec 2022",
      listedPrice: "₹150",
      listingGains: "₹10 (10.0%)"
    },
    ipoTimeline: [
      { stage: "Bidding starts", date: "12 Dec 2022" },
      { stage: "Bidding ends", date: "15 Dec 2022" },
      { stage: "Allotment finalization", date: "18 Dec 2022" },
      { stage: "Refund initiation", date: "18 Dec 2022" },
      { stage: "Demat transfer", date: "18 Dec 2022" },
      { stage: "Listing date", date: "21 Dec 2022" }
    ]
  },
  {
    id: "ipo_004",
    company: "TATA CAPITAL",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129368/i7z5tg1mvtb6fembbtde.png",
    companyLegalName: "Tata Capital Limited",
    ipoDetails: {
      issueSize: "₹4,200 Cr.",
      priceRange: "₹180 – 200",
      minimumAmount: "₹48,000",
      lotSize: "240 shares / 6 lots",
      issueDates: "12 Nov – 15 Nov 2022",
      listedOn: "21 Nov 2022",
      listedPrice: "₹210",
      listingGains: "₹15 (7.7%)"
    },
    ipoTimeline: [
      { stage: "Bidding starts", date: "12 Nov 2022" },
      { stage: "Bidding ends", date: "15 Nov 2022" },
      { stage: "Allotment finalization", date: "17 Nov 2022" },
      { stage: "Refund initiation", date: "17 Nov 2022" },
      { stage: "Demat transfer", date: "18 Nov 2022" },
      { stage: "Listing date", date: "21 Nov 2022" }
    ]
  },
  {
    id: "ipo_005",
    company: "PHARMEASY",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129392/ffsupcypopo6mkuasepo.jpg",
    companyLegalName: "API Holdings Limited",
    ipoDetails: {
      issueSize: "₹2,800 Cr.",
      priceRange: "₹95 – 105",
      minimumAmount: "₹49,875",
      lotSize: "475 shares / 5 lots",
      issueDates: "20 Nov – 23 Nov 2022",
      listedOn: "29 Nov 2022",
      listedPrice: "₹98",
      listingGains: "-₹2 (-2.0%)"
    },
    ipoTimeline: [
      { stage: "Bidding starts", date: "20 Nov 2022" },
      { stage: "Bidding ends", date: "23 Nov 2022" },
      { stage: "Allotment finalization", date: "25 Nov 2022" },
      { stage: "Refund initiation", date: "25 Nov 2022" },
      { stage: "Demat transfer", date: "28 Nov 2022" },
      { stage: "Listing date", date: "29 Nov 2022" }
    ]
  },
  {
    id: "ipo_006",
    company: "PAYTM INSURANCE",
    logo: "https://res.cloudinary.com/dh1akzmfk/image/upload/v1766129418/xtlfzlvcrnnxtpib2nra.png",
    companyLegalName: "Paytm Insurance Broking Limited",
    ipoDetails: {
      issueSize: "₹3,100 Cr.",
      priceRange: "₹120 – 130",
      minimumAmount: "₹52,000",
      lotSize: "400 shares / 4 lots",
      issueDates: "1 Dec – 4 Dec 2022",
      listedOn: "9 Dec 2022",
      listedPrice: "₹135",
      listingGains: "₹10 (8.0%)"
    },
    ipoTimeline: [
      { stage: "Bidding starts", date: "1 Dec 2022" },
      { stage: "Bidding ends", date: "4 Dec 2022" },
      { stage: "Allotment finalization", date: "6 Dec 2022" },
      { stage: "Refund initiation", date: "6 Dec 2022" },
      { stage: "Demat transfer", date: "8 Dec 2022" },
      { stage: "Listing date", date: "9 Dec 2022" }
    ]
  }
]