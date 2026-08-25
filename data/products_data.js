// Baroid Products Database from Participant Guides & Fluids Handbook
const PRODUCTS_DATA = [
  // WATER-BASED FLUIDS (WBF) PRODUCTS
  {
    product: "BAROID®",
    category: "WBF & NAF Weighting",
    function: "Weighting Agent",
    notes: "High-quality ground barium sulfate (Barite) with a specific gravity of 4.2. Used to increase the density of all types of water-based and non-aqueous drilling fluids."
  },
  {
    product: "BARACARB®",
    category: "WBF & NAF Bridging",
    function: "Weighting & Bridging Agent",
    notes: "Ground calcium carbonate (specific gravity 2.7) available in various sizes (e.g., 5, 25, 50, 150 microns). Used to increase density, seal pore throats, and provide acid-soluble bridging for reservoir drill-in and completion fluids."
  },
  {
    product: "BARAWEIGHT™",
    category: "WBF & NAF Weighting",
    function: "Heavy Weighting Agent",
    notes: "High-gravity ground hematite (specific gravity 5.0). Used in extreme density systems where barite limits solids content or causes excessive plastic viscosity."
  },
  {
    product: "BARAVIS®",
    category: "WBF Viscosifiers",
    function: "Mineral Viscosifier",
    notes: "Premium sodium montmorillonite bentonite clay. Hydrates in fresh water to provide viscosity, yield point, gel strengths, and primary filtration control by building filter cake."
  },
  {
    product: "BARAZAN® D PLUS",
    category: "WBF Viscosifiers",
    function: "Polymer Viscosifier",
    notes: "Dispersible modified xanthan gum polymer. Provides high low-shear-rate viscosity (LSRV) and high yield point for excellent cuttings transport and suspension in WBF."
  },
  {
    product: "PAC™-R / PAC™-L",
    category: "WBF Filtration",
    function: "Filtration Control / Viscosifier",
    notes: "Polyanionic cellulose polymers. PAC-R provides fluid loss control and increases viscosity. PAC-L provides high-performance fluid loss control with minimal viscosity effect."
  },
  {
    product: "DEXTRID® / DEXTRID® LTE",
    category: "WBF Filtration",
    function: "Filtration Control Agent (Starch)",
    notes: "Modified potato starch polymer. Thermally stable up to 250°F and bacterially resistant. Plugs pores in the filter cake to control filtration with zero viscosity increase."
  },
  {
    product: "CARBONOX®",
    category: "WBF Thinners & Filtration",
    function: "Thinner / Filtration Control",
    notes: "Alkali-treated lignite. Functions as an organic clay dispersant/thinner and controls fluid loss. Thermally stable up to 350°F."
  },
  {
    product: "IMPERMUD®",
    category: "WBF Filtration",
    function: "Filtration Control Agent",
    notes: "High-molecular-weight organic copolymer fluid loss control agent. Reduces high-temperature, high-pressure (HTHP) filtration in water-based systems."
  },
  {
    product: "EZ-FILTER®",
    category: "WBF Filtration",
    function: "HT Filtration Control Agent",
    notes: "Thermally-stable synthetic polymer designed for high-temperature filtration control in fresh, brackish, or salt-water based drilling fluids."
  },
  {
    product: "QUIK-THIN®",
    category: "WBF Thinners",
    function: "Thinner / Clay Deflocculant",
    notes: "Modified ferrochrome lignosulfonate. Disperses hydrated clays, reducing yield points, gel strengths, and viscosity. Requires alkaline pH to activate."
  },
  {
    product: "THERMA-THIN®",
    category: "WBF Thinners",
    function: "HT Copolymer Thinner",
    notes: "Highly effective synthetic copolymer clay deflocculant. Thermally stable beyond 400°F, designed to thin high-density water-based muds under extreme conditions."
  },

  // NON-AQUEOUS FLUIDS (NAF) PRODUCTS
  {
    product: "BARABLOK™",
    category: "NAF Bridging & Filtration",
    function: "Filtration Control Agent",
    notes: "Particulate mineral bridging agent. Seals micro-fractures in shales and provides high-temperature, high-pressure (HTHP) filtration control in oil-based fluids."
  },
  {
    product: "GELTONE® II",
    category: "NAF Viscosifiers",
    function: "Viscosifier",
    notes: "Premium organophilic bentonite clay. Hydrates in diesel and mineral base oils to increase viscosity, yield point, and gel strengths for hole cleaning and suspension."
  },
  {
    product: "RM-63™",
    category: "NAF Viscosifiers",
    function: "Rheology Modifier",
    notes: "High-performance polymeric rheology modifier. Provides flat-rheology profiles in synthetic-based muds, maintaining suspension properties without increasing plastic viscosity."
  },
  {
    product: "INVERMUL®",
    category: "NAF Emulsifiers",
    function: "Primary Emulsifier",
    notes: "Concentrated fatty acid primary emulsifier. Reacts with lime (alkalinity source) to form a stable invert water-in-oil emulsion. Provides mechanical emulsion stability."
  },
  {
    product: "DURATONE® HT",
    category: "NAF Filtration",
    function: "Filtration Control Agent",
    notes: "Organophilic lignite (treated humic acid). Controls high-temperature, high-pressure (HTHP) fluid loss in oil-based muds and helps maintain stable rheology."
  },
  {
    product: "EZ MUL® NT",
    category: "NAF Emulsifiers",
    function: "Secondary Emulsifier & Wetting Agent",
    notes: "Polyaminated fatty acid secondary emulsifier. Acts as a strong wetting agent to keep barite and drill solids oil-wet, preventing water-wetting. Promotes emulsion stability."
  },
  {
    product: "SUSPENTONE™",
    category: "NAF Viscosifiers",
    function: "Suspension Agent",
    notes: "Organophilic hectorite clay viscosifier. Engineered specifically for high-temperature synthetic and oil-based fluids to suspend barite and prevent sag in static wells."
  },
  {
    product: "DRILTREAT®",
    category: "NAF Wetting Agents",
    function: "Wetting Agent",
    notes: "Concentrated lecithin-based surfactant. Wetting agent used to quickly oil-wet barite and drill solids in invert systems. Reduces gel strengths and viscosity caused by water wetting."
  },
  {
    product: "OMC® 42™",
    category: "NAF Wetting & Thinners",
    function: "Wetting Agent & Thinner",
    notes: "Oil mud chemical wetting agent and thinner. Reducer of viscosity and gel strengths in non-aqueous fluids, effective when drilling reactive shales or when adding barite."
  },
  {
    product: "RHEMOD™ L",
    category: "NAF Viscosifiers",
    function: "Rheology Modifier",
    notes: "Liquid polymeric rheology modifier. Enhances low-shear-rate viscosity (LSRV) and gel strengths for improved cuttings transport and suspension in low-density NAF."
  },
  {
    product: "TAU-MOD®",
    category: "NAF Viscosifiers",
    function: "Viscosifier & Rheology Modifier",
    notes: "Amorphous silica-based viscosifier. Provides low-shear-rate viscosity (LSRV) and flat rheology profiles in synthetic and oil-based drilling fluid systems without using organophilic clays."
  },
  {
    product: "BaraVis®",
    category: "NAF Viscosifiers",
    function: "Viscosifier",
    notes: "Modified polymer viscosifier. Specifically developed to improve low-shear-rate viscosity and cuttings carrying capacity in synthetic-based fluids."
  },
  {
    product: "ADAPTA®",
    category: "NAF Filtration",
    function: "Filtration Control Agent",
    notes: "Methylstyrene-based synthetic copolymer filtration control agent. Thermally stable up to 400°F+, designed to control HTHP fluid loss in diesel, mineral oil, or synthetic fluids."
  }
];
