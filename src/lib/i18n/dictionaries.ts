export type Locale = 'es' | 'en'

export const dictionaries = {
  es: {
    nav: {
      servicios: 'Servicios',
      proceso: 'Proceso',
      villas: 'Villas',
      destino: 'Destino',
      nosotros: 'Nosotros',
      contactar: 'Contactar',
      blog: 'Blog',
    },
    hero: {
      eyebrow: 'Construcción Premium en el Caribe',
      title1: 'Arquitectura,',
      titleAccent: 'control',
      title2: 'y confianza',
      subtitle: 'Villas premium llave en mano. Diseño contemporáneo, gestión integral y un proceso totalmente personalizado.',
      cta: 'Contáctanos',
      ctaSecondary: 'Ver Servicios',
      scroll: 'Scroll',
    },
    stats: {
      proyectos: 'Proyectos entregados',
      satisfaccion: 'Satisfacción cliente',
      paises: 'Países operativos',
      retrasos: 'Retrasos en entrega',
    },
    about: {
      eyebrow: 'Quiénes Somos',
      title1: 'Precisión constructiva,',
      titleAccent: 'visión integral',
      p1: 'Grupo Roiba es una firma especializada en dirección técnica y supervisión de obra, así como en la construcción de villas premium en la zona este de República Dominicana, con especial enfoque en Punta Cana.',
      p2: 'Paralelamente, desarrollamos y construimos villas premium totalmente personalizadas, definiendo cada proyecto en función de los requerimientos técnicos, funcionales y estéticos del cliente, bajo un modelo de ejecución basado en precisión constructiva, planificación rigurosa y altos estándares de acabado.',
    },
    services: {
      eyebrow: 'Nuestros Servicios',
      title: 'Ingeniería aplicada',
      titleAccent: 'con precisión',
      subtitle: 'Control integral del proceso constructivo. Cada servicio responde a una necesidad real del proyecto.',
      scrollHint: 'Desliza para ver más',
    },
    process: {
      eyebrow: 'Nuestro Proceso',
      title: 'Del concepto a la',
      titleAccent: 'realidad',
      deliverables: 'Entregables',
      duration: 'Duración estimada',
    },
    testimonials: {
      eyebrow: 'Testimonios',
      title: 'Lo que dicen',
      titleAccent: 'nuestros clientes',
    },
    cta: {
      eyebrow: 'Siguiente Paso',
      title: 'Hablemos de',
      titleAccent: 'su proyecto',
      subtitle: 'Solicite un análisis personalizado sin compromiso. Nuestro equipo evaluará la viabilidad técnica y financiera de su proyecto en 48 horas.',
      primary: 'Contáctanos',
      secondary: 'Escribir Email',
    },
    footer: {
      rights: 'Todos los derechos reservados',
      privacidad: 'Privacidad',
      terminos: 'Términos',
      cookies: 'Cookies',
    },
    cookie: {
      message: 'Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación y analizar el tráfico del sitio.',
      link: 'Política de Cookies',
      accept: 'Aceptar',
      reject: 'Rechazar',
    },
    brochure: {
      eyebrow: 'Guía gratuita',
      title: 'Guía de inversión en Punta Cana',
      subtitle: 'Descargue nuestra guía completa con análisis de mercado, marco legal, fiscalidad y oportunidades de inversión.',
      placeholder: 'Su email',
      cta: 'Descargar guía',
      success: '¡Gracias! Revise su correo electrónico.',
    },
  },
  en: {
    nav: {
      servicios: 'Services',
      proceso: 'Process',
      villas: 'Villas',
      destino: 'Destination',
      nosotros: 'About',
      contactar: 'Contact',
      blog: 'Blog',
    },
    hero: {
      eyebrow: 'Premium Construction in the Caribbean',
      title1: 'Architecture,',
      titleAccent: 'control',
      title2: 'and trust',
      subtitle: 'Premium turnkey villas. Contemporary design, integral management and a fully personalized process.',
      cta: 'Contact Us',
      ctaSecondary: 'View Services',
      scroll: 'Scroll',
    },
    stats: {
      proyectos: 'Projects delivered',
      satisfaccion: 'Client satisfaction',
      paises: 'Countries active',
      retrasos: 'Delivery delays',
    },
    about: {
      eyebrow: 'Who We Are',
      title1: 'Construction precision,',
      titleAccent: 'integral vision',
      p1: 'Grupo Roiba is a firm specialized in technical management and construction supervision, as well as premium villa construction in the eastern Dominican Republic, with a focus on Punta Cana.',
      p2: 'We develop and build fully customized premium villas, defining each project based on the client\'s technical, functional and aesthetic requirements, under an execution model based on construction precision, rigorous planning and high finishing standards.',
    },
    services: {
      eyebrow: 'Our Services',
      title: 'Applied engineering',
      titleAccent: 'with precision',
      subtitle: 'Integral control of the construction process. Each service responds to a real project need.',
      scrollHint: 'Swipe to see more',
    },
    process: {
      eyebrow: 'Our Process',
      title: 'From concept to',
      titleAccent: 'reality',
      deliverables: 'Deliverables',
      duration: 'Estimated duration',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What our',
      titleAccent: 'clients say',
    },
    cta: {
      eyebrow: 'Next Step',
      title: 'Let\'s discuss',
      titleAccent: 'your project',
      subtitle: 'Request a personalized analysis with no obligation. Our team will assess the technical and financial viability of your project within 48 hours.',
      primary: 'Contact Us',
      secondary: 'Send Email',
    },
    footer: {
      rights: 'All rights reserved',
      privacidad: 'Privacy',
      terminos: 'Terms',
      cookies: 'Cookies',
    },
    cookie: {
      message: 'We use our own and third-party cookies to improve your browsing experience and analyze site traffic.',
      link: 'Cookie Policy',
      accept: 'Accept',
      reject: 'Reject',
    },
    brochure: {
      eyebrow: 'Free guide',
      title: 'Punta Cana Investment Guide',
      subtitle: 'Download our complete guide with market analysis, legal framework, taxation and investment opportunities.',
      placeholder: 'Your email',
      cta: 'Download guide',
      success: 'Thank you! Check your email.',
    },
  },
}

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>
}

export type Dictionary = DeepStringify<typeof dictionaries.es>
