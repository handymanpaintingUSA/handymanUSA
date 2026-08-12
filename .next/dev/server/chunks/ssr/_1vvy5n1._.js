module.exports = [
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
"[project]/src/components/home/CinematicHeroMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CinematicHeroMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'topojson-client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'd3-geo'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'us-atlas/states-10m.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stateJobs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/stateJobs.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CinematicHeroMap() {
    const [states, setStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hoveredFips, setHoveredFips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedState, setSelectedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [zoomTransform, setZoomTransform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        scale: 1,
        x: 0,
        y: 0
    });
    const projection = geoAlbersUsa().scale(1000).translate([
        480,
        250
    ]);
    const pathGenerator = geoPath().projection(projection);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const geoData = feature(usTopo, usTopo.objects.states);
        setStates(geoData.features || []);
    }, []);
    const handleStateClick = (feat)=>{
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
        setZoomTransform({
            scale,
            x: translateX,
            y: translateY
        });
        setSelectedState(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stateJobs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_JOBS_DATA"][fips] || null);
    };
    const handleResetZoom = ()=>{
        setZoomTransform({
            scale: 1,
            x: 0,
            y: 0
        });
        setSelectedState(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen w-full bg-slate-950 flex flex-col items-center justify-between p-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full max-w-7xl flex justify-between items-center z-20 border-b border-amber-500/20 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold tracking-widest text-amber-400",
                                children: "• HANDYMAN PAINTING L.L.C."
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            selectedState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleResetZoom,
                                className: "text-xs bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 px-3 py-1 rounded border border-amber-500/40 font-mono transition-all",
                                children: "← RESET VIEW"
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs tracking-widest text-slate-300 font-mono uppercase bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20",
                            children: "NATIONWIDE PRESERVATION"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-6xl my-auto z-10 flex items-center justify-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 960 500",
                        className: "w-full h-auto max-h-[70vh] drop-shadow-[0_0_25px_rgba(245,158,11,0.15)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            className: "states-group transition-transform duration-700 ease-out",
                            style: {
                                transform: "translate(" + zoomTransform.x + "px, " + zoomTransform.y + "px) scale(" + zoomTransform.scale + ")",
                                transformOrigin: "0 0"
                            },
                            children: states.map((feat)=>{
                                const fips = feat.id;
                                const pathD = pathGenerator(feat);
                                if (!pathD) return null;
                                const isHovered = hoveredFips === fips;
                                const isSelected = selectedState?.fips === fips;
                                const hasJobs = Boolean(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$stateJobs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_JOBS_DATA"][fips]);
                                const activeClass = isSelected ? 'fill-amber-400/70 stroke-amber-100 stroke-[1.5]' : isHovered ? 'fill-amber-400/50 stroke-amber-200 stroke-[1.2]' : hasJobs ? 'fill-amber-900/30 hover:fill-amber-500/40 stroke-amber-500/40 stroke-[0.75]' : 'fill-slate-900/70 hover:fill-slate-800/80 stroke-slate-800 stroke-[0.5]';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: pathD,
                                    onMouseEnter: ()=>setHoveredFips(fips),
                                    onMouseLeave: ()=>setHoveredFips(null),
                                    onClick: ()=>handleStateClick(feat),
                                    className: "transition-all duration-300 cursor-pointer " + activeClass
                                }, fips, false, {
                                    fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    selectedState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-6 right-6 z-30 max-w-sm w-full bg-slate-900/90 border border-amber-500/40 backdrop-blur-md rounded-xl p-5 shadow-2xl animate-in slide-in-from-right duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center border-b border-amber-500/20 pb-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-amber-400",
                                                children: selectedState.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400",
                                                children: [
                                                    selectedState.jobs.length,
                                                    " Active Job Assignments"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleResetZoom,
                                        className: "text-slate-400 hover:text-amber-400 text-sm font-bold px-2 py-1",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 max-h-[40vh] overflow-y-auto pr-1",
                                children: selectedState.jobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-950/80 border border-slate-800 p-3 rounded-lg hover:border-amber-500/30 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-semibold text-slate-100",
                                                        children: job.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20",
                                                        children: job.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                                lineNumber: 140,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 mt-1",
                                                children: job.location
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block mt-1 text-[10px] text-amber-500/80 font-mono",
                                                children: job.type
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, job.id, true, {
                                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "w-full max-w-7xl flex justify-between items-center z-20 text-[11px] text-slate-500 border-t border-amber-500/10 pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "ESTATE & COMMERCIAL PRESERVATION"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-amber-500/80 font-mono",
                        children: "COAST-TO-COAST EXCELLENCE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/CinematicHeroMap.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/stateJobs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STATE_JOBS_DATA",
    ()=>STATE_JOBS_DATA
]);
const STATE_JOBS_DATA = {
    "06": {
        name: "California",
        fips: "06",
        jobs: [
            {
                id: "job-101",
                title: "Luxury Estate Exterior Restoration",
                type: "Commercial/Residential",
                location: "Beverly Hills, CA",
                status: "Open"
            },
            {
                id: "job-102",
                title: "Historic Masonry & Trim Painting",
                type: "Preservation",
                location: "San Francisco, CA",
                status: "In Progress"
            }
        ]
    },
    "41": {
        name: "Oregon",
        fips: "41",
        jobs: [
            {
                id: "job-201",
                title: "Coastal Exterior Weatherproofing",
                type: "Residential",
                location: "Cannon Beach, OR",
                status: "Open"
            }
        ]
    },
    "53": {
        name: "Washington",
        fips: "53",
        jobs: [
            {
                id: "job-301",
                title: "Commercial Warehouse Interior Coating",
                type: "Commercial",
                location: "Seattle, WA",
                status: "Open"
            }
        ]
    },
    "36": {
        name: "New York",
        fips: "36",
        jobs: [
            {
                id: "job-401",
                title: "Brownstone Facade Restoration",
                type: "Historical Preservation",
                location: "Brooklyn, NY",
                status: "Open"
            }
        ]
    }
};
}),
];

//# sourceMappingURL=_1vvy5n1._.js.map