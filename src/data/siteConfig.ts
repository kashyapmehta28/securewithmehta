export interface PhoneNumberConfig {
  display: string;
  raw: string;
  tel: string;
  isWhatsApp: boolean;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: 'personal' | 'motor' | 'commercial' | 'engineering' | 'liability' | 'specialty';
  icon: string;
  highlights: string[];
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const SITE_CONFIG = {
  brand: {
    fullName: "Secure With Mehta",
    formerName: "Mehta Associates",
    tagline: "Life & General Insurance Consultancy",
    founder: "Kashyap Mehta",
    role: "Insurance Advisor & Consultant",
    logo: "/images/logo.png",
    temporaryWordmark: "SWM",
    temporaryWordmarkSubtext: "Secure With Mehta",
    historyYears: 39,
    baseLocation: "Mumbai",
    officeLocation: "Mumbai, Maharashtra",
    officeAddressNote: "Consultancy based in Mumbai, serving clients across Maharashtra, pan-India, and NRIs.",
    reach: "Serving clients in Mumbai, across all Indian states, and international NRI insurance inquiries (subject to regulatory frameworks and insurer availability).",
    transitionNote: "Formerly Mehta Associates — Now Secure With Mehta",
    transitionQuote: "Formerly operating as Mehta Associates, our firm is now Secure With Mehta — carrying forward 39 years of trusted insurance guidance with an evolved, client-first vision.",
    businessDescription: "Secure With Mehta (formerly known as Mehta Associates) is a 39-year-old insurance consultancy firm specializing in comprehensive Life and General Insurance advisory. (Legal and regulatory broker/agency designation subject to final confirmation before publishing).",
  },
  contacts: {
    // Both supplied numbers
    numbers: [
      {
        display: "98925 79563",
        raw: "9892579563",
        tel: "tel:+919892579563",
        isWhatsApp: true,
        label: "WhatsApp & Direct Call"
      },
      {
        display: "81696 59127",
        raw: "8169659127",
        tel: "tel:+918169659127",
        isWhatsApp: true,
        label: "Alternate Consultation Line"
      }
    ] as PhoneNumberConfig[],
    // Default number for WhatsApp links (Country code 91, digits only)
    defaultWhatsAppNumber: "919892579563",
    secondaryWhatsAppNumber: "918169659127",
    email: "kashyapmehta28@gmail.com",
    workingHours: "Monday to Saturday: 10:00 AM – 7:30 PM IST",
  },
  policyReview: {
    // Configurable fee settings per prompt instructions:
    // "The source introduction mentions a nominal policy survey fee of ₹1,999. Make this fee configurable and publish it only after the client confirms it."
    nominalFeeAmount: 1999,
    isFeePublished: false, // Set to true only after client confirmation
    feeExplanation: "Comprehensive independent policy audit and gap analysis. Service charges are communicated transparently prior to review commencement.",
    tentativeFeeNote: "Nominal policy survey fee of ₹1,999 (subject to final client confirmation prior to publishing).",
  },
  disclaimers: {
    insuranceScopeOnly: "Scope Notice: Secure With Mehta exclusively provides advisory and facilitation services for Life and General Insurance products. We do not offer mutual funds, loans, stock investments, or non-insurance wealth schemes on this portal.",
    noClaimsGuarantee: "Claim Advisory Notice: Secure With Mehta assists policyholders with claims guidance, document verification, and insurer escalation. We do not underwrite insurance policies or guarantee claim settlements, which are solely determined by the respective insurer in accordance with policy terms, conditions, and applicable IRDAI regulations.",
    regulatoryStatus: "Regulatory & Legal Verification: The descriptions of brokership status and agency affiliations reflect client-provided introductory data and are subject to formal regulatory verification prior to official commercial publishing.",
  },
  hero: {
    headline: "Protection for What Matters. Guidance You Can Trust.",
    subheadline: "Backed by 39 years of trusted business heritage in Mumbai, Kashyap Mehta provides independent, thorough, and personalized guidance across Life and General Insurance portfolios.",
    badges: [
      "Established Advisory",
      "Mumbai Base",
      "Personalized Guidance",
      "All Major Insurers Evaluated"
    ]
  },
  stats: [
    {
      value: 2000,
      suffix: "+",
      label: "Happy Clients",
      subtext: ""
    },
    {
      value: 99,
      suffix: "%",
      label: "Claim Settled",
      subtext: ""   
    },
    {
      value: 38,
      suffix: "+",
      label: "Specialized Insurance Lines",
      subtext: ""
    },
    {
      value: 100,
      suffix: "%",
      label: "Independent Policy Review",
      subtext: ""
    }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Health & Personal Lines
  {
    id: "health-insurance",
    title: "Health Insurance (Individual & Family)",
    shortDesc: "Comprehensive medical protection safeguarding you and your family against rising healthcare and hospitalization expenses.",
    category: "personal",
    icon: "HeartPulse",
    popular: true,
    highlights: [
      "Cashless hospitalization across leading pan-India network hospitals",
      "Individual and Family Floater coverage with restore/recharge benefits",
      "Pre & post-hospitalization, day-care procedures & modern treatments",
      "Super Top-up plans to multiply sum insured affordably"
    ]
  },
  {
    id: "senior-citizen-health",
    title: "Senior Citizens Health Insurance",
    shortDesc: "Dedicated medical protection tailored for elderly parents and seniors with relaxed entry age and pre-existing disease terms.",
    category: "personal",
    icon: "Activity",
    popular: true,
    highlights: [
      "Higher sum insured options designed specifically for seniors above 60",
      "Coverage for chronic treatments, cardiac care, oncology, and joint replacements",
      "Annual health check-ups and home healthcare options",
      "Tailored co-pay and waiting period structures suited for seniors"
    ]
  },
  {
    id: "critical-illness-insurance",
    title: "Critical Illness Insurance",
    shortDesc: "Lump-sum payout upon diagnosis of major life-threatening conditions like cancer, stroke, kidney failure, or heart attack.",
    category: "personal",
    icon: "HeartPulse",
    highlights: [
      "Fixed lump-sum payout regardless of actual hospital medical bills",
      "Income replacement and debt settlement support during recovery",
      "Covers 30+ critical illnesses and major organ transplants",
      "Independent standalone policy or add-on to existing health cover"
    ]
  },
  {
    id: "personal-accident-insurance",
    title: "Personal Accident Insurance",
    shortDesc: "Financial security shielding your family against accidental death, permanent total disability, and temporary loss of income.",
    category: "personal",
    icon: "ShieldAlert",
    highlights: [
      "100% capital sum insured on accidental demise or permanent total disability",
      "Weekly compensation for temporary total disablement and job absence",
      "Worldwide 24x7 coverage across travel, transit, and daily commute",
      "Child education support and funeral expense allowances"
    ]
  },
  {
    id: "hospital-cash",
    title: "Hospital Cash Insurance",
    shortDesc: "Guaranteed daily cash allowance for every day of hospitalization to cover out-of-pocket expenses and lost wages.",
    category: "personal",
    icon: "Banknote",
    highlights: [
      "Fixed daily cash payout from ₹1,000 to ₹10,000+ per day",
      "Double daily benefit for ICU admissions",
      "Covers non-medical items, conveyancing, food, and attendant costs",
      "Payable in addition to any regular mediclaim policy"
    ]
  },
  {
    id: "life-insurance",
    title: "Life Insurance (Individual & Group)",
    shortDesc: "Financial security for your family's lifestyle, future milestones, and debt-free continuity in any untimely event.",
    category: "personal",
    icon: "ShieldCheck",
    popular: true,
    highlights: [
      "Pure Term Insurance with high coverage at cost-effective premiums",
      "Endowment, Whole Life, and Guaranteed Income structures",
      "Loan protection (home & business liabilities continuity)",
      "Corporate Group Term Life solutions for company employees"
    ]
  },

  // 2. Motor & Vehicles
  {
    id: "car-insurance",
    title: "Motor (Car) Insurance",
    shortDesc: "Complete protection for private and corporate cars against accidental damages, theft, fire, and third-party liabilities.",
    category: "motor",
    icon: "Car",
    popular: true,
    highlights: [
      "Bumper-to-Bumper Zero Depreciation cover options",
      "Engine & Gearbox protection, consumables, tyre & key replacement",
      "24/7 Roadside Assistance (RSA) and towing support across India",
      "Seamless cashless garage network with quick survey coordination"
    ]
  },
  {
    id: "bike-scooter-insurance",
    title: "Bike / Scooter Insurance",
    shortDesc: "Mandatory third-party and comprehensive own-damage policies for motorcycles, scooters, and electric two-wheelers.",
    category: "motor",
    icon: "Bike",
    highlights: [
      "Multi-year policy options (1 to 3 years) for uninterrupted compliance",
      "Accidental damage, personal accident owner-driver cover & theft protection",
      "Third-party property damage and bodily injury compliance",
      "Zero depreciation and return-to-invoice rider options"
    ]
  },
  {
    id: "commercial-vehicle-insurance",
    title: "Commercial Vehicle Insurance (Tempo, Truck, Trailer, Taxi)",
    shortDesc: "End-to-end fleet and individual commercial vehicle coverage for goods-carrying tempos, lorries, trailers, passenger cabs, and buses.",
    category: "motor",
    icon: "Truck",
    popular: true,
    highlights: [
      "Comprehensive own-damage and third-party liability for commercial transport",
      "Coverage for Light Commercial Vehicles (LCV), Heavy Goods Vehicles (HGV), and trailers",
      "Towing charges, legal liability to paid drivers, cleaners, and conductors",
      "Prompt cashless claim settlements to minimize fleet downtime"
    ]
  },

  // 3. Marine, Transit & Engineering
  {
    id: "marine-transit-insurance",
    title: "Marine / Transit Insurance (Export, Import & Domestic)",
    shortDesc: "Complete transit risk protection for raw materials, finished inventory, and machinery moved by road, rail, air, or sea freight.",
    category: "engineering",
    icon: "Ship",
    popular: true,
    highlights: [
      "Institute Cargo Clauses (ICC A, B, C) and Inland Transit (ITC A, B) coverage",
      "Single transit voyage policies or Annual Open Marine policies",
      "Protection against collision, overturning, derailment, theft, hijack & rough handling",
      "Seamless coverage for export consignments, import shipments & domestic supply chains"
    ]
  },
  {
    id: "cash-in-transit-insurance",
    title: "Cash in Transit Insurance",
    shortDesc: "Security against robbery, theft, or armed dacoity of money, currency notes, and bullion while in transit between banks and premises.",
    category: "engineering",
    icon: "Banknote",
    highlights: [
      "Transit of money from bank to office premises for salary/payout disbursements",
      "Cash held in locked safe or strong room overnight",
      "Protection for merchant collections, field agents, and bullion delivery",
      "Coverage against armed hold-up, extortion, and violent robbery"
    ]
  },
  {
    id: "contractor-all-risk",
    title: "Contractor All Risk Policy (CAR)",
    shortDesc: "Comprehensive protection for civil engineering works, building construction projects, and infrastructure developments.",
    category: "engineering",
    icon: "HardHat",
    highlights: [
      "Physical loss or damage to contract works, temporary structures & raw materials",
      "Construction plant and equipment (CPE) damage coverage",
      "Third-party liability for property damage or bodily injury around project sites",
      "Natural disaster protection including flood, earthquake, storm, and landslide"
    ]
  },
  {
    id: "erection-all-risk",
    title: "Erection All Risk Policy (EAR)",
    shortDesc: "Risk protection for mechanical and electrical installation, plant erection, fabrication, testing, and commissioning.",
    category: "engineering",
    icon: "HardHat",
    highlights: [
      "Protection during storage, assembly, handling, and erection phases",
      "Testing and trial run breakdown and explosion protection",
      "Third-party liability arising from installation operations",
      "Faulty design, defective material & human error cover"
    ]
  },
  {
    id: "boiler-insurance",
    title: "Boiler & Pressure Plant Insurance",
    shortDesc: "Specialized cover for explosion or collapse of steam boilers, pressure vessels, and industrial processing piping.",
    category: "engineering",
    icon: "Gauge",
    highlights: [
      "Damage to boiler and surrounding property owned by insured",
      "Third-party liability for fatal injury or external property damage",
      "Protection against steam pressure explosion and thermal collapse",
      "Coverage for chemical processing, power generation, and manufacturing plants"
    ]
  },
  {
    id: "security-bond-insurance",
    title: "Security Bond / Surety Bond Insurance",
    shortDesc: "Financial guarantee instruments replacing traditional bank guarantees for government tenders, infrastructure bids, and commercial contracts.",
    category: "engineering",
    icon: "FileCheck",
    highlights: [
      "Bid bonds, performance bonds, advance payment bonds & retention bonds",
      "Frees up working capital limits and bank credit lines",
      "Recognized by Ministry of Finance and major public sector enterprises",
      "Quick assessment based on contractor financial strength and execution track record"
    ]
  },

  // 4. Commercial, Property & Enterprise
  {
    id: "fire-policy",
    title: "Standard Fire & Special Perils Policy",
    shortDesc: "Fundamental property protection against fire, explosion, lightning, storm, flood, inundation (STFI), and civil commotion.",
    category: "commercial",
    icon: "Flame",
    popular: true,
    highlights: [
      "Covers building structure, plant & machinery, furniture, fittings & stocks",
      "Protection against natural disasters like earthquake, flood, and cyclone",
      "Impact damage by road rail vehicles, aircraft damage & bursting of water pipes",
      "Architect and debris removal expense coverage"
    ]
  },
  {
    id: "burglary-policy",
    title: "Burglary & Housebreaking Policy",
    shortDesc: "Safeguards business premises against violent forced entry, theft, housebreaking, and armed hold-up.",
    category: "commercial",
    icon: "Lock",
    highlights: [
      "Damage to stock-in-trade, raw materials, goods held in trust & tools",
      "Damage caused to premises/shutters during attempted burglary",
      "Full value or First Loss basis declaration structures",
      "Essential protection for wholesale distributors, jewelers & retailers"
    ]
  },
  {
    id: "factory-insurance",
    title: "Factory Insurance (Industrial All Risk)",
    shortDesc: "Complete all-risk property, machinery breakdown, and business continuity protection for industrial manufacturing plants.",
    category: "commercial",
    icon: "Factory",
    popular: true,
    highlights: [
      "Machinery breakdown, boiler explosion & sudden electrical failure",
      "Fire, lightning, storm, tempest, flood & inundation (STFI)",
      "Stock-in-process and raw materials replacement valuation",
      "Business interruption / loss of gross profit protection"
    ]
  },
  {
    id: "godown-warehouse-insurance",
    title: "Godown / Warehouse Insurance",
    shortDesc: "Specialized inventory and storage risk protection for bulk warehousing logistics, commodities, and transit yards.",
    category: "commercial",
    icon: "Warehouse",
    popular: true,
    highlights: [
      "Declaration policy structures for fluctuating seasonal inventory values",
      "Protection against spontaneous combustion, water ingress, fire & burglary",
      "Violent entry, theft & loading/unloading accidental damages",
      "Tailored for wholesale traders, clearing agents & logistics operators"
    ]
  },
  {
    id: "office-insurance",
    title: "Office Insurance Package",
    shortDesc: "Comprehensive package protecting corporate offices and professional chambers against fire, equipment damage, and legal liabilities.",
    category: "commercial",
    icon: "Building2",
    highlights: [
      "Coverage for electronic equipment, servers, laptops & EPABX systems",
      "Burglary, housebreaking & accidental plate glass breakage",
      "Tenant liability, public liability & employee dishonesty protection",
      "Increased cost of working during office reinstatement periods"
    ]
  },
  {
    id: "shop-insurance",
    title: "Shop & Retail Store Insurance",
    shortDesc: "Customized multi-cover package tailored for retail shops, showrooms, department stores, and commercial trade outlets.",
    category: "commercial",
    icon: "Store",
    highlights: [
      "Protects merchandise stock, shop interiors, neon signs & display fixtures",
      "Covers fire, burglary, accidental damage & money kept in billing counter",
      "Plate glass frontage and neon sign external damage cover",
      "Public liability protection against accidental customer injuries"
    ]
  },
  {
    id: "flat-insurance",
    title: "Flat & Apartment Home Insurance",
    shortDesc: "Shielding your residential flat structure and valuable home contents against fire, earthquake, pipe burst, and burglary.",
    category: "commercial",
    icon: "Home",
    highlights: [
      "Building structure reinstatement cover against natural perils",
      "Valuable contents cover: electronics, home appliances, furniture & jewelry",
      "Alternative accommodation rent allowance during repair phases",
      "Suitable for homeowners, investors, and tenant interior covers"
    ]
  },
  {
    id: "housing-society-insurance",
    title: "Housing Society Insurance (Residential & Commercial)",
    shortDesc: "Specialized package policies tailored for cooperative housing societies (CHS) and commercial trade premises.",
    category: "commercial",
    icon: "Boxes",
    popular: true,
    highlights: [
      "Common areas: lifts, solar panels, water pumps, generators & clubhouses",
      "Building structural replacement cover against fire, earthquake & cyclone",
      "Third-party public premises liability & visitor safety compliance",
      "Management committee legal defense & employee fidelity cover"
    ]
  },
  {
    id: "hotel-insurance",
    title: "Hotel & Hospitality Insurance",
    shortDesc: "Tailored package cover for hotels, guest houses, and resorts safeguarding guest safety, building assets, and food liability.",
    category: "commercial",
    icon: "Building",
    highlights: [
      "Building structure, kitchen machinery, refrigeration & interior furniture",
      "Public liability and food & beverage contamination liability",
      "Guest property stored in rooms or safe deposit lockers",
      "Business interruption covering loss of room revenue after property peril"
    ]
  },
  {
    id: "cloud-kitchen-insurance",
    title: "Cloud Kitchen & Restaurant Insurance",
    shortDesc: "Comprehensive risk protection specifically designed for commercial delivery kitchens, food outlets, and catering hubs.",
    category: "commercial",
    icon: "UtensilsCrossed",
    highlights: [
      "Commercial ovens, fryers, refrigeration units & exhaust systems breakdown",
      "Food spoilage coverage due to temperature variation or power breakdown",
      "Fire and special perils for cooking stations and raw material stock",
      "Public and product liability including food safety allegations"
    ]
  },

  // 5. Professional Indemnity, Liability & Cyber
  {
    id: "doctor-indemnity",
    title: "Doctor Indemnity (Medical Malpractice)",
    shortDesc: "Specialized professional indemnity shielding doctors, surgeons, specialists, and clinics against medical negligence claims.",
    category: "liability",
    icon: "Stethoscope",
    popular: true,
    highlights: [
      "Defense costs, advocate fees, and court representation expenses",
      "Allegations of diagnostic errors, surgical complications, or treatment delays",
      "Coverage across OPD consultations, surgical procedures & emergency care",
      "Tailored limits of indemnity according to medical specialty risk profile"
    ]
  },
  {
    id: "lawyer-indemnity",
    title: "Lawyer & Legal Firm Indemnity",
    shortDesc: "Civil liability and errors & omissions protection for practicing advocates, solicitors, legal consultants, and law firms.",
    category: "liability",
    icon: "Scale",
    highlights: [
      "Protection against missed statutory deadlines, drafting oversights, or breach of duty",
      "Legal defense and forensic documentation expenses in regulatory inquiries",
      "Loss of client confidential documents and digital legal files",
      "Tailored for independent practitioners, partners, and corporate law firms"
    ]
  },
  {
    id: "ca-indemnity",
    title: "Chartered Accountant (CA) Indemnity",
    shortDesc: "Professional liability protection safeguarding CAs, audit firms, and tax consultants against audit negligence allegations.",
    category: "liability",
    icon: "Calculator",
    highlights: [
      "Allegations of audit misstatements, tax filing oversights, or compliance errors",
      "Representation costs before regulatory tribunals, courts, and disciplinary bodies",
      "Dishonesty of audit staff / employee breach coverage",
      "Protects personal and firm assets against substantial compensatory damages"
    ]
  },
  {
    id: "liability-insurance",
    title: "Comprehensive Liability Insurance (Public, Product & D&O)",
    shortDesc: "Shielding commercial enterprises against third-party bodily injury, property damage, and executive managerial liability.",
    category: "liability",
    icon: "Users",
    highlights: [
      "Commercial General Liability (CGL) and Public Liability Insurance",
      "Product Liability for manufacturers, packaging firms & exporters",
      "Directors & Officers (D&O) liability safeguarding executive decisions",
      "Court defense costs, investigation fees & approved settlement awards"
    ]
  },
  {
    id: "workmen-policy",
    title: "Workmen's Compensation Policy",
    shortDesc: "Statutory protection for employers against legal liability under the Employee's Compensation Act for workplace injuries and fatalities.",
    category: "liability",
    icon: "UsersRound",
    popular: true,
    highlights: [
      "Statutory compliance under Employee's Compensation Act 1923",
      "Covers fatal workplace accidents, permanent disability & temporary disablement",
      "Medical expenses incurred during occupational injuries",
      "Covers factory workers, construction labor, warehouse staff & contract workers"
    ]
  },
  {
    id: "group-health-insurance",
    title: "Group Health Insurance (Corporate / Employee)",
    shortDesc: "Customizable group mediclaim policies providing health cover to employees and their dependent families.",
    category: "liability",
    icon: "Users",
    popular: true,
    highlights: [
      "Zero waiting period for pre-existing diseases from Day 1",
      "Maternity cover, newborn baby cover & corporate buffer add-ons",
      "Cashless claims management through dedicated TPA / insurer portals",
      "Attract and retain talent with corporate employee wellness packages"
    ]
  },
  {
    id: "group-personal-accident",
    title: "Group Personal Accident Insurance",
    shortDesc: "24x7 worldwide accidental death and disability cover tailored for employees, factory personnel, and corporate teams.",
    category: "liability",
    icon: "Users",
    highlights: [
      "24-hour on-duty and off-duty worldwide coverage",
      "Accidental death, permanent total/partial disability & temporary disablement",
      "Child education fund allowances for deceased employees",
      "Cost-effective group premium rates with simple annual enrollment"
    ]
  },
  {
    id: "credit-insurance",
    title: "Trade Credit Insurance",
    shortDesc: "Safeguards your enterprise against commercial buyer default, protracted non-payment, and unexpected client insolvency.",
    category: "liability",
    icon: "ShieldAlert",
    highlights: [
      "Accounts receivable protection for domestic trade and international export sales",
      "Insolvency and bankruptcy protection for key commercial accounts",
      "Real-time buyer risk evaluation and credit rating insights",
      "Enhances trade financing and bank borrowing power"
    ]
  },
  {
    id: "cyber-crime-insurance",
    title: "Cyber Crime Insurance (Individual & Corporate)",
    shortDesc: "Financial shielding against phishing fraud, unauthorized bank transfers, data breach legal costs, ransomware, and identity theft.",
    category: "liability",
    icon: "Laptop",
    popular: true,
    highlights: [
      "Individual cover: online transaction fraud, phishing, identity theft & cyber bullying",
      "Corporate cover: data breach liabilities, forensics, extortion & PR remediation",
      "Restoration costs for corrupted servers, databases, and IT systems",
      "Legal defense and notification costs under data privacy regulations"
    ]
  },

  // 6. Specialty Lines
  {
    id: "pet-insurance",
    title: "Pet Insurance (Dog & Cat)",
    shortDesc: "Comprehensive veterinary healthcare, surgical, diagnostic, and third-party liability cover for canine and feline companions.",
    category: "specialty",
    icon: "PawPrint",
    highlights: [
      "Emergency veterinary hospitalization, surgical costs & diagnostics for dogs and cats",
      "Treatment for critical illnesses, tick fever, fracture & accident trauma",
      "Third-party liability protection against pet bite or property damage",
      "Lost pet recovery and advertising expense allowances"
    ]
  },
  {
    id: "mobile-insurance",
    title: "Mobile & Electronic Gadget Insurance",
    shortDesc: "Repair and replacement protection for smartphones, tablets, and electronic devices against screen damage, liquids, and theft.",
    category: "specialty",
    icon: "Smartphone",
    highlights: [
      "Accidental physical damage and cracked screen repairs",
      "Liquid damage and water immersion protection",
      "Theft, burglary, and snatched device coverage with FIR filing support",
      "Doorstep pickup and authorized service center repair processing"
    ]
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance (Single Trip Overseas & Domestic)",
    shortDesc: "Essential protection covering overseas medical emergencies, trip cancellations, lost baggage, and passport replacement.",
    category: "specialty",
    icon: "Plane",
    highlights: [
      "Emergency medical treatment, hospitalization & medical evacuation abroad",
      "Schengen visa compliant with €30,000+ medical insurance mandatory limits",
      "Coverage for flight cancellations, delays & missed flight connections",
      "Total loss or delayed check-in baggage and emergency cash assistance"
    ]
  },
  {
    id: "annual-travel-insurance",
    title: "Annual Multi-Trip Travel Insurance",
    shortDesc: "Cost-effective 365-day worldwide coverage designed for frequent corporate executives, exporters, and international consultants.",
    category: "specialty",
    icon: "Plane",
    highlights: [
      "Single annual policy covering unlimited international business & leisure trips",
      "30, 45, or 60 days trip duration options tailored to your travel habits",
      "High medical sum insured up to $500,000 / $1,000,000",
      "Saves time and money compared to purchasing separate single-trip policies"
    ]
  }
];


export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Share Your Requirement",
    description: "Connect via WhatsApp, direct phone call, or our structured inquiry form outlining your insurance type and priorities.",
    icon: "MessageSquareCheck"
  },
  {
    step: "02",
    title: "Discuss Your Specific Needs",
    description: "Kashyap Mehta personally reviews your profile, current exposure, family or commercial risk profile to identify necessary covers.",
    icon: "UserCheck"
  },
  {
    step: "03",
    title: "Review Options & Terms",
    description: "Receive an objective comparison of suitable plans across established insurance companies, highlighting benefits, waiting periods, and exclusions.",
    icon: "FileSpreadsheet"
  },
  {
    step: "04",
    title: "Proceed with Selected Provider",
    description: "Smooth application support, medical test coordination if required, prompt policy issuance, and lifelong claim-time assistance.",
    icon: "CheckCircle2"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Personalized, Independent Guidance",
    description: "Unbiased recommendations tailored to your actual protection needs.",
    icon: "Compass"
  },
  {
    title: "Decoding Fine Print & Exclusions",
    description: "Complete clarity on waiting periods, copays, and claim clauses.",
    icon: "BookOpenCheck"
  },
  {
    title: "38+ Specialized Insurance Lines",
    description: "One trusted advisor for personal, commercial, and industrial covers.",
    icon: "Layers"
  },
  {
    title: "Direct WhatsApp & Phone Access",
    description: "Direct advisor consultation with zero call-center delays.",
    icon: "Smartphone"
  },
  {
    title: "Existing Policy Gap Analysis",
    description: "Unbiased audits to spot underinsurance and hidden exclusions.",
    icon: "ShieldAlert"
  },
  {
    title: "Mumbai Base & Pan-India Reach",
    description: "Anchored in Mumbai with seamless consultation pan-India.",
    icon: "MapPin"
  }
];

