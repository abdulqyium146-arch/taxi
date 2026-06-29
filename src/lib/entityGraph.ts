/**
 * Entity Relationship Graph
 * Defines every semantic entity in the Taxi Bhai knowledge graph and how
 * they relate to each other. Used by the internal linking engine to surface
 * contextually relevant pages and build topical authority clusters.
 */

export type EntityType =
  | "Organization"
  | "City"
  | "Airport"
  | "Service"
  | "Route"
  | "ReligiousPlace"
  | "Concept"
  | "Vehicle";

export interface Entity {
  id: string;
  name: string;
  nameAr?: string;
  type: EntityType;
  url: string;
  description: string;
  relatedEntities: string[];  // entity ids
  sameAs?: string[];           // Wikidata / Wikipedia
  partOf?: string;             // parent entity id
  subjectOf?: string[];        // URLs where this entity is prominently mentioned
}

export const ENTITY_GRAPH: Record<string, Entity> = {
  // ── Organization ─────────────────────────────────────────────────────────
  "taxi-bhai": {
    id: "taxi-bhai",
    name: "Taxi Bhai",
    type: "Organization",
    url: "/",
    description: "Saudi Arabia's most trusted 24/7 taxi service across Jeddah, Makkah, Madinah, Taif and Badr",
    relatedEntities: ["saudi-taxi-service", "jeddah", "makkah", "madinah", "airport-transfer", "umrah-taxi", "intercity-taxi"],
    sameAs: ["https://wa.me/966573067785"],
    subjectOf: ["/", "/about"],
  },
  "saudi-taxi-service": {
    id: "saudi-taxi-service",
    name: "Saudi Taxi Service",
    type: "Service",
    url: "/services/intercity-taxi",
    description: "Professional taxi service across the western region of Saudi Arabia",
    relatedEntities: ["taxi-bhai", "jeddah", "makkah", "madinah", "taif", "badr", "intercity-taxi"],
  },

  // ── Cities ────────────────────────────────────────────────────────────────
  "jeddah": {
    id: "jeddah",
    name: "Jeddah",
    nameAr: "جدة",
    type: "City",
    url: "/locations/jeddah",
    description: "Commercial capital of Saudi Arabia and gateway to the holy cities",
    relatedEntities: ["kaia-airport", "makkah", "madinah", "taif", "airport-transfer", "umrah-taxi", "intercity-taxi"],
    sameAs: ["https://www.wikidata.org/wiki/Q127456"],
    subjectOf: ["/locations/jeddah", "/taxi-jeddah-to-makkah", "/taxi-jeddah-to-madinah", "/taxi-jeddah-to-taif", "/taxi-jeddah-to-badr"],
  },
  "makkah": {
    id: "makkah",
    name: "Makkah",
    nameAr: "مكة المكرمة",
    type: "City",
    url: "/locations/makkah",
    description: "Holiest city in Islam, home to Masjid al-Haram and the Kaaba",
    relatedEntities: ["masjid-al-haram", "kaaba", "jeddah", "madinah", "taif", "umrah-taxi", "haram-transfer", "ziyarat-taxi"],
    sameAs: ["https://www.wikidata.org/wiki/Q3947"],
    subjectOf: ["/locations/makkah", "/taxi-makkah-to-madinah", "/taxi-makkah-to-jeddah", "/taxi-makkah-to-taif"],
  },
  "madinah": {
    id: "madinah",
    name: "Madinah",
    nameAr: "المدينة المنورة",
    type: "City",
    url: "/locations/madinah",
    description: "City of the Prophet Muhammad ﷺ, second holiest city in Islam",
    relatedEntities: ["masjid-nabawi", "makkah", "jeddah", "badr", "ziyarat-taxi", "umrah-taxi", "haram-transfer"],
    sameAs: ["https://www.wikidata.org/wiki/Q5725"],
    subjectOf: ["/locations/madinah", "/taxi-madinah-to-makkah", "/taxi-madinah-to-jeddah", "/taxi-madinah-to-badr"],
  },
  "taif": {
    id: "taif",
    name: "Taif",
    nameAr: "الطائف",
    type: "City",
    url: "/locations/taif",
    description: "Mountain city at 1,800m elevation, known as the City of Roses",
    relatedEntities: ["makkah", "jeddah", "intercity-taxi", "vip-taxi"],
    subjectOf: ["/locations/taif", "/taxi-taif-to-makkah", "/taxi-taif-to-jeddah", "/taxi-jeddah-to-taif"],
  },
  "badr": {
    id: "badr",
    name: "Badr",
    nameAr: "بدر",
    type: "City",
    url: "/locations/badr",
    description: "Historic site of the Battle of Badr, major Ziyarat destination 155km from Madinah",
    relatedEntities: ["madinah", "ziyarat-taxi", "intercity-taxi", "masjid-nabawi"],
    subjectOf: ["/locations/badr", "/taxi-madinah-to-badr", "/taxi-jeddah-to-badr"],
  },

  // ── Airport ───────────────────────────────────────────────────────────────
  "kaia-airport": {
    id: "kaia-airport",
    name: "King Abdulaziz International Airport",
    type: "Airport",
    url: "/services/airport-transfer",
    description: "Primary international airport for Jeddah and western Saudi Arabia (IATA: JED)",
    relatedEntities: ["jeddah", "airport-transfer", "makkah", "madinah", "umrah-taxi", "vip-taxi"],
    sameAs: ["https://www.wikidata.org/wiki/Q898723"],
    partOf: "jeddah",
    subjectOf: ["/services/airport-transfer", "/taxi-jeddah-airport-to-makkah", "/taxi-jeddah-airport-to-madinah", "/taxi-haram-to-airport"],
  },

  // ── Religious Sites ───────────────────────────────────────────────────────
  "masjid-al-haram": {
    id: "masjid-al-haram",
    name: "Masjid al-Haram",
    nameAr: "المسجد الحرام",
    type: "ReligiousPlace",
    url: "/services/haram-transfer",
    description: "The Grand Mosque in Makkah — holiest site in Islam",
    relatedEntities: ["makkah", "kaaba", "haram-transfer", "umrah-taxi", "ziyarat-taxi"],
    sameAs: ["https://www.wikidata.org/wiki/Q8068"],
    partOf: "makkah",
  },
  "masjid-nabawi": {
    id: "masjid-nabawi",
    name: "Masjid al-Nabawi",
    nameAr: "المسجد النبوي",
    type: "ReligiousPlace",
    url: "/locations/madinah",
    description: "Prophet's Mosque in Madinah — burial site of Prophet Muhammad ﷺ",
    relatedEntities: ["madinah", "ziyarat-taxi", "haram-transfer", "umrah-taxi"],
    sameAs: ["https://www.wikidata.org/wiki/Q171271"],
    partOf: "madinah",
  },
  "kaaba": {
    id: "kaaba",
    name: "Kaaba",
    nameAr: "الكعبة المشرفة",
    type: "ReligiousPlace",
    url: "/locations/makkah",
    description: "Cube-shaped structure at the center of Masjid al-Haram, qibla direction for Muslims",
    relatedEntities: ["masjid-al-haram", "makkah", "umrah-taxi"],
    sameAs: ["https://www.wikidata.org/wiki/Q55021"],
    partOf: "makkah",
  },

  // ── Services ──────────────────────────────────────────────────────────────
  "airport-transfer": {
    id: "airport-transfer",
    name: "Airport Transfer",
    type: "Service",
    url: "/services/airport-transfer",
    description: "24/7 flight-tracked airport pickup and drop-off from King Abdulaziz International Airport",
    relatedEntities: ["kaia-airport", "jeddah", "makkah", "madinah", "umrah-taxi", "vip-taxi", "family-taxi"],
    subjectOf: ["/services/airport-transfer", "/taxi-jeddah-airport-to-makkah", "/taxi-jeddah-airport-to-madinah", "/taxi-haram-to-airport"],
  },
  "umrah-taxi": {
    id: "umrah-taxi",
    name: "Umrah Taxi",
    type: "Service",
    url: "/services/umrah-taxi",
    description: "Specialized taxi for Umrah pilgrims: airport → Miqat → Haram → Madinah",
    relatedEntities: ["makkah", "madinah", "kaia-airport", "airport-transfer", "haram-transfer", "ziyarat-taxi", "umrah"],
    subjectOf: ["/services/umrah-taxi", "/locations/makkah", "/locations/madinah"],
  },
  "ziyarat-taxi": {
    id: "ziyarat-taxi",
    name: "Ziyarat Taxi",
    type: "Service",
    url: "/services/ziyarat-taxi",
    description: "Guided Ziyarat tour transport to Islamic historical sites in Madinah and Makkah",
    relatedEntities: ["madinah", "makkah", "badr", "umrah-taxi", "haram-transfer", "ziyarat"],
    subjectOf: ["/services/ziyarat-taxi", "/locations/madinah", "/locations/badr"],
  },
  "haram-transfer": {
    id: "haram-transfer",
    name: "Haram Transfer",
    type: "Service",
    url: "/services/haram-transfer",
    description: "Hotel-to-Haram shuttle service in Makkah and Madinah, 24 hours",
    relatedEntities: ["masjid-al-haram", "masjid-nabawi", "makkah", "madinah", "umrah-taxi"],
    subjectOf: ["/services/haram-transfer", "/locations/makkah", "/locations/madinah"],
  },
  "vip-taxi": {
    id: "vip-taxi",
    name: "VIP Taxi",
    type: "Service",
    url: "/services/vip-taxi",
    description: "Luxury chauffeur service with premium vehicles (Lexus, GMC Yukon)",
    relatedEntities: ["airport-transfer", "intercity-taxi", "family-taxi"],
    subjectOf: ["/services/vip-taxi"],
  },
  "family-taxi": {
    id: "family-taxi",
    name: "Family Taxi",
    type: "Service",
    url: "/services/family-taxi",
    description: "Spacious vehicles for families and groups, child seat available",
    relatedEntities: ["vip-taxi", "intercity-taxi", "umrah-taxi"],
    subjectOf: ["/services/family-taxi"],
  },
  "intercity-taxi": {
    id: "intercity-taxi",
    name: "Intercity Taxi",
    type: "Service",
    url: "/services/intercity-taxi",
    description: "Fixed-price city-to-city taxi across western Saudi Arabia",
    relatedEntities: ["jeddah", "makkah", "madinah", "taif", "badr", "vip-taxi", "family-taxi"],
    subjectOf: ["/services/intercity-taxi", "/services/city-to-city"],
  },

  // ── Concepts ──────────────────────────────────────────────────────────────
  "umrah": {
    id: "umrah",
    name: "Umrah",
    nameAr: "العمرة",
    type: "Concept",
    url: "/services/umrah-taxi",
    description: "Islamic pilgrimage to Makkah, performed at any time of year",
    relatedEntities: ["makkah", "madinah", "umrah-taxi", "haram-transfer", "airport-transfer", "kaia-airport"],
    sameAs: ["https://www.wikidata.org/wiki/Q193840"],
  },
  "ziyarat": {
    id: "ziyarat",
    name: "Ziyarat",
    nameAr: "زيارة",
    type: "Concept",
    url: "/services/ziyarat-taxi",
    description: "Visitation of Islamic sacred sites — an act of devotion for Muslim pilgrims",
    relatedEntities: ["madinah", "makkah", "badr", "ziyarat-taxi", "umrah-taxi"],
  },
  "hajj": {
    id: "hajj",
    name: "Hajj",
    nameAr: "الحج",
    type: "Concept",
    url: "/services/umrah-taxi",
    description: "Annual Islamic pilgrimage to Makkah — one of the Five Pillars of Islam",
    relatedEntities: ["makkah", "umrah-taxi", "airport-transfer", "kaia-airport"],
    sameAs: ["https://www.wikidata.org/wiki/Q6979"],
  },
  "pilgrim-transport": {
    id: "pilgrim-transport",
    name: "Pilgrim Transport",
    type: "Concept",
    url: "/services/umrah-taxi",
    description: "Transportation solutions for Umrah and Hajj pilgrims across Saudi Arabia",
    relatedEntities: ["umrah-taxi", "ziyarat-taxi", "haram-transfer", "airport-transfer", "umrah", "hajj"],
  },
};

/** Returns entities directly related to a given entity id */
export function getRelatedEntities(entityId: string): Entity[] {
  const entity = ENTITY_GRAPH[entityId];
  if (!entity) return [];
  return entity.relatedEntities
    .map((id) => ENTITY_GRAPH[id])
    .filter((e): e is Entity => !!e);
}

/** Returns entity by its URL */
export function getEntityByUrl(url: string): Entity | undefined {
  return Object.values(ENTITY_GRAPH).find((e) => e.url === url);
}
