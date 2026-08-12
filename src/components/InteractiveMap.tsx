'use client';

import React, { useState, useEffect } from 'react';
import { feature } from 'topojson-client';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import usTopo from 'us-atlas/states-10m.json';
import { STATE_JOBS_DATA, StateData, JobListing } from '@/data/stateJobs';

export default function InteractiveMap() {
  const [states, setStates] = useState<any[]>([]);
  const [hoveredFips, setHoveredFips] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<StateData | null>(null);

  // Setup standard US projection
  const projection = geoAlbersUsa().scale(1000).translate([480, 250]);
  const pathGenerator = geoPath().projection(projection);

  useEffect(() => {
    const geoData = feature(usTopo as any, usTopo.objects.states as any) as any;
    setStates(geoData.features || []);
  }, []);

  const handleStateClick = (fips: string) => {
    if (STATE_JOBS_DATA[fips]) {
      setSelectedState(STATE_JOBS_DATA[fips]);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[500px] bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-xl border border-amber-500/20 shadow-2xl">
      <div className="relative w-full h-full p-4">
        <svg viewBox="0 0 960 500" className="w-full h-auto max-h-[75vh] drop-shadow-lg">
          <g className="states-group">
            {states.map((feat: any) => {
              const fips = feat.id;
              const pathD = pathGenerator(feat);
              if (!pathD) return null;

              const isHovered = hoveredFips === fips;
              const hasJobs = Boolean(STATE_JOBS_DATA[fips]);

              return (
                <path
                  key={fips}
                  d={pathD}
                  onMouseEnter={() => setHoveredFips(fips)}
                  onMouseLeave={() => setHoveredFips(null)}
                  onClick={() => handleStateClick(fips)}
                  className={	ransition-all duration-200 cursor-pointer stroke-amber-500/40 stroke-[0.75] }
                />
              );
            })}
          </g>
        </svg>
      </div>

      {/* Detailed State Job Breakdown Modal */}
      {selectedState && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-6 z-50">
          <div className="bg-slate-900 border border-amber-500/40 rounded-xl p-6 max-w-lg w-full shadow-2xl space-y-4">
            <div className="flex justify-between items-center border-b border-amber-500/20 pb-3">
              <div>
                <h3 className="text-xl font-bold text-amber-400">{selectedState.name} Projects</h3>
                <p className="text-xs text-slate-400">{selectedState.jobs.length} Active Job Assignments</p>
              </div>
              <button
                onClick={() => setSelectedState(null)}
                className="text-slate-400 hover:text-amber-400 text-lg font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
              {selectedState.jobs.map((job: JobListing) => (
                <div
                  key={job.id}
                  className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/30 p-4 rounded-lg transition-all"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-semibold text-slate-100">{job.title}</h4>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {job.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{job.location}</p>
                  <span className="inline-block mt-2 text-[11px] text-amber-500/80 font-mono">{job.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
