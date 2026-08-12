'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const nationalHubs = [
  {
    id: 'east',
    region: 'Eastern Seaboard',
    location: 'New York // Palm Beach // Boston',
    coords: [-74.006, 40.7128],
    crews: 14
  },
  {
    id: 'midwest',
    region: 'Midwest Heritage',
    location: 'Willmar // Minneapolis // Chicago',
    coords: [-95.0478, 45.1222],
    crews: 19
  },
  {
    id: 'west',
    region: 'Pacific Sanctuaries',
    location: 'Los Angeles // San Francisco // Seattle',
    coords: [-118.2437, 34.0522],
    crews: 11
  },
  {
    id: 'mountain',
    region: 'Mountain & Northwest',
    location: 'Denver // Aspen // Bozeman',
    coords: [-104.9903, 39.7392],
    crews: 9
  }
];

const satelliteStyle = {
  version: 8,
  sources: {
    esri: {
      type: 'raster',
      tiles: [
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      ],
      tileSize: 256,
      attribution: 'Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPRC, and the GIS User Community'
    }
  },
  layers: [
    {
      id: 'esri-tiles',
      type: 'raster',
      source: 'esri',
      minzoom: 0,
      maxzoom: 19
    }
  ]
};

export default function CinematicHeroMap() {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const [activeHub, setActiveHub] = useState(nationalHubs[1]);

  useEffect(() => {
    if (mapInstance.current) return;

    mapInstance.current = new Map({
      container: mapContainer.current,
      style: satelliteStyle,
      center: [-98.5795, 39.8283],
      zoom: 3.2,
      interactive: false,
      attributionControl: false
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  const handleFlyTo = (hub) => {
    setActiveHub(hub);
    if (mapInstance.current) {
      mapInstance.current.flyTo({
        center: hub.coords,
        zoom: 6.2,
        speed: 1.2,
        curve: 1.4,
        essential: true
      });
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 select-none font-sans flex flex-col justify-between p-4 md:p-8">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <header className="relative z-10 flex justify-between items-center backdrop-blur-md bg-slate-900/40 border border-amber-500/20 px-6 py-3 rounded-xl max-w-7xl mx-auto w-full shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-white font-serif tracking-[0.25em] text-xs uppercase">Handyman Painting L.L.C.</span>
        </div>
        <div className="text-[11px] font-light tracking-[0.2em] text-amber-200/80">
          NATIONWIDE PRESERVATION
        </div>
      </header>

      <main className="relative z-10 flex-grow flex items-center justify-center max-w-7xl mx-auto w-full my-2">
        <div className="relative w-full h-[78vh] backdrop-blur-xl bg-slate-900/60 border border-amber-500/25 rounded-3xl p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center z-25 relative">
            <div>
              <h1 className="text-white font-serif text-xl tracking-wide">{activeHub.region}</h1>
              <p className="text-xs text-amber-300/80 font-light tracking-widest mt-0.5">{activeHub.location}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-serif px-4 py-1.5 bg-slate-900/90 text-amber-200 rounded-full border border-amber-500/40 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                {activeHub.crews} Active Crews
              </span>
            </div>
          </div>

          <div className="absolute inset-0 z-0">
            <div ref={mapContainer} className="w-full h-full filter brightness-95 contrast-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/70 pointer-events-none" />
          </div>

          <div className="absolute inset-0 z-20 pointer-events-none">
            {nationalHubs.map((hub) => {
              const isSelected = activeHub.id === hub.id;
              const coordsMap = {
                east: { x: 74, y: 52 },
                midwest: { x: 56, y: 48 },
                west: { x: 22, y: 50 },
                mountain: { x: 38, y: 46 }
              };
              const pos = coordsMap[hub.id];

              return (
                <button
                  key={hub.id}
                  onClick={() => handleFlyTo(hub)}
                  onMouseEnter={() => handleFlyTo(hub)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-all duration-300 pointer-events-auto cursor-pointer"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <div className="relative flex items-center justify-center">
                    {isSelected && (
                      <div className="absolute w-14 h-14 rounded-full bg-amber-400/40 animate-ping pointer-events-none" />
                    )}
                    <div className={`w-4 h-4 rounded-full border transition-all flex items-center justify-center ${
                      isSelected ? 'bg-amber-400 border-white shadow-[0_0_25px_rgba(251,191,36,0.9)] scale-125' : 'bg-slate-900 border-amber-500/50 hover:scale-110'
                    }`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                    </div>
                    <span className={`absolute top-6 whitespace-nowrap text-[10px] font-light tracking-widest px-3 py-1 rounded-md border transition-all ${
                      isSelected ? 'bg-slate-900/95 text-amber-200 border-amber-400/80 shadow-2xl' : 'bg-slate-950/80 text-slate-400 border-slate-800 opacity-60'
                    }`}>
                      {hub.region}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex justify-between items-center text-[11px] font-light text-slate-400 z-25 relative pt-4 border-t border-amber-500/10">
            <span>ESTATE & COMMERCIAL PRESERVATION</span>
            <span className="text-amber-300/80">COAST-TO-COAST EXCELLENCE</span>
          </div>
        </div>
      </main>

      <footer className="relative z-10 flex justify-between items-center text-[11px] font-light text-slate-400 max-w-7xl mx-auto w-full backdrop-blur-md bg-slate-900/40 border border-amber-500/20 px-6 py-3 rounded-xl shadow-lg">
        <span>&copy; 2026 HANDYMAN PAINTING L.L.C.</span>
        <span className="tracking-widest">AMERICAN HERITAGE</span>
      </footer>
    </div>
  );
}