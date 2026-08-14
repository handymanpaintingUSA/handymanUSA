'use client';

import React, { useState } from 'react';

// Map ANSI FIPS State Codes to Regions
const FIPS_REGION_MAP: Record<string, { id: string; name: string; color: string; hoverColor: string }> = {
  // Midwest (Teal)
  '27': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // MN
  '55': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // WI
  '17': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // IL
  '18': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // IN
  '26': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // MI
  '39': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // OH
  '38': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // ND
  '46': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // SD
  '31': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // NE
  '19': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // IA
  '20': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // KS
  '29': { id: 'midwest', name: 'Midwest', color: 'fill-teal-600/60', hoverColor: 'hover:fill-teal-400' }, // MO

  // Southeast (Amber)
  '12': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // FL
  '13': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // GA
  '37': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // NC
  '45': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // SC
  '51': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // VA
  '54': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // WV
  '47': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // TN
  '21': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // KY
  '01': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // AL
  '28': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // MS
  '22': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // LA
  '05': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // AR
  '24': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // MD
  '10': { id: 'southeast', name: 'Southeast', color: 'fill-amber-600/60', hoverColor: 'hover:fill-amber-400' }, // DE

  // Southwest (Orange)
  '48': { id: 'southwest', name: 'Southwest', color: 'fill-orange-600/60', hoverColor: 'hover:fill-orange-400' }, // TX
  '40': { id: 'southwest', name: 'Southwest', color: 'fill-orange-600/60', hoverColor: 'hover:fill-orange-400' }, // OK
  '35': { id: 'southwest', name: 'Southwest', color: 'fill-orange-600/60', hoverColor: 'hover:fill-orange-400' }, // NM
  '04': { id: 'southwest', name: 'Southwest', color: 'fill-orange-600/60', hoverColor: 'hover:fill-orange-400' }, // AZ

  // West (Blue)
  '06': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // CA
  '53': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // WA
  '41': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // OR
  '32': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // NV
  '16': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // ID
  '49': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // UT
  '08': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // CO
  '56': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // WY
  '30': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // MT
  '02': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // AK
  '15': { id: 'west', name: 'West', color: 'fill-blue-600/60', hoverColor: 'hover:fill-blue-400' }, // HI

  // Northeast (Indigo)
  '36': { id: 'northeast', name: 'Northeast', color: 'fill-indigo-600/60', hoverColor: 'hover:fill-indigo-400' }, // NY
  '42': { id: 'northeast', name: 'Northeast', color: 'fill-indigo-600/60', hoverColor: 'hover:fill-indigo-400' }, // PA
  '34': { id: 'northeast', name: 'Northeast', color: 'fill-indigo-600/60', hoverColor: 'hover:fill-indigo-400' }, // NJ
  '25': { id: 'northeast', name: 'Northeast', color: 'fill-indigo-600/60', hoverColor: 'hover:fill-indigo-400' }, // MA
  '09': { id: 'northeast', name: 'Northeast', color: 'fill-indigo-600/60', hoverColor: 'hover:fill-indigo-400' }, // CT
  '44': { id: 'northeast', name: 'Northeast', color: 'fill-indigo-600/60', hoverColor: 'hover:fill-indigo-400' }, // RI
  '50': { id: 'northeast', name: 'Northeast', color: 'fill-indigo-600/60', hoverColor: 'hover:fill-indigo-400' }, // VT
  '33': { id: 'northeast', name: 'Northeast', color: 'fill-indigo-600/60', hoverColor: 'hover:fill-indigo-400' }, // NH
  '23': { id: 'northeast', name: 'Northeast', color: 'fill-indigo-600/60', hoverColor: 'hover:fill-indigo-400' }, // ME
};

export function getRegionStyle(fips: string) {
  const region = FIPS_REGION_MAP[fips];
  if (!region) return 'fill-slate-800 hover:fill-slate-700';
  return `${region.color} ${region.hoverColor}`;
}
