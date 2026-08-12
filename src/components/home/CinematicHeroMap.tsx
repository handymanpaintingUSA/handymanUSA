'use client';

import React, { useState, useEffect } from 'react';
import { feature } from 'topojson-client';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import usTopo from 'us-atlas/states-10m.json';
import { STATE_JOBS_DATA, StateData, JobListing } from '@/data/stateJobs';

export default function CinematicHeroMap() {
  const [states, setStates] = useState<any[]>([]);
  const [hoveredFips, setHoveredFips] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [zoomTransform, setZoomTransform] = useState<{ scale: number; x: number; y: number }>({
    scale: 1,
    x: 0,
    y: 0,
  });

  const projection = geoAlbersUsa().scale(1000).translate([480, 250]);
  const pathGenerator = geoPath().projection(projection);

  useEffect(() => {
    const geoData = feature(usTopo as any, usTopo.objects.states as any) as any;
    setStates(geoData.features || []);
  }, []);

  const handleStateClick = (feat: any) => {
    const fips = feat.id;
    const bounds = pathGenerator.bounds(feat);

    if (!bounds) return;

    // Calculate bounding box center and dynamic scale factor
    const [[x0, y0], [x1, y1]] = bounds;
    const dx = x1 - x0;
    const dy = y1 - y0;
    const x = (x0 + x1) / 2;
    const y = (y0 + y1) / 2;

    const scale = Math.min(8, 0.75 / Math.max(dx / 960, dy / 500));
    const translateX = 960 / 2 - scale * x;
    const translateY = 500 / 2 - scale * y;

    setZoomTransform({ scale, x: translateX, y: translateY });
    setSelectedState(STATE_JOBS_DATA[fips] || null);
  };

  const handleResetZoom = () => {
    setZoomTransform({ scale: 1, x: 0, y: 0 });
    setSelectedState(null);
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex flex-col items-center justify-between p-6 overflow-hidden">
      {/* Top Header */}
      <header className="w-full max-w-7xl flex justify-between items-center z-20 border-b border-amber-500/20 pb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold tracking-widest text-amber-400">
            • HANDYMAN PAINTING L.L.C.
          </h1>
          {selectedState && (
            <button
              onClick={handleResetZoom}
              className="text-xs bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 px-3 py-1 rounded border border-amber-500/40 font-mono transition-all"
            >
              ← RESET VIEW
            </button>
          )}
        </div>
        <div>
          <span className="text-xs tracking-widest text-slate-300 font-mono uppercase bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
            NATIONWIDE PRESERVATION
          </span>
        </div>
      </header>

      {/* Main Map Viewport */}
      <div className="relative w-full max-w-6xl my-auto z-10 flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 960 500" className="w-full h-auto max-h-[70vh] drop-shadow-[0_0_25px_rgba(245,158,11,0.15)]">
          <g
            className="states-group transition-transform duration-700 ease-out"
            style={{
              transform: "translate(" + zoomTransform.x + "px, " + zoomTransform.y + "px) scale(" + zoomTransform.scale + ")",
              transformOrigin: "0 0",
            }}
          >
            {states.map((feat: any) => {
              const fips = feat.id;
              const pathD = pathGenerator(feat);
              if (!pathD) return null;

              const isHovered = hoveredFips === fips;
              const isSelected = selectedState?.fips === fips;
              const hasJobs = Boolean(STATE_JOBS_DATA[fips]);

              const activeClass = isSelected
                ? 'fill-amber-400/70 stroke-amber-100 stroke-[1.5]'
                : isHovered
                ? 'fill-amber-400/50 stroke-amber-200 stroke-[1.2]'
                : hasJobs
                ? 'fill-amber-900/30 hover:fill-amber-500/40 stroke-amber-500/40 stroke-[0.75]'
                : 'fill-slate-900/70 hover:fill-slate-800/80 stroke-slate-800 stroke-[0.5]';

              return (
                <path
                  key={fips}
                  d={pathD}
                  onMouseEnter={() => setHoveredFips(fips)}
                  onMouseLeave={() => setHoveredFips(null)}
                  onClick={() => handleStateClick(feat)}
                  className={"transition-all duration-300 cursor-pointer " + activeClass}
                />
              );
            })}
          </g>
        </svg>

        {/* Floating Job Panel for Active Zoomed State */}
        {selectedState && (
          <div className="absolute top-6 right-6 z-30 max-w-sm w-full bg-slate-900/90 border border-amber-500/40 backdrop-blur-md rounded-xl p-5 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center border-b border-amber-500/20 pb-3 mb-3">
              <div>
                <h3 className="text-lg font-bold text-amber-400">{selectedState.name}</h3>
                <p className="text-xs text-slate-400">{selectedState.jobs.length} Active Job Assignments</p>
              </div>
              <button
                onClick={handleResetZoom}
                className="text-slate-400 hover:text-amber-400 text-sm font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-1">
              {selectedState.jobs.map((job: JobListing) => (
                <div
                  key={job.id}
                  className="bg-slate-950/80 border border-slate-800 p-3 rounded-lg hover:border-amber-500/30 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-xs font-semibold text-slate-100">{job.title}</h4>
                    <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {job.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">{job.location}</p>
                  <span className="inline-block mt-1 text-[10px] text-amber-500/80 font-mono">{job.type}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Details */}
      <footer className="w-full max-w-7xl flex justify-between items-center z-20 text-[11px] text-slate-500 border-t border-amber-500/10 pt-3">
        <span>ESTATE & COMMERCIAL PRESERVATION</span>
        <span className="text-amber-500/80 font-mono">COAST-TO-COAST EXCELLENCE</span>
      </footer>
    </div>
  );
}
