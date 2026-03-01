'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

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
    @keyframes kenBurns {
      0% { transform: scale(1) translate(0, 0); }
      100% { transform: scale(1.15) translate(-2%, -1%); }
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
      transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
      cursor: pointer;
    }
    .roiba .service-card:hover {
      transform: scale(1.03);
      box-shadow: 0 20px 60px rgba(12,35,64,0.3);
      z-index: 10;
    }
    .roiba .service-card.card-open {
      transform: scale(1.02);
      box-shadow: 0 16px 50px rgba(12,35,64,0.25);
      z-index: 10;
    }
    .roiba .service-card:hover .svc-img,
    .roiba .service-card.card-open .svc-img {
      transform: scale(1.1);
    }
    .roiba .service-card:hover .svc-accent,
    .roiba .service-card.card-open .svc-accent {
      opacity: 1 !important;
    }
    .roiba .service-card .svc-desc {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .roiba .service-card:hover .svc-desc,
    .roiba .service-card.card-open .svc-desc {
      max-height: 120px;
      opacity: 1;
      margin-top: 8px;
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
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        border-left: none !important;
        border-bottom: 1px solid rgba(12,35,64,0.1);
        gap: 0 !important;
        scrollbar-width: none;
      }
      .roiba .process-tabs-col::-webkit-scrollbar { display: none; }
      .roiba .process-tab-btn {
        min-width: 140px !important;
        flex-shrink: 0;
        scroll-snap-align: start;
        border-left: none !important;
        border-bottom: 2px solid transparent;
        padding: 12px 16px !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 4px !important;
        min-height: 44px;
      }
      .roiba .process-tab-btn.active-tab {
        border-bottom-color: #C9A96E;
      }
      .roiba .process-detail-panel { padding: 24px 16px !important; }
      /* Testimonials — smaller text on mobile */
      .roiba .testimonial-quote { font-size: clamp(18px, 5vw, 22px) !important; }
    }
    @media (max-width: 480px) {
      .roiba .service-grid-item { min-width: min(88vw, 280px) !important; }
      .roiba .process-tab-btn { min-width: 120px !important; padding: 10px 12px !important; }
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

// ─── CONTENT DATA ───
const SERVICES = [
  { key: "design", title: "Diseño Arquitectónico", desc: "Proyectos exclusivos que integran estética contemporánea con funcionalidad y eficiencia constructiva.", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&fit=crop" },
  { key: "build", title: "Construcción", desc: "Ejecución integral con materiales premium y control en cada fase.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&fit=crop" },
  { key: "direction", title: "Dirección Técnica", desc: "Supervisión que garantiza plazos, calidad y normativa.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fit=crop" },
  { key: "turnkey", title: "Gestión Llave en Mano", desc: "Un solo interlocutor. Desde el concepto hasta la entrega.", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fit=crop" },
  { key: "develop", title: "Desarrollo de Proyectos", desc: "Viabilidad técnica y económica para su inversión.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&fit=crop" },
  { key: "quality", title: "Control de Calidad", desc: "Protocolos de inspección. Estándares medibles.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&fit=crop" },
  { key: "installations", title: "Gestión de Instalaciones", desc: "Sistemas eléctricos, hidráulicos, climatización y domótica.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&fit=crop" },
  { key: "cost", title: "Control de Costes", desc: "Presupuestos detallados y seguimiento en tiempo real.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&fit=crop" },
  { key: "advisory", title: "Asesoría Técnica", desc: "Consultoría experta en normativa, terrenos, permisos y viabilidad.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop" },
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

const STATS = [
  { value: "15+", label: "Proyectos entregados" },
  { value: "98%", label: "Satisfacción cliente" },
  { value: "2", label: "Países operativos" },
  { value: "0", label: "Retrasos en entrega" },
];

const TESTIMONIALS = [
  {
    quote: "Grupo Roiba nos ofreció algo que no habíamos encontrado en ningún otro constructor en Punta Cana: transparencia real. Cada semana recibíamos informes detallados con fotos, costes actualizados y un cronograma que se cumplió al día. La villa superó todas nuestras expectativas.",
    name: "Carlos & Lucía M.",
    role: "Propietarios de villa",
    location: "Madrid, España",
  },
  {
    quote: "Construir nuestra villa desde Miami con un equipo en el Caribe parecía un reto enorme. Iván y Ramón lo hicieron simple. Su dominio técnico, la comunicación constante y el respeto escrupuloso al presupuesto nos dieron una confianza total desde el primer día.",
    name: "James & Patricia W.",
    role: "Propietarios de villa en Cap Cana",
    location: "Miami, Florida, EE.UU.",
  },
  {
    quote: "Buscábamos un equipo que entendiera nuestras expectativas de calidad y las trasladara al Caribe. Roiba lo consiguió. La atención al detalle en los acabados, la selección de materiales y el control de calidad fueron impecables. Recomendamos Grupo Roiba sin reservas.",
    name: "Elena & Roberto V.",
    role: "Propietarios de villa",
    location: "Marbella, España",
  },
  {
    quote: "Construir en el Caribe desde Colombia parecía un proceso incierto, pero Grupo Roiba nos guió en cada etapa con profesionalismo y honestidad. La gestión de permisos, los arquitectos locales, la calidad de los materiales... todo fue exactamente como nos prometieron.",
    name: "Andrés & Camila R.",
    role: "Propietarios de villa en Punta Cana",
    location: "Bogotá, Colombia",
  },
  {
    quote: "El servicio Roiba Care fue decisivo en nuestra decisión. Saber que nuestra propiedad estará supervisada y mantenida profesionalmente cuando estamos en Nueva York nos da una tranquilidad absoluta. Es un servicio post-entrega que realmente marca la diferencia.",
    name: "David & Lauren Chen",
    role: "Propietarios de villa",
    location: "New York, EE.UU.",
  },
];

// ─── HERO BACKGROUND IMAGES — Arquitectura de lujo, villas, dron ───
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90&fit=crop',  // Villa de lujo moderna con piscina infinita
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90&fit=crop',  // Mansión contemporánea vista aérea
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90&fit=crop',  // Interior villa lujo salón diseño
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=90&fit=crop',  // Villa tropical con palmeras vista dron
]

export default function HomePage() {
  const [activeProcess, setActiveProcess] = useState(0)
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const [openService, setOpenService] = useState<string | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [heroImgIdx, setHeroImgIdx] = useState(0)
  const [hasVideo, setHasVideo] = useState(false)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)

  const handleTestimonialTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }, [])

  const handleTestimonialTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchStartRef.current) return
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)
      else setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    }
    touchStartRef.current = null
  }, [])

  useEffect(() => {
    injectStyles()
    const handleScroll = () => setScrollY(window.scrollY || 0)
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Check if local video exists
    const vid = document.createElement('video')
    vid.src = '/videos/hero-bg.mp4'
    vid.onloadeddata = () => setHasVideo(true)
    vid.onerror = () => setHasVideo(false)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hero image slideshow
  useEffect(() => {
    if (hasVideo) return
    const timer = setInterval(() => {
      setHeroImgIdx((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [hasVideo])

  // Testimonial auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

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
          background: C.verde,
          overflow: "hidden",
        }}
        className="grain"
      >
        {/* Background: Video (if available) or Image Slideshow with Ken Burns */}
        {hasVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        ) : (
          <>
            {HERO_IMAGES.map((src, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: heroImgIdx === i ? 1 : 0,
                  transition: "opacity 1.5s ease-in-out",
                  zIndex: 0,
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    animation: heroImgIdx === i ? "kenBurns 7s ease-in-out forwards" : "none",
                  }}
                />
              </div>
            ))}
          </>
        )}
        {/* Dark overlay to maintain text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `${C.verde}CC`,
            zIndex: 1,
          }}
        />
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
            zIndex: 1,
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
            zIndex: 1,
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
            zIndex: 1,
          }}
        />

        {/* Hero content */}
        <div
          style={{
            textAlign: "center",
            zIndex: 2,
            position: "relative",
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
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
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
              Ver Servicios
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
            zIndex: 2,
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
                background: C.verde,
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
            {SERVICES.map((svc, i) => {
              const isOpen = openService === svc.key
              return (
                <div
                  key={svc.key}
                  className={`service-card service-grid-item animate-on-scroll delay-${Math.min(i % 3 + 1, 6)} ${isOpen ? 'card-open' : ''}`}
                  onClick={() => setOpenService(isOpen ? null : svc.key)}
                  style={{
                    position: "relative",
                    aspectRatio: "3/4",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "none",
                    padding: 0,
                  }}
                >
                  {/* Background photo */}
                  <img
                    src={svc.image}
                    alt={svc.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    className="svc-img"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to top, ${C.verde} 0%, ${C.verde}99 35%, transparent 100%)`,
                    transition: "opacity 0.5s",
                  }} />
                  {/* Gold top accent */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: C.doradoArena,
                    opacity: 0,
                    transition: "opacity 0.5s",
                  }} className="svc-accent" />
                  {/* Content at bottom */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "24px",
                  }}>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 20,
                      fontWeight: 600,
                      color: C.arena,
                      lineHeight: 1.2,
                    }}>{svc.title}</h3>
                    {/* Description — revealed on hover/tap */}
                    <div className="svc-desc">
                      <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 11,
                        lineHeight: 1.65,
                        color: `${C.arena}aa`,
                      }}>{svc.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
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
          background: C.arenaLight,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background geometric */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-5%",
            width: 400,
            height: 400,
            border: `1px solid ${C.verde}08`,
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
                color: C.verde,
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
                    background: activeProcess === i ? `${C.verde}0a` : "transparent",
                    border: "none",
                    borderLeft: activeProcess === i ? `3px solid ${C.doradoArena}` : `3px solid transparent`,
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    textAlign: "left",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    if (activeProcess !== i) e.currentTarget.style.background = `${C.verde}05`;
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
                      color: activeProcess === i ? C.dorado : `${C.verde}30`,
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
                        color: activeProcess === i ? C.verde : `${C.verde}70`,
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
                        color: `${C.verde}50`,
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
                background: "#FFFFFF",
                border: `1px solid ${C.verde}10`,
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
                      color: C.verde,
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
                  color: `${C.verde}b0`,
                  fontWeight: 400,
                  marginBottom: 32,
                }}
              >
                {PROCESS[activeProcess].desc}
              </p>

              <div
                style={{
                  padding: "16px 20px",
                  background: `${C.doradoArena}0a`,
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
                    color: `${C.verde}80`,
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
                    color: `${C.verde}70`,
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
                      background: activeProcess === i ? C.doradoArena : `${C.verde}15`,
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

      {/* ═══ TESTIMONIALS ═══ */}
      <section
        style={{
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 8vw, 120px)",
          background: C.verde,
          position: "relative",
          overflow: "hidden",
        }}
        className="grain"
      >
        {/* Decorative quote mark */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "8%",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(200px, 25vw, 400px)",
            fontWeight: 300,
            color: `${C.doradoArena}06`,
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          &ldquo;
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
          {/* Header */}
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: 56 }}>
            <span
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
              Testimonios
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: C.arena,
              }}
            >
              Lo que dicen{" "}
              <span style={{ fontStyle: "italic", color: C.dorado }}>nuestros clientes</span>
            </h2>
          </div>

          {/* Testimonial card */}
          <div
            className="animate-on-scroll delay-1 touch-pan-y"
            style={{ position: "relative", minHeight: 280 }}
            onTouchStart={handleTestimonialTouchStart}
            onTouchEnd={handleTestimonialTouchEnd}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  position: i === testimonialIdx ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  opacity: i === testimonialIdx ? 1 : 0,
                  transform: i === testimonialIdx ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                  pointerEvents: i === testimonialIdx ? "auto" : "none",
                  textAlign: "center",
                }}
              >
                {/* Stars */}
                <div style={{ marginBottom: 24, display: "flex", justifyContent: "center", gap: 4 }}>
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={C.doradoArena}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(20px, 2.5vw, 26px)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: `${C.arena}dd`,
                    lineHeight: 1.65,
                    marginBottom: 32,
                    maxWidth: 720,
                    margin: "0 auto 32px",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Divider */}
                <div style={{ width: 40, height: 1, background: C.doradoArena, margin: "0 auto 24px", opacity: 0.4 }} />

                {/* Author */}
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.arena,
                    letterSpacing: "0.05em",
                    marginBottom: 4,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    fontWeight: 400,
                    color: C.doradoArena,
                    marginBottom: 2,
                  }}
                >
                  {t.role}
                </p>
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    fontWeight: 400,
                    color: `${C.arena}50`,
                  }}
                >
                  {t.location}
                </p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 40 }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                aria-label={`Testimonio ${i + 1}`}
                style={{
                  width: testimonialIdx === i ? 32 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: testimonialIdx === i ? C.doradoArena : `${C.arena}20`,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                }}
              />
            ))}
          </div>
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