export const POLICY_REVIEW_FEATURES = [
  {
    title: "Coverage Adequacy Assessment",
    description: "Evaluate whether your existing sum insured aligns with today's medical inflation or current commercial replacement costs.",
    icon: "TrendingUp"
  },
  {
    title: "Exclusion & Condition Mapping",
    description: "Detailed breakdown of specific disease waiting periods, room-rent capping, copay clauses, and factory peril limits.",
    icon: "Search"
  },
  {
    title: "Claims Advisory & Support Guidance",
    description: "Guidance on preparing claim files, coordinating cashless authorizations, and interpreting insurer queries. (Note: We do not guarantee claim settlement, which is governed by insurer policy terms).",
    icon: "LifeBuoy"
  },
  {
    title: "Agent Change & Portfolio Consolidation",
    description: "Assistance for policyholders dissatisfied with their historical service agents seeking professional portfolio management.",
    icon: "RefreshCw"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "What insurance categories does Secure With Mehta handle?",
    answer: "We offer complete advisory across 38+ lines including Health, Life, Motor, Commercial Property, Marine Transit, and Corporate Liability."
  },
  {
    question: "How do I request an insurance quote or consultation?",
    answer: "Submit our quick WhatsApp form or call 98925 79563 to receive customized, unbiased plan comparisons."
  },
  {
    question: "What does an existing policy review involve?",
    answer: "We audit your policy fine print to identify hidden sub-limits, coverage gaps, room-rent capping, and inflation adequacy."
  },
  {
    question: "Is there a fee for reviewing existing insurance policies?",
    answer: "Initial consultations are complimentary. Comprehensive in-depth audits may carry a nominal survey fee, communicated transparently upfront."
  },
  {
    question: "How does Secure With Mehta assist with claim-related queries?",
    answer: "We guide you on documentation, hospital coordination, and surveyor protocols to ensure smooth, hassle-free claim submissions."
  },
  {
    question: "Why do insurance premiums and coverage vary between insurers?",
    answer: "Insurers calculate risk differently based on claim settlement ratios, hospital networks, underwriting rules, and included riders."
  },
  {
    question: "Can I consult Secure With Mehta if I live outside Mumbai or as an NRI?",
    answer: "Yes, we serve clients across all Indian states and assist NRIs remotely with compliant Indian life and general insurance solutions."
  },
  {
    question: "Does Secure With Mehta provide mutual funds or loan facilities?",
    answer: "No, our firm is strictly focused on pure Life and General Insurance advisory with zero non-insurance products or wealth schemes."
  }
];
