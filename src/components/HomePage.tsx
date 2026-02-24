'use client'

import { useState, useEffect } from 'react'

// ─── BRAND PALETTE — Azul + Blanco + Dorado ───
const C = {
  verde: "#0C2340",
  verdeMid: "#143558",
  verdeLight: "#1B4B7A",
  arena: "#FFFFFF",
  arenaLight: "#F5F7FA",
  dorado: "#E8C877",
  doradoArena: "#C9A96E",
  blanco: "#FFFFFF",
  negro: "#0a0a0a",
  gris: "#64748B",
};

// ─── KEYFRAMES (injected once) ───
const injectStyles = () => {
  if (document.getElementById("roiba-styles")) return;
  const style = document.createElement("style");
  style.id = "roiba-styles";
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(40px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-30px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(30px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.92); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes lineGrow {
      from { width: 0; }
      to   { width: 100%; }
    }
    @keyframes lineGrowV {
      from { height: 0; }
      to   { height: 100%; }
    }
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    @keyframes revealLine {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
    @keyframes marquee {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    .roiba * { box-sizing: border-box; margin: 0; padding: 0; }
    .roiba { font-family: 'Montserrat', sans-serif; color: ${C.verde}; overflow-x: hidden; }
    .roiba h1, .roiba h2, .roiba h3, .roiba h4 { font-family: 'Cormorant Garamond', serif; }

    .roiba .animate-on-scroll {
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .roiba .animate-on-scroll.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .roiba .animate-on-scroll.delay-1 { transition-delay: 0.1s; }
    .roiba .animate-on-scroll.delay-2 { transition-delay: 0.2s; }
    .roiba .animate-on-scroll.delay-3 { transition-delay: 0.3s; }
    .roiba .animate-on-scroll.delay-4 { transition-delay: 0.4s; }
    .roiba .animate-on-scroll.delay-5 { transition-delay: 0.5s; }
    .roiba .animate-on-scroll.delay-6 { transition-delay: 0.6s; }

    .roiba .hover-lift {
      transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
    }
    .roiba .hover-lift:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 60px rgba(18,38,32,0.12);
    }

    .roiba .gold-line {
      height: 1px;
      background: linear-gradient(90deg, transparent, ${C.doradoArena}, transparent);
    }

    .roiba .dot-pattern {
      background-image: radial-gradient(${C.doradoArena}20 1px, transparent 1px);
      background-size: 24px 24px;
    }

    .roiba .grain::after {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      pointer-events: none;
    }

    .roiba .process-tab-active {
      background: ${C.verde};
      color: ${C.arena};
    }

    .roiba .marquee-track {
      display: flex;
      animation: marquee 30s linear infinite;
    }
    .roiba .marquee-track:hover { animation-play-state: paused; }

    .roiba ::selection {
      background: ${C.doradoArena};
      color: ${C.verde};
    }

    .roiba .service-card {
      position: relative;
      overflow: hidden;
      transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .roiba .service-card::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${C.doradoArena};
      transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .roiba .service-card:hover::before {
      width: 100%;
    }
    .roiba .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 24px 64px rgba(18,38,32,0.14);
    }

    .roiba .carousel-slide {
      transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .roiba .carousel-nav-btn {
      width: 56px;
      height: 56px;
      border: 1px solid ${C.arena}40;
      background: ${C.verde}cc;
      backdrop-filter: blur(12px);
      color: ${C.arena};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s ease;
    }
    .roiba .carousel-nav-btn:hover {
      background: ${C.doradoArena};
      color: ${C.verde};
      border-color: ${C.doradoArena};
    }

    .roiba .carousel-dot {
      width: 32px;
      height: 2px;
      border: none;
      cursor: pointer;
      transition: all 0.4s ease;
    }

    /* ─── Mobile Responsive ─── */
    @media (max-width: 768px) {
      /* Services — horizontal snap carousel */
      .roiba .services-grid {
        display: flex !important;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 20px !important;
        gap: 12px !important;
        scrollbar-width: none;
        -ms-overflow-style: none;
        padding-right: 24px;
      }
      .roiba .services-grid::-webkit-scrollbar { display: none; }
      .roiba .service-grid-item {
        min-width: min(82vw, 300px) !important;
        flex-shrink: 0 !important;
        scroll-snap-align: start;
      }
      .roiba .services-header-row {
        flex-direction: column !important;
        gap: 20px !important;
        align-items: flex-start !important;
      }
      .roiba .services-header-desc {
        text-align: left !important;
        max-width: 100% !important;
      }
      .roiba .services-scroll-hint {
        display: flex !important;
      }
      /* About — single column */
      .roiba .about-grid {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      .roiba .about-visual-col { display: none !important; }
      /* Process — tabs become horizontal scroll */
      .roiba .process-layout {
        grid-template-columns: 1fr !important;
        gap: 0 !important;
      }
      .roiba .process-tabs-col {
        display: flex !important;
        flex-direction: row !important;
        overflow-x: auto !important;
        border-left: none !important;
        border-bottom: 1px solid rgba(201,169,110,0.15);
        gap: 0 !important;
        scrollbar-width: none;
      }
      .roiba .process-tabs-col::-webkit-scrollbar { display: none; }
      .roiba .process-tab-btn {
        min-width: 140px !important;
        flex-shrink: 0;
        border-left: none !important;
        padding: 12px 16px !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 4px !important;
      }
      .roiba .process-detail-panel { padding: 24px 20px !important; }
    }
    @media (max-width: 480px) {
      .roiba .service-grid-item { min-width: min(88vw, 280px) !important; }
    }
  `;
  document.head.appendChild(style);
};

// ─── SCROLL OBSERVER HOOK ───
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

// ─── SERVICE ICONS (SVG inline, architectural line style) ───
const ServiceIcons = {
  design: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="32" height="32" rx="2" />
      <line x1="8" y1="20" x2="40" y2="20" />
      <line x1="20" y1="20" x2="20" y2="40" />
      <path d="M12 12 L16 16 M12 16 L16 12" />
      <line x1="24" y1="28" x2="36" y2="28" />
      <line x1="24" y1="34" x2="32" y2="34" />
    </svg>
  ),
  build: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 42 L24 6 L42 42 Z" />
      <line x1="15" y1="30" x2="33" y2="30" />
      <line x1="18" y1="36" x2="30" y2="36" />
      <line x1="24" y1="6" x2="24" y2="18" />
    </svg>
  ),
  direction: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" />
      <path d="M24 10 L24 24 L34 30" />
      <circle cx="24" cy="24" r="3" />
    </svg>
  ),
  turnkey: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="16" r="8" />
      <line x1="24" y1="24" x2="24" y2="40" />
      <path d="M20 34 L24 38 L28 34" />
      <circle cx="24" cy="16" r="3" />
    </svg>
  ),
  develop: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="10" width="36" height="28" rx="2" />
      <line x1="6" y1="18" x2="42" y2="18" />
      <path d="M16 26 L12 30 L16 34" />
      <path d="M32 26 L36 30 L32 34" />
      <line x1="26" y1="24" x2="22" y2="36" />
    </svg>
  ),
  quality: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4 L30 16 L44 18 L34 28 L36 42 L24 36 L12 42 L14 28 L4 18 L18 16 Z" />
      <path d="M18 24 L22 28 L30 20" />
    </svg>
  ),
  installations: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="6" width="28" height="36" rx="2" />
      <rect x="16" y="12" width="6" height="6" rx="1" />
      <rect x="26" y="12" width="6" height="6" rx="1" />
      <rect x="16" y="22" width="6" height="6" rx="1" />
      <rect x="26" y="22" width="6" height="6" rx="1" />
      <path d="M20 34 L24 32 L28 34" />
      <line x1="24" y1="32" x2="24" y2="42" />
    </svg>
  ),
  cost: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="18" />
      <path d="M28 16 C28 14, 20 14, 20 18 C20 22, 28 22, 28 26 C28 30, 20 30, 20 28" />
      <line x1="24" y1="10" x2="24" y2="14" />
      <line x1="24" y1="30" x2="24" y2="34" />
    </svg>
  ),
  advisory: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 38 L8 14 L24 6 L40 14 L40 38" />
      <line x1="8" y1="14" x2="40" y2="14" />
      <rect x="18" y="24" width="12" height="14" />
      <line x1="24" y1="24" x2="24" y2="38" />
      <line x1="14" y1="20" x2="14" y2="32" />
      <line x1="34" y1="20" x2="34" y2="32" />
    </svg>
  ),
};

// ─── CONTENT DATA ───
const SERVICES = [
  { key: "design", icon: ServiceIcons.design, title: "Diseño Arquitectónico", desc: "Proyectos exclusivos que integran estética contemporánea con funcionalidad y eficiencia constructiva. Cada diseño nace de su terreno, su visión y nuestro rigor técnico." },
  { key: "build", icon: ServiceIcons.build, title: "Construcción", desc: "Ejecución integral con materiales premium y control en cada fase." },
  { key: "direction", icon: ServiceIcons.direction, title: "Dirección Técnica", desc: "Supervisión que garantiza plazos, calidad y normativa." },
  { key: "turnkey", icon: ServiceIcons.turnkey, title: "Gestión Llave en Mano", desc: "Un solo interlocutor. Desde el concepto hasta la entrega." },
  { key: "develop", icon: ServiceIcons.develop, title: "Desarrollo de Proyectos", desc: "Viabilidad técnica y económica para su inversión." },
  { key: "quality", icon: ServiceIcons.quality, title: "Control de Calidad", desc: "Protocolos de inspección. Estándares medibles." },
  { key: "installations", icon: ServiceIcons.installations, title: "Gestión de Instalaciones", desc: "Sistemas eléctricos, hidráulicos, climatización y domótica." },
  { key: "cost", icon: ServiceIcons.cost, title: "Control de Costes", desc: "Presupuestos detallados y seguimiento en tiempo real." },
  { key: "advisory", icon: ServiceIcons.advisory, title: "Asesoría Técnica", desc: "Consultoría experta en normativa, terrenos, permisos y viabilidad para su inversión." },
];

const PROCESS = [
  {
    num: "01",
    title: "Análisis de Terreno",
    subtitle: "Seguridad jurídica en la adquisición",
    desc: "La adquisición del terreno es el primer paso y uno de los más críticos del proyecto. Verificamos la situación legal de la propiedad antes de su adquisición, confirmando titularidad y detectando posibles cargas.",
    detail: "Due diligence legal · Verificación de titularidad · Análisis de viabilidad",
    duration: "2-4 semanas",
  },
  {
    num: "02",
    title: "Validación del Proyecto",
    subtitle: "Viabilidad técnica y normativa",
    desc: "Analizamos el proyecto desde un punto de vista técnico y urbanístico para asegurar su viabilidad antes de avanzar en el desarrollo. Evaluamos condicionantes del terreno y normativa aplicable.",
    detail: "Estudio técnico · Normativa urbanística · Criterios constructivos",
    duration: "1-2 semanas",
  },
  {
    num: "03",
    title: "Co-Diseño",
    subtitle: "Arquitectura e interiorismo a medida",
    desc: "Definimos el proyecto junto al cliente, adaptando la vivienda a sus necesidades, estilo de vida y objetivos de inversión. Cada proyecto es único y se desarrolla con un enfoque totalmente personalizado.",
    detail: "Arquitectura · Interiorismo · Funcionalidad · Diseño personalizado",
    duration: "4-6 semanas",
  },
  {
    num: "04",
    title: "Presupuesto Detallado",
    subtitle: "Control económico desde el inicio",
    desc: "Desarrollamos un presupuesto desglosado por partidas, que permite conocer el alcance real de la inversión antes del inicio de la obra, aportando transparencia y facilitando la toma de decisiones.",
    detail: "Desglose por partidas · Cronograma financiero · Control de costes",
    duration: "1-2 semanas",
  },
  {
    num: "05",
    title: "Construcción",
    subtitle: "Ejecución bajo control técnico",
    desc: "Ejecutamos la obra bajo un modelo basado en planificación rigurosa, supervisión continua y control de calidad en cada fase. El cliente dispone de información periódica sobre el avance.",
    detail: "Supervisión continua · Control de calidad · Informes de avance",
    duration: "12-18 meses",
  },
  {
    num: "06",
    title: "Roiba Care",
    subtitle: "Gestión y mantenimiento post-entrega",
    desc: "El proyecto no finaliza con la entrega. Ofrecemos un servicio de gestión y mantenimiento orientado a preservar el valor de la propiedad y garantizar su correcto funcionamiento a lo largo del tiempo.",
    detail: "Mantenimiento · Supervisión · Gestión operativa · Informes periódicos",
    duration: "Permanente",
  },
];

const PROJECTS = [
  { name: "Excellence Oyster Bay", location: "Jamaica", status: "Completada", type: "Resort premium", year: "2024", image: "/images/projects/excellence-oyster-bay.jpg" },
  { name: "Iguanas 45", location: "Cap Cana, República Dominicana", status: "Completada", type: "Villa unifamiliar", year: "2024", image: "/images/projects/iguanas-45-cap-cana.png" },
  { name: "14 Villas Banus Bay", location: "Puerto Banús, España", status: "Completada", type: "Villas premium", year: "2023", image: "/images/projects/villas-banus-bay.png" },
  { name: "Finest Punta Cana", location: "Punta Cana, República Dominicana", status: "Completada", type: "Resort & Residencias", year: "2024", image: "/images/projects/finest-punta-cana.jpg" },
  { name: "Excellence El Carmen", location: "República Dominicana", status: "Completada", type: "Resort premium", year: "2023", image: "/images/projects/excellence-el-carmen.jpg" },
  { name: "Terrazas de Cortessín", location: "Estepona, España", status: "Completada", type: "Residencial 64 apartamentos", year: "2024", image: "/images/projects/terrazas-cortessin.png" },
  { name: "Mar de Pulpí Fase 7", location: "Almería, España", status: "Completada", type: "Residencial costero", year: "2024", image: "/images/projects/mar-de-pulpi.png" },
  { name: "Cayuco 11", location: "Cap Cana, República Dominicana", status: "Completada", type: "Villa unifamiliar", year: "2024", image: "/images/projects/cayuco-11-cap-cana.png" },
  { name: "Hotel Live Aqua", location: "Uvero Alto, República Dominicana", status: "Completada", type: "Hotel resort", year: "2024", image: "/images/projects/hotel-live-aqua.png" },
  { name: "Atalaya Emotion", location: "Puerto Banús, España", status: "Completada", type: "64 apartamentos premium", year: "2024", image: "/images/projects/atalaya-emotion.png" },
];

const STATS = [
  { value: "15+", label: "Proyectos entregados" },
  { value: "98%", label: "Satisfacción cliente" },
  { value: "2", label: "Países operativos" },
  { value: "0", label: "Retrasos en entrega" },
];

export default function HomePage() {
  const [activeProcess, setActiveProcess] = useState(0)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [carouselPaused, setCarouselPaused] = useState(false)

  useEffect(() => {
    injectStyles()
    const handleScroll = () => setScrollY(window.scrollY || 0)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (carouselPaused) return
    const timer = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % PROJECTS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselPaused])

  useScrollReveal()

  return (
    <div className="roiba" style={{ background: C.arenaLight, minHeight: '100vh' }}>

      {/* ═══ HERO ═══ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(170deg, ${C.verde} 0%, ${C.verdeMid} 40%, ${C.verdeLight} 100%)`,
          overflow: "hidden",
        }}
        className="grain"
      >
        {/* Geometric accents */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "8%",
            width: 300,
            height: 300,
            border: `1px solid ${C.doradoArena}15`,
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: 200,
            height: 200,
            border: `1px solid ${C.doradoArena}10`,
            transform: "rotate(45deg)",
            animation: "float 10s ease-in-out infinite 2s",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "15%",
            width: 1,
            height: 120,
            background: `linear-gradient(to bottom, transparent, ${C.doradoArena}30, transparent)`,
          }}
        />

        {/* Hero content */}
        <div
          style={{
            textAlign: "center",
            zIndex: 2,
            padding: "0 24px",
            animation: "fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
          }}
        >
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: C.doradoArena,
              marginBottom: 32,
              animation: "fadeIn 1s ease 0.3s both",
            }}
          >
            Construcción Premium en el Caribe
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 7vw, 88px)",
              fontWeight: 300,
              color: C.arena,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            Arquitectura,{" "}
            <span style={{ fontStyle: "italic", color: C.dorado }}>control</span>
            <br />y confianza
          </h1>

          <div
            style={{
              width: 60,
              height: 1,
              background: C.doradoArena,
              margin: "36px auto",
              animation: "revealLine 1s ease 0.8s both",
              transformOrigin: "center",
            }}
          />

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 15,
              fontWeight: 300,
              color: `${C.arena}cc`,
              maxWidth: 520,
              margin: "0 auto 48px",
              lineHeight: 1.7,
              letterSpacing: "0.02em",
              animation: "fadeIn 1s ease 1s both",
            }}
          >
            Villas premium llave en mano. Diseño contemporáneo,
            <br />
            gestión integral y un proceso totalmente personalizado.
          </p>

          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "center",
              animation: "fadeUp 1s ease 1.2s both",
            }}
          >
            <button
              onClick={() => window.location.href = '/contacto'}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "16px 40px",
                background: C.doradoArena,
                color: C.verde,
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = C.dorado;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${C.doradoArena}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = C.doradoArena;
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Contáctanos
            </button>
            <button
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "16px 40px",
                background: "transparent",
                color: C.arena,
                border: `1px solid ${C.arena}40`,
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = C.doradoArena;
                (e.currentTarget as HTMLElement).style.color = C.dorado;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${C.arena}40`;
                (e.currentTarget as HTMLElement).style.color = C.arena;
              }}
            >
              Ver Proyectos
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            animation: "pulse 2.5s ease infinite",
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: `${C.arena}60`,
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 30,
              background: `linear-gradient(to bottom, ${C.doradoArena}60, transparent)`,
            }}
          />
        </div>
      </section>

      {/* ═══ STATS MARQUEE ═══ */}
      <section
        style={{
          background: C.verde,
          padding: "20px 0",
          overflow: "hidden",
          borderTop: `1px solid ${C.doradoArena}20`,
          borderBottom: `1px solid ${C.doradoArena}20`,
        }}
      >
        <div className="marquee-track" style={{ width: "fit-content" }}>
          {[...STATS, ...STATS, ...STATS, ...STATS].map((s, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "0 48px",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 600,
                  color: C.dorado,
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11,
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  color: `${C.arena}90`,
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </span>
              <span style={{ color: `${C.doradoArena}30`, margin: "0 24px" }}>◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ABOUT / TRUST ═══ */}
      <section style={{ padding: "clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)", background: C.arenaLight }}>
        <div className="about-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <span
              className="animate-on-scroll"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.doradoArena,
                display: "block",
                marginBottom: 16,
              }}
            >
              Quiénes Somos
            </span>
            <h2
              className="animate-on-scroll delay-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: C.verde,
                marginBottom: 32,
              }}
            >
              Precisión constructiva,
              <br />
              <span style={{ fontStyle: "italic", color: C.doradoArena }}>visión integral</span>
            </h2>
            <div
              className="animate-on-scroll delay-2"
              style={{
                width: 48,
                height: 2,
                background: C.doradoArena,
                marginBottom: 32,
              }}
            />
            <p
              className="animate-on-scroll delay-3"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: C.gris,
                fontWeight: 400,
                marginBottom: 20,
              }}
            >
              Grupo Roiba es una firma especializada en dirección técnica y supervisión de obra, así como en la construcción de villas premium en la zona este de República Dominicana, con especial enfoque en Punta Cana.
            </p>
            <p
              className="animate-on-scroll delay-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 14,
                lineHeight: 1.85,
                color: C.gris,
                fontWeight: 400,
              }}
            >
              Paralelamente, desarrollamos y construimos villas premium totalmente personalizadas, definiendo cada proyecto en función de los requerimientos técnicos, funcionales y estéticos del cliente, bajo un modelo de ejecución basado en precisión constructiva, planificación rigurosa y altos estándares de acabado.
            </p>
          </div>

          {/* Visual block */}
          <div className="animate-on-scroll delay-2 about-visual-col" style={{ position: "relative" }}>
            <div
              style={{
                aspectRatio: "4/5",
                background: `linear-gradient(135deg, ${C.verde}, ${C.verdeMid})`,
                position: "relative",
                overflow: "hidden",
              }}
              className="grain"
            >
              <div
                style={{
                  position: "absolute",
                  inset: 24,
                  border: `1px solid ${C.doradoArena}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/images/logo-white.png"
                  alt="Grupo Roiba"
                  style={{
                    width: "60%",
                    maxWidth: 220,
                    height: "auto",
                    opacity: 0.9,
                  }}
                />
              </div>
            </div>
            {/* Offset accent */}
            <div
              style={{
                position: "absolute",
                bottom: -16,
                right: -16,
                width: 100,
                height: 100,
                background: C.doradoArena,
                zIndex: -1,
                opacity: 0.15,
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══ SERVICES (Redesigned — Editorial Bento) ═══ */}
      <section id="servicios" style={{ padding: "clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)", background: C.arenaLight, position: "relative", overflow: "hidden" }}>
        {/* Subtle dot pattern background */}
        <div className="dot-pattern" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          {/* Section header with decorative line */}
          <div className="services-header-row" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 72, borderBottom: `1px solid ${C.doradoArena}20`, paddingBottom: 32 }}>
            <div>
              <span
                className="animate-on-scroll"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: C.doradoArena,
                  display: "block",
                  marginBottom: 16,
                }}
              >
                Nuestros Servicios
              </span>
              <h2
                className="animate-on-scroll delay-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 400,
                  color: C.verde,
                  lineHeight: 1.15,
                }}
              >
                Ingeniería aplicada{" "}
                <span style={{ fontStyle: "italic", color: C.doradoArena }}>con precisión</span>
              </h2>
            </div>
            <span
              className="animate-on-scroll delay-2 services-header-desc"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12,
                color: C.gris,
                maxWidth: 320,
                lineHeight: 1.7,
                textAlign: "right",
                display: "block",
              }}
            >
              Control integral del proceso constructivo.
              Cada servicio responde a una necesidad real del proyecto.
            </span>
          </div>

          {/* Services grid — icon left, text right, compact */}
          <div
            className="animate-on-scroll services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
            }}
          >
            {SERVICES.map((svc, i) => (
              <div
                key={svc.key}
                className={`service-card service-grid-item animate-on-scroll delay-${Math.min(i % 3 + 1, 6)}`}
                onMouseEnter={() => setHoveredService(svc.key)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  background: hoveredService === svc.key ? C.verde : C.blanco,
                  border: `1px solid ${C.doradoArena}15`,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                  transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 36,
                  height: 36,
                  minWidth: 36,
                  color: hoveredService === svc.key ? C.dorado : C.doradoArena,
                  transition: "color 0.5s",
                  marginTop: 2,
                }}>
                  {svc.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 20,
                    fontWeight: 600,
                    color: hoveredService === svc.key ? C.arena : C.verde,
                    marginBottom: 6,
                    lineHeight: 1.2,
                    transition: "color 0.5s",
                  }}>{svc.title}</h3>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12,
                    lineHeight: 1.65,
                    color: hoveredService === svc.key ? `${C.arena}aa` : C.gris,
                    transition: "color 0.5s",
                  }}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile scroll hint */}
          <div
            className="services-scroll-hint"
            style={{
              display: "none",
              alignItems: "center",
              gap: 8,
              marginTop: 16,
              justifyContent: "center",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: C.doradoArena,
              opacity: 0.7,
            }}
          >
            <span>Desliza para ver más</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 8h8M9 5l3 3-3 3"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS (Interactive Tabs) ═══ */}
      <section
        id="proceso"
        style={{
          padding: "clamp(80px, 10vw, 140px) clamp(24px, 8vw, 120px)",
          background: C.verde,
          position: "relative",
          overflow: "hidden",
        }}
        className="grain"
      >
        {/* Background geometric */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-5%",
            width: 400,
            height: 400,
            border: `1px solid ${C.doradoArena}08`,
            borderRadius: "50%",
            transform: "translateY(-50%)",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span
              className="animate-on-scroll"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: C.doradoArena,
                display: "block",
                marginBottom: 16,
              }}
            >
              Nuestro Proceso
            </span>
            <h2
              className="animate-on-scroll delay-1"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: C.arena,
              }}
            >
              Del concepto a la{" "}
              <span style={{ fontStyle: "italic", color: C.dorado }}>realidad</span>
            </h2>
          </div>

          <div className="animate-on-scroll delay-2 process-layout" style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 48 }}>
            {/* Tab buttons */}
            <div className="process-tabs-col" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {PROCESS.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProcess(i)}
                  className={`process-tab-btn${activeProcess === i ? ' active-tab' : ''}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "18px 24px",
                    background: activeProcess === i ? `${C.doradoArena}15` : "transparent",
                    border: "none",
                    borderLeft: activeProcess === i ? `3px solid ${C.doradoArena}` : `3px solid transparent`,
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    textAlign: "left",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    if (activeProcess !== i) e.currentTarget.style.background = `${C.doradoArena}08`;
                  }}
                  onMouseLeave={(e) => {
                    if (activeProcess !== i) e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 28,
                      fontWeight: 300,
                      color: activeProcess === i ? C.dorado : `${C.arena}40`,
                      transition: "color 0.4s",
                      minWidth: 40,
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        color: activeProcess === i ? C.arena : `${C.arena}70`,
                        transition: "color 0.4s",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {step.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 11,
                        fontWeight: 400,
                        color: `${C.arena}50`,
                        marginTop: 2,
                      }}
                    >
                      {step.subtitle}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Active content panel */}
            <div
              key={activeProcess}
              className="process-detail-panel"
              style={{
                background: `${C.doradoArena}08`,
                border: `1px solid ${C.doradoArena}15`,
                padding: 48,
                animation: "fadeIn 0.5s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 20,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 64,
                    fontWeight: 300,
                    color: C.doradoArena,
                    lineHeight: 1,
                    opacity: 0.3,
                  }}
                >
                  {PROCESS[activeProcess].num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 32,
                      fontWeight: 500,
                      color: C.arena,
                    }}
                  >
                    {PROCESS[activeProcess].title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      color: C.doradoArena,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {PROCESS[activeProcess].subtitle}
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: `${C.arena}cc`,
                  fontWeight: 400,
                  marginBottom: 32,
                }}
              >
                {PROCESS[activeProcess].desc}
              </p>

              <div
                style={{
                  padding: "16px 20px",
                  background: `${C.doradoArena}08`,
                  borderLeft: `2px solid ${C.doradoArena}40`,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: C.doradoArena,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Entregables
                </span>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    color: `${C.arena}aa`,
                  }}
                >
                  {PROCESS[activeProcess].detail}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={C.doradoArena} strokeWidth="1.5">
                  <circle cx="8" cy="8" r="6" />
                  <path d="M8 4 L8 8 L11 10" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12,
                    color: `${C.arena}80`,
                    fontWeight: 500,
                  }}
                >
                  Duración estimada: {PROCESS[activeProcess].duration}
                </span>
              </div>

              {/* Progress dots */}
              <div style={{ display: "flex", gap: 8, marginTop: 32 }}>
                {PROCESS.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveProcess(i)}
                    style={{
                      width: activeProcess === i ? 32 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: activeProcess === i ? C.doradoArena : `${C.arena}20`,
                      transition: "all 0.4s ease",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO CAROUSEL ═══ */}
      <section id="proyectos" style={{ padding: "clamp(60px, 8vw, 100px) 0", background: C.arenaLight }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(24px, 8vw, 120px)" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
            <div>
              <span
                className="animate-on-scroll"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: C.doradoArena,
                  display: "block",
                  marginBottom: 16,
                }}
              >
                Portfolio
              </span>
              <h2
                className="animate-on-scroll delay-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 400,
                  color: C.verde,
                  lineHeight: 1.15,
                }}
              >
                Proyectos que{" "}
                <span style={{ fontStyle: "italic", color: C.doradoArena }}>trascienden</span>
              </h2>
            </div>

            {/* Carousel nav buttons */}
            <div className="animate-on-scroll delay-2" style={{ display: "flex", gap: 8 }}>
              <button
                className="carousel-nav-btn"
                onClick={() => setCarouselIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)}
                aria-label="Proyecto anterior"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
              <button
                className="carousel-nav-btn"
                onClick={() => setCarouselIdx((prev) => (prev + 1) % PROJECTS.length)}
                aria-label="Proyecto siguiente"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel container — full width */}
        <div
          className="animate-on-scroll"
          onMouseEnter={() => setCarouselPaused(true)}
          onMouseLeave={() => setCarouselPaused(false)}
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {/* Slides wrapper */}
          <div style={{
            display: "flex",
            transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: `translateX(-${carouselIdx * 100}%)`,
          }}>
            {PROJECTS.map((proj, i) => (
              <div
                key={i}
                style={{
                  minWidth: "100%",
                  position: "relative",
                }}
              >
                {/* Image area */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "21/9",
                    background: C.verde,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Project photo */}
                  <img
                    src={proj.image}
                    alt={proj.name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    loading={i === 0 ? "eager" : "lazy"}
                  />

                  {/* Bottom gradient overlay for text legibility */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "60%",
                    background: `linear-gradient(to top, ${C.verde}ee 0%, ${C.verde}80 40%, transparent 100%)`,
                  }} />

                  {/* Project info overlay */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "0 clamp(32px, 8vw, 120px) clamp(32px, 5vw, 56px)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}>
                    {/* Left: project details */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                        <span style={{
                          display: "inline-block",
                          padding: "5px 16px",
                          background: proj.status === "Completada" ? C.doradoArena : `${C.arena}15`,
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 9,
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: proj.status === "Completada" ? C.verde : C.arena,
                        }}>{proj.status}</span>
                        <span style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 11,
                          color: `${C.arena}60`,
                          letterSpacing: "0.1em",
                        }}>{proj.year}</span>
                      </div>
                      <h3 style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(28px, 4vw, 48px)",
                        fontWeight: 500,
                        color: C.arena,
                        marginBottom: 6,
                        lineHeight: 1.15,
                      }}>{proj.name}</h3>
                      <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 13,
                        color: `${C.arena}80`,
                        letterSpacing: "0.05em",
                      }}>{proj.location}</p>
                    </div>

                    {/* Right: specs */}
                    <div style={{ display: "flex", gap: 40, paddingBottom: 4 }}>
                      <div style={{ textAlign: "right" }}>
                        <span style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 9,
                          fontWeight: 600,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: C.doradoArena,
                          display: "block",
                          marginBottom: 4,
                        }}>Tipología</span>
                        <span style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: 20,
                          fontWeight: 500,
                          color: C.arena,
                        }}>{proj.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Slide counter */}
                  <div style={{
                    position: "absolute",
                    top: "clamp(24px, 4vw, 48px)",
                    right: "clamp(32px, 8vw, 120px)",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 14,
                    color: `${C.arena}50`,
                    letterSpacing: "0.15em",
                  }}>
                    <span style={{ color: C.doradoArena, fontSize: 22, fontWeight: 500 }}>{String(i + 1).padStart(2, "0")}</span>
                    <span style={{ margin: "0 6px" }}>/</span>
                    <span>{String(PROJECTS.length).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32, padding: "0 24px" }}>
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className="carousel-dot"
              onClick={() => setCarouselIdx(i)}
              aria-label={`Proyecto ${i + 1}`}
              style={{
                background: carouselIdx === i ? C.doradoArena : `${C.doradoArena}30`,
                width: carouselIdx === i ? 48 : 32,
              }}
            />
          ))}
        </div>
      </section>

      {/* ═══ CTA / CONTACT ═══ */}
      <section
        id="contacto"
        style={{
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 8vw, 120px)",
          background: C.verde,
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
        className="grain"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 1,
            height: "100%",
            background: `linear-gradient(to bottom, ${C.doradoArena}15, transparent)`,
          }}
        />

        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span
            className="animate-on-scroll"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: C.doradoArena,
              display: "block",
              marginBottom: 24,
            }}
          >
            Siguiente Paso
          </span>

          <h2
            className="animate-on-scroll delay-1"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 400,
              color: C.arena,
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Hablemos de{" "}
            <span style={{ fontStyle: "italic", color: C.dorado }}>su proyecto</span>
          </h2>

          <p
            className="animate-on-scroll delay-2"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 14,
              lineHeight: 1.8,
              color: `${C.arena}aa`,
              marginBottom: 48,
              fontWeight: 400,
            }}
          >
            Solicite un análisis personalizado sin compromiso. Nuestro equipo evaluará
            la viabilidad técnica y financiera de su proyecto en 48 horas.
          </p>

          <div className="animate-on-scroll delay-3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => window.location.href = '/contacto'}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "18px 48px",
                background: C.doradoArena,
                color: C.verde,
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = C.dorado;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${C.doradoArena}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = C.doradoArena;
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Contáctanos
            </button>
            <button
              onClick={() => window.location.href = 'mailto:info@gruporoiba.com'}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "18px 48px",
                background: "transparent",
                color: C.arena,
                border: `1px solid ${C.arena}30`,
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = C.doradoArena;
                (e.currentTarget as HTMLElement).style.color = C.dorado;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${C.arena}30`;
                (e.currentTarget as HTMLElement).style.color = C.arena;
              }}
            >
              Escribir Email
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
