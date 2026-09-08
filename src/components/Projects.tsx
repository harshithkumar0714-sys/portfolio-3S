import React, { useState } from 'react';
import {
  ExternalLink,
  Terminal,
  Check,
  CheckCircle2,
  RefreshCw,
  Plus,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { ProjectSpecModal } from './ProjectSpecModal';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

interface TableOrder {
  id: string;
  name: string;
  table: string;
  timeAgo: string;
  status: 'Preparing' | 'Dispatched' | 'Completed';
}

export const Projects: React.FC = () => {
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);

  // Simulated state for Restaurant Management Live Mockup
  const [tables, setTables] = useState([
    { id: 'T-01', status: 'Active (3 items)', bill: '₹840.00', dot: 'bg-tertiary', vacant: false },
    { id: 'T-02', status: 'Served', bill: '₹1,250.00', dot: 'bg-primary', vacant: false },
    { id: 'T-03', status: 'Available', bill: 'Vacant', dot: 'bg-outline', vacant: true },
  ]);

  const [orders, setOrders] = useState<TableOrder[]>([
    { id: '#ORD-4819', name: 'Butter Chicken, Garlic Naan (x3)', table: 'Table 01', timeAgo: '4m ago', status: 'Preparing' },
    { id: '#ORD-4818', name: 'Paneer Tikka, Biryani Platter', table: 'Table 02', timeAgo: '18m ago', status: 'Dispatched' },
  ]);

  const toggleTableOccupancy = (index: number) => {
    setTables((prev) =>
      prev.map((t, i) => {
        if (i !== index) return t;
        if (t.vacant) {
          return {
            ...t,
            status: 'Active (1 item)',
            bill: '₹450.00',
            dot: 'bg-tertiary',
            vacant: false,
          };
        } else {
          return {
            ...t,
            status: 'Available',
            bill: 'Vacant',
            dot: 'bg-outline',
            vacant: true,
          };
        }
      })
    );
  };

  const advanceOrderStatus = (orderId: string) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id !== orderId) return ord;
        if (ord.status === 'Preparing') return { ...ord, status: 'Dispatched' };
        if (ord.status === 'Dispatched') return { ...ord, status: 'Completed' };
        return { ...ord, status: 'Preparing' };
      })
    );
  };

  // State for 2D Graphic Editor simulation
  const [vectorRotation, setVectorRotation] = useState(0);
  const [activeShapesCount, setActiveShapesCount] = useState(3);
  const [pointerAddress, setPointerAddress] = useState('0x7ffd9b8');

  const handleTransformVector = () => {
    setVectorRotation((prev) => (prev + 45) % 360);
    const randomHex = Math.floor(Math.random() * 0xffff)
      .toString(16)
      .padStart(4, '0');
    setPointerAddress(`0x7ffd${randomHex}`);
  };

  const handleAddPrimitive = () => {
    setActiveShapesCount((prev) => (prev >= 6 ? 3 : prev + 1));
  };

  const heroProject = PROJECTS[0];
  const secondaryProjects = PROJECTS.slice(1);

  return (
    <section className="w-full bg-surface-container-lowest py-16 lg:py-24 border-y border-outline-variant/20" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-primary font-semibold">03 // CODE ARTIFACTS</span>
            <span className="w-8 h-0.5 bg-primary/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Real systems built locally and iteratively developed with functional persistence and architecture.
          </p>
        </div>

        {/* PROJECT 01: FEATURED LARGE HERO CARD (Restaurant Management System) */}
        <div className="w-full rounded-2xl bg-surface-container border border-outline-variant/40 shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Narrative & Deep Dive */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-container/20 text-primary font-mono text-[11px] uppercase tracking-wider font-semibold border border-primary/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Featured Project
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant">{heroProject.number}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
                  {heroProject.title}
                </h3>

                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {heroProject.description}
                </p>

                {/* Technical Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {heroProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface font-mono text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Deep Dive Quick Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase text-primary tracking-wider font-semibold">
                      Problem Solved
                    </span>
                    <span className="text-xs text-on-surface-variant leading-relaxed">
                      {heroProject.problemSolved}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase text-tertiary tracking-wider font-semibold">
                      Key Takeaway
                    </span>
                    <span className="text-xs text-on-surface-variant leading-relaxed">
                      {heroProject.keyTakeaway}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-surface-container-high">
                <button
                  onClick={() => setIsSpecModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-semibold text-sm hover:brightness-110 transition-all shadow-md cursor-pointer"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Inspect System Specs</span>
                </button>

                <a
                  href={heroProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-medium text-sm transition-all shadow-sm border border-outline-variant/30 hover:border-primary/50"
                >
                  <Terminal className="w-4 h-4 text-primary" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-outline" />
                </a>
              </div>
            </div>

            {/* Right: Visual Browser Mockup Preview */}
            <div className="lg:col-span-6 bg-surface-container-high p-4 sm:p-6 lg:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-outline-variant/30">
              {/* Simulated Browser Window */}
              <div className="w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-2xl overflow-hidden">
                <div className="px-4 py-2.5 bg-surface-container border-b border-outline-variant/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8ed5ff]/60 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#52e87c]/80 inline-block" />
                    <span className="ml-2 font-mono text-xs text-on-surface-variant truncate max-w-[180px] sm:max-w-none">
                      localhost:3000/dashboard/orders
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-tertiary font-mono text-[11px] border border-tertiary/20">
                    200 OK
                  </span>
                </div>

                {/* Interior UI Dashboard Preview Mockup */}
                <div className="p-4 space-y-4">
                  {/* Dashboard Sub-nav */}
                  <div className="flex items-center justify-between pb-2 border-b border-surface-container">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-sm sm:text-base text-on-surface font-semibold">
                        Kitchen Dashboard
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-mono text-[10px] border border-tertiary/20">
                        Live Sync
                      </span>
                    </div>
                    <span className="font-mono text-xs text-outline">Table Occupancy: 8/12</span>
                  </div>

                  {/* Interactive Table Grid Simulation */}
                  <div>
                    <div className="text-[11px] font-mono text-outline mb-1.5 flex items-center justify-between">
                      <span>Floor Layout (Click to toggle seat status):</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {tables.map((tbl, i) => (
                        <button
                          key={tbl.id}
                          onClick={() => toggleTableOccupancy(i)}
                          className={`p-2 rounded border text-left transition-all cursor-pointer ${
                            tbl.vacant
                              ? 'bg-surface-container-low border-outline-variant/20 opacity-70 hover:opacity-100 hover:border-primary/50'
                              : 'bg-surface-container border-outline-variant/30 hover:border-primary/50'
                          }`}
                          title="Click to toggle table occupation"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-semibold text-on-surface">{tbl.id}</span>
                            <span className={`w-2 h-2 rounded-full ${tbl.dot}`} />
                          </div>
                          <span className="text-[10px] text-on-surface-variant block truncate">{tbl.status}</span>
                          <span className="text-[10px] text-primary font-mono block font-semibold">{tbl.bill}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recent Ticket List */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-outline flex items-center justify-between">
                      <span>Active Tickets (Click badge to advance status):</span>
                    </div>
                    {orders.map((ord) => (
                      <div
                        key={ord.id}
                        className="p-2.5 rounded bg-surface-container border border-outline-variant/20 flex items-center justify-between gap-2"
                      >
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-semibold text-on-surface truncate">
                            {ord.id} • {ord.name}
                          </span>
                          <span className="font-mono text-[10px] text-outline">
                            {ord.table} • {ord.timeAgo}
                          </span>
                        </div>
                        <button
                          onClick={() => advanceOrderStatus(ord.id)}
                          className={`px-2 py-0.5 rounded font-mono text-[10px] shrink-0 transition-all cursor-pointer ${
                            ord.status === 'Preparing'
                              ? 'bg-primary-container/20 text-primary border border-primary/30'
                              : ord.status === 'Dispatched'
                              ? 'bg-tertiary-container/20 text-tertiary border border-tertiary/30'
                              : 'bg-secondary-container/20 text-secondary border border-secondary/30'
                          }`}
                          title="Click to change order status"
                        >
                          {ord.status}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Database Metrics Bar */}
                  <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-outline border-t border-surface-container">
                    <span className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                      <CheckCircle2 className="w-3.5 h-3.5 text-tertiary" />
                      <span>MySQL Connection Pool: Active</span>
                    </span>
                    <span className="text-primary">Latency: 4.2ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-COLUMN SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PROJECT 02: 2-D Graphic Editor in C */}
          <div className="p-6 sm:p-8 rounded-xl bg-surface-container border border-outline-variant/30 shadow-md flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high border border-outline-variant/40 text-primary font-mono text-[11px] uppercase tracking-wider font-semibold">
                  {secondaryProjects[0].category}
                </span>
                <a
                  href={secondaryProjects[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  aria-label="View 2D Graphic Editor repository"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl sm:text-2xl text-on-surface font-bold">
                  {secondaryProjects[0].title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {secondaryProjects[0].description}
                </p>
              </div>

              {/* Vector Editor Graphic Simulation */}
              <div className="w-full rounded-lg bg-surface-container-lowest border border-outline-variant/30 p-4 flex flex-col justify-between gap-3 shadow-inner">
                <div className="flex items-center justify-between text-outline font-mono text-xs">
                  <span>[Canvas 640x480 • C-Graphics Engine]</span>
                  <span className="text-tertiary">Shapes: {activeShapesCount} active</span>
                </div>

                {/* SVG coordinate illustration with dynamic rotation transform */}
                <div className="w-full h-24 flex items-center justify-center overflow-hidden">
                  <svg
                    className="w-full h-full max-w-[280px] transition-transform duration-500 ease-out"
                    style={{ transform: `rotate(${vectorRotation}deg)` }}
                    fill="none"
                    viewBox="0 0 300 80"
                  >
                    {/* Grid Lines */}
                    <line stroke="currentColor" strokeOpacity="0.1" x1="0" x2="300" y1="20" y2="20" />
                    <line stroke="currentColor" strokeOpacity="0.1" x1="0" x2="300" y1="40" y2="40" />
                    <line stroke="currentColor" strokeOpacity="0.1" x1="0" x2="300" y1="60" y2="60" />
                    <line stroke="currentColor" strokeOpacity="0.1" x1="100" x2="100" y1="0" y2="80" />
                    <line stroke="currentColor" strokeOpacity="0.1" x1="200" x2="200" y1="0" y2="80" />

                    {/* Vector Primitives */}
                    <polygon
                      className="text-primary"
                      fill="none"
                      points="50,65 75,20 100,65"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle className="text-tertiary" cx="170" cy="40" fill="none" r="22" stroke="currentColor" strokeWidth="2" />
                    <rect
                      className="text-secondary"
                      fill="none"
                      height="35"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="45"
                      x="230"
                      y="25"
                    />
                    {activeShapesCount > 3 && (
                      <line className="text-primary" stroke="currentColor" strokeWidth="2" x1="10" x2="40" y1="10" y2="70" />
                    )}
                    {activeShapesCount > 4 && (
                      <ellipse className="text-tertiary" cx="280" cy="65" rx="15" ry="8" stroke="currentColor" strokeWidth="2" />
                    )}
                  </svg>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-outline pt-2 border-t border-surface-container">
                  <span>ptr: {pointerAddress}</span>
                  <span>malloc: OK</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handleTransformVector}
                      className="px-2 py-0.5 rounded bg-surface-container-high hover:bg-surface-bright text-primary text-[10px] flex items-center gap-1 cursor-pointer"
                      title="Rotate & Apply 2D Matrix Transform"
                    >
                      <RefreshCw className="w-2.5 h-2.5" />
                      <span>Rotate {vectorRotation}°</span>
                    </button>
                    <button
                      onClick={handleAddPrimitive}
                      className="px-2 py-0.5 rounded bg-surface-container-high hover:bg-surface-bright text-tertiary text-[10px] flex items-center gap-1 cursor-pointer"
                      title="Add shape primitive"
                    >
                      <Plus className="w-2.5 h-2.5" />
                      <span>Shape</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
                {secondaryProjects[0].highlights?.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-surface-container-high">
              <div className="flex flex-wrap items-center gap-1.5">
                {secondaryProjects[0].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-mono text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={secondaryProjects[0].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-primary hover:underline flex items-center gap-1"
              >
                <span>Repository</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* PROJECT 03: Personal Developer Portfolio */}
          <div className="p-6 sm:p-8 rounded-xl bg-surface-container border border-outline-variant/30 shadow-md flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high border border-outline-variant/40 text-tertiary font-mono text-[11px] uppercase tracking-wider font-semibold">
                  {secondaryProjects[1].category}
                </span>
                <a
                  href={secondaryProjects[1].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                  aria-label="View Portfolio repository"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl sm:text-2xl text-on-surface font-bold">
                  {secondaryProjects[1].title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {secondaryProjects[1].description}
                </p>
              </div>

              {/* Mini Nested Showcase Mockup */}
              <div className="w-full rounded-lg bg-surface-container-lowest border border-outline-variant/30 p-4 flex flex-col justify-between gap-3 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary font-bold">HK. Developer Profile</span>
                  <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary text-[10px] font-mono border border-tertiary/20">
                    Zero Bloat
                  </span>
                </div>

                <div className="space-y-1.5 py-2">
                  <div className="w-3/4 h-2 bg-surface-container rounded" />
                  <div className="w-1/2 h-2 bg-surface-container rounded" />
                  <div className="w-5/6 h-2 bg-primary/20 rounded" />
                </div>

                <div className="flex items-center justify-between font-mono text-[11px] text-outline pt-2 border-t border-surface-container">
                  <span className="text-tertiary font-semibold">Lighthouse 100/100</span>
                  <span>Responsive • Semantic • Fast</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
                {secondaryProjects[1].highlights?.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-surface-container-high">
              <div className="flex flex-wrap items-center gap-1.5">
                {secondaryProjects[1].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-mono text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={secondaryProjects[1].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-primary hover:underline flex items-center gap-1"
              >
                <span>Repository</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Architecture Spec Modal */}
      <ProjectSpecModal isOpen={isSpecModalOpen} onClose={() => setIsSpecModalOpen(false)} />
    </section>
  );
};
