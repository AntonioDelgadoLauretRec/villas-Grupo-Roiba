import { createClient } from '@/lib/supabase/server'
import BlogArticlePage from './BlogArticlePage'

const ARTICLES: Record<string, { es: ArticleData; en: ArticleData }> = {
  'por-que-invertir-punta-cana-2025': {
    es: {
      title: 'Por qué invertir en Punta Cana en 2025',
      excerpt: 'Analizamos el mercado inmobiliario de Punta Cana: rentabilidad, demanda turística, marco fiscal favorable y las zonas con mayor proyección de crecimiento.',
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=85&fit=crop',
      category: 'Inversión',
      date: '15 Feb 2025',
      readTime: '8 min',
      content: `<p>Punta Cana se ha consolidado como uno de los destinos de inversión inmobiliaria más atractivos del Caribe. Con más de 7 millones de turistas anuales y una infraestructura en constante mejora, la región ofrece oportunidades reales para inversores que buscan rentabilidad y diversificación.</p>

<h2>El mercado inmobiliario dominicano en cifras</h2>
<p>La República Dominicana registró un crecimiento del PIB del 5,1% en 2024, liderando las economías de América Latina. El sector construcción representó un 14% de ese crecimiento, con una demanda creciente tanto de residencias turísticas como de viviendas permanentes.</p>
<p>Las propiedades en zonas como Cap Cana, Bávaro y Punta Cana Village han experimentado una revalorización media del 8-12% anual en los últimos cinco años, superando la media de otros destinos caribeños.</p>

<h2>Marco fiscal favorable: Ley Confotur</h2>
<p>La Ley 158-01 de Fomento al Desarrollo Turístico (Confotur) ofrece beneficios fiscales significativos para inversores en zonas turísticas:</p>
<ul>
<li>Exención del Impuesto sobre la Renta durante 15 años</li>
<li>Exención del Impuesto de Transferencia Inmobiliaria (3%)</li>
<li>Exención del impuesto al patrimonio inmobiliario (IPI)</li>
<li>Exención de impuestos de importación para materiales de construcción</li>
</ul>
<p>Estos beneficios representan un ahorro considerable que mejora sustancialmente la rentabilidad de la inversión.</p>

<h2>Demanda turística creciente</h2>
<p>El Aeropuerto Internacional de Punta Cana es el más transitado del Caribe, con conexiones directas a más de 100 ciudades. La ocupación hotelera media supera el 80%, y la tendencia hacia el alquiler vacacional de villas privadas crece a un ritmo del 20% anual.</p>

<h2>Zonas con mayor potencial</h2>
<p>Cap Cana destaca como la zona premium, con precios de terreno entre 80-150 USD/m² y propiedades terminadas que superan los 2.500 USD/m². Bávaro ofrece opciones más accesibles, con terrenos desde 40 USD/m² y una mayor diversidad de perfiles de comprador.</p>

<h2>Recomendaciones para el inversor</h2>
<p>Antes de invertir, es fundamental realizar una due diligence técnica y legal completa. En Grupo Roiba recomendamos verificar la titularidad del terreno, analizar la viabilidad constructiva y contar con supervisión técnica independiente durante todo el proceso.</p>`,
    },
    en: {
      title: 'Why invest in Punta Cana in 2025',
      excerpt: 'We analyze the Punta Cana real estate market: profitability, tourism demand, favorable tax framework and the areas with the greatest growth potential.',
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=85&fit=crop',
      category: 'Investment',
      date: '15 Feb 2025',
      readTime: '8 min',
      content: `<p>Punta Cana has established itself as one of the most attractive real estate investment destinations in the Caribbean. With over 7 million tourists annually and constantly improving infrastructure, the region offers real opportunities for investors seeking returns and diversification.</p>

<h2>The Dominican real estate market in numbers</h2>
<p>The Dominican Republic recorded GDP growth of 5.1% in 2024, leading Latin American economies. The construction sector represented 14% of that growth, with increasing demand for both tourist residences and permanent homes.</p>
<p>Properties in areas such as Cap Cana, Bavaro and Punta Cana Village have experienced an average appreciation of 8-12% per year over the last five years, exceeding the average of other Caribbean destinations.</p>

<h2>Favorable tax framework: Confotur Law</h2>
<p>Law 158-01 on Tourism Development Promotion (Confotur) offers significant tax benefits for investors in tourism areas:</p>
<ul>
<li>Income Tax exemption for 15 years</li>
<li>Real Estate Transfer Tax exemption (3%)</li>
<li>Real estate property tax exemption (IPI)</li>
<li>Import tax exemption for construction materials</li>
</ul>
<p>These benefits represent considerable savings that substantially improve the investment return.</p>

<h2>Growing tourism demand</h2>
<p>Punta Cana International Airport is the busiest in the Caribbean, with direct connections to over 100 cities. Average hotel occupancy exceeds 80%, and the trend towards private villa vacation rentals is growing at a rate of 20% per year.</p>

<h2>Areas with greatest potential</h2>
<p>Cap Cana stands out as the premium area, with land prices between 80-150 USD/m² and finished properties exceeding 2,500 USD/m². Bavaro offers more accessible options, with land from 40 USD/m² and a greater diversity of buyer profiles.</p>

<h2>Recommendations for investors</h2>
<p>Before investing, it is essential to carry out complete technical and legal due diligence. At Grupo Roiba we recommend verifying land title, analyzing construction feasibility and having independent technical supervision throughout the process.</p>`,
    },
  },
  'guia-legal-comprar-propiedad-republica-dominicana': {
    es: {
      title: 'Guía legal: comprar propiedad en República Dominicana',
      excerpt: 'Todo lo que necesita saber sobre el marco legal, permisos, titularidad y due diligence para adquirir terreno o propiedad como extranjero.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85&fit=crop',
      category: 'Legal',
      date: '28 Ene 2025',
      readTime: '12 min',
      content: `<p>Adquirir propiedad en la República Dominicana como extranjero es un proceso legal perfectamente establecido. Sin embargo, requiere conocer el marco normativo y contar con asesoramiento profesional para evitar riesgos.</p>

<h2>Derechos de los extranjeros</h2>
<p>La Constitución dominicana reconoce el derecho de los extranjeros a adquirir propiedad inmobiliaria en las mismas condiciones que los nacionales. No existen restricciones por nacionalidad ni límites de superficie.</p>

<h2>Due diligence: verificaciones esenciales</h2>
<p>Antes de formalizar cualquier operación, es imprescindible realizar las siguientes verificaciones:</p>
<ul>
<li>Certificación de título en el Registro de Títulos correspondiente</li>
<li>Verificación de cargas, gravámenes e hipotecas</li>
<li>Consulta en el Catastro Nacional para confirmar linderos y superficie</li>
<li>Verificación de uso de suelo permitido en el municipio</li>
<li>Confirmación de que no existen litigios pendientes sobre la propiedad</li>
</ul>

<h2>Proceso de compra paso a paso</h2>
<p>1. <strong>Promesa de venta:</strong> Contrato preliminar donde se acuerdan precio, condiciones y plazos. Se entrega un depósito (habitualmente 10-20% del precio).</p>
<p>2. <strong>Due diligence legal y técnica:</strong> Periodo de verificación de 30-60 días.</p>
<p>3. <strong>Contrato de compraventa:</strong> Firmado ante notario público. Se paga el saldo restante.</p>
<p>4. <strong>Registro:</strong> El contrato se registra ante el Registro de Títulos para transferir la propiedad.</p>

<h2>Impuestos y costes asociados</h2>
<p>El impuesto de transferencia inmobiliaria es del 3% sobre el valor catastral. Sin embargo, las propiedades acogidas a Confotur están exentas. Los honorarios notariales oscilan entre 1-1,5% del valor de la operación.</p>

<h2>Recomendación de Grupo Roiba</h2>
<p>Contar con un equipo técnico independiente que verifique tanto los aspectos legales como la viabilidad constructiva del terreno es fundamental para proteger su inversión.</p>`,
    },
    en: {
      title: 'Legal guide: buying property in the Dominican Republic',
      excerpt: 'Everything you need to know about the legal framework, permits, title and due diligence for purchasing property as a foreigner.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85&fit=crop',
      category: 'Legal',
      date: '28 Jan 2025',
      readTime: '12 min',
      content: `<p>Purchasing property in the Dominican Republic as a foreigner is a well-established legal process. However, it requires understanding the regulatory framework and having professional advice to avoid risks.</p>

<h2>Rights of foreigners</h2>
<p>The Dominican Constitution recognizes the right of foreigners to acquire real estate property under the same conditions as nationals. There are no restrictions by nationality or area limits.</p>

<h2>Due diligence: essential verifications</h2>
<p>Before formalizing any transaction, the following verifications are essential:</p>
<ul>
<li>Title certification at the corresponding Title Registry</li>
<li>Verification of liens, encumbrances and mortgages</li>
<li>National Cadastre consultation to confirm boundaries and area</li>
<li>Verification of permitted land use in the municipality</li>
<li>Confirmation that there are no pending lawsuits on the property</li>
</ul>

<h2>Step-by-step purchase process</h2>
<p>1. <strong>Promise of sale:</strong> Preliminary contract where price, conditions and deadlines are agreed. A deposit is delivered (usually 10-20% of the price).</p>
<p>2. <strong>Legal and technical due diligence:</strong> Verification period of 30-60 days.</p>
<p>3. <strong>Purchase agreement:</strong> Signed before a notary public. The remaining balance is paid.</p>
<p>4. <strong>Registration:</strong> The contract is registered at the Title Registry to transfer ownership.</p>

<h2>Taxes and associated costs</h2>
<p>The real estate transfer tax is 3% on the cadastral value. However, Confotur-covered properties are exempt. Notarial fees range between 1-1.5% of the transaction value.</p>

<h2>Grupo Roiba recommendation</h2>
<p>Having an independent technical team that verifies both legal aspects and the construction feasibility of the land is fundamental to protecting your investment.</p>`,
    },
  },
  'proceso-construccion-villa-lujo-caribe': {
    es: {
      title: 'El proceso de construir una villa de lujo en el Caribe',
      excerpt: 'Desde la selección del terreno hasta la entrega llave en mano: las fases, plazos, presupuestos y decisiones clave.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&fit=crop',
      category: 'Construcción',
      date: '10 Ene 2025',
      readTime: '10 min',
      content: `<p>Construir una villa de lujo en el Caribe es un proyecto que requiere planificación rigurosa, conocimiento del entorno y supervisión técnica experta. En este artículo detallamos cada fase del proceso.</p>

<h2>Fase 1: Selección del terreno (1-2 meses)</h2>
<p>La elección del terreno es la decisión más importante. Factores a evaluar: orientación solar, topografía, accesibilidad, servicios disponibles, normativa urbanística y potencial de revalorización. Recomendamos siempre un análisis de viabilidad técnica antes de comprometerse.</p>

<h2>Fase 2: Diseño arquitectónico (2-3 meses)</h2>
<p>El diseño debe adaptarse al clima tropical: ventilación cruzada, protección solar, resistencia a huracanes y aprovechamiento de las vistas. En Grupo Roiba trabajamos con arquitectos especializados en el Caribe para asegurar que el diseño sea funcional y eficiente.</p>

<h2>Fase 3: Permisos y licencias (1-3 meses)</h2>
<p>La tramitación de permisos incluye: licencia de construcción municipal, aprobación medioambiental, permiso de uso de suelo y alta en Confotur si aplica. Los plazos varían según la zona y la complejidad del proyecto.</p>

<h2>Fase 4: Construcción (8-14 meses)</h2>
<p>La fase constructiva comprende: cimentación, estructura, cerramientos, instalaciones (electricidad, fontanería, climatización), acabados interiores y exteriores, piscina, jardín y equipamiento.</p>
<p>Durante esta fase, la supervisión técnica semanal es fundamental para garantizar calidad, cumplimiento de plazos y control de costes.</p>

<h2>Fase 5: Entrega y post-entrega</h2>
<p>La entrega incluye una inspección final completa, documentación técnica y garantías. El servicio post-entrega (Roiba Care) garantiza el mantenimiento profesional de la propiedad a lo largo del tiempo.</p>

<h2>Presupuestos orientativos</h2>
<p>El coste de construcción en Punta Cana oscila entre 1.200-2.500 USD/m² dependiendo del nivel de acabados. Una villa de 350 m² con piscina y jardín puede situarse entre 420.000 y 875.000 USD en construcción, sin incluir terreno.</p>`,
    },
    en: {
      title: 'The process of building a luxury villa in the Caribbean',
      excerpt: 'From site selection to turnkey delivery: the phases, timelines, budgets and key decisions every investor should know.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&fit=crop',
      category: 'Construction',
      date: '10 Jan 2025',
      readTime: '10 min',
      content: `<p>Building a luxury villa in the Caribbean is a project that requires rigorous planning, knowledge of the environment and expert technical supervision. In this article we detail each phase of the process.</p>

<h2>Phase 1: Site selection (1-2 months)</h2>
<p>The choice of land is the most important decision. Factors to evaluate: solar orientation, topography, accessibility, available services, urban regulations and appreciation potential. We always recommend a technical feasibility analysis before committing.</p>

<h2>Phase 2: Architectural design (2-3 months)</h2>
<p>The design must adapt to the tropical climate: cross ventilation, solar protection, hurricane resistance and maximizing views. At Grupo Roiba we work with architects specialized in the Caribbean to ensure the design is functional and efficient.</p>

<h2>Phase 3: Permits and licenses (1-3 months)</h2>
<p>Permit processing includes: municipal construction license, environmental approval, land use permit and Confotur registration if applicable. Timelines vary depending on the area and project complexity.</p>

<h2>Phase 4: Construction (8-14 months)</h2>
<p>The construction phase comprises: foundations, structure, enclosures, installations (electrical, plumbing, HVAC), interior and exterior finishes, pool, garden and equipment.</p>
<p>During this phase, weekly technical supervision is essential to guarantee quality, timeline compliance and cost control.</p>

<h2>Phase 5: Delivery and post-delivery</h2>
<p>Delivery includes a complete final inspection, technical documentation and warranties. The post-delivery service (Roiba Care) ensures professional property maintenance over time.</p>

<h2>Indicative budgets</h2>
<p>Construction costs in Punta Cana range from 1,200-2,500 USD/m² depending on the level of finishes. A 350 m² villa with pool and garden can range from 420,000 to 875,000 USD in construction, excluding land.</p>`,
    },
  },
  'fiscalidad-inversores-extranjeros-rd': {
    es: {
      title: 'Fiscalidad para inversores extranjeros en RD',
      excerpt: 'Impuestos, exenciones, Ley Confotur y beneficios fiscales disponibles para inversores internacionales.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85&fit=crop',
      category: 'Fiscal',
      date: '5 Dic 2024',
      readTime: '7 min',
      content: `<p>La República Dominicana ofrece uno de los marcos fiscales más favorables del Caribe para inversores inmobiliarios internacionales. Comprender estos beneficios es clave para maximizar la rentabilidad de su inversión.</p>

<h2>Impuestos principales</h2>
<p>Los principales impuestos que afectan a la propiedad inmobiliaria en RD son:</p>
<ul>
<li><strong>Impuesto de Transferencia Inmobiliaria:</strong> 3% sobre el valor catastral en la compraventa</li>
<li><strong>Impuesto al Patrimonio Inmobiliario (IPI):</strong> 1% anual sobre propiedades valoradas en más de RD$9.860.649</li>
<li><strong>Impuesto sobre la Renta:</strong> 27% sobre rentas generadas en territorio dominicano</li>
<li><strong>Ganancia de Capital:</strong> 27% sobre la plusvalía en la venta</li>
</ul>

<h2>Ley Confotur: exenciones para proyectos turísticos</h2>
<p>La Ley 158-01 ofrece un paquete de exenciones fiscales durante 15 años para proyectos en zonas turísticas calificadas. Las exenciones incluyen todos los impuestos mencionados, lo que puede representar un ahorro del 15-25% sobre el coste total de la inversión.</p>

<h2>Estructura de tenencia recomendada</h2>
<p>La mayoría de inversores extranjeros optan por constituir una sociedad dominicana (SRL) para adquirir la propiedad. Esta estructura ofrece ventajas en términos de sucesión, gestión y optimización fiscal.</p>

<h2>Acuerdos de doble imposición</h2>
<p>La República Dominicana tiene convenios para evitar la doble imposición con España, Canadá y otros países, lo que permite optimizar la carga fiscal global del inversor.</p>`,
    },
    en: {
      title: 'Taxation for foreign investors in DR',
      excerpt: 'Taxes, exemptions, Confotur Law and tax benefits available for international investors.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85&fit=crop',
      category: 'Tax',
      date: '5 Dec 2024',
      readTime: '7 min',
      content: `<p>The Dominican Republic offers one of the most favorable tax frameworks in the Caribbean for international real estate investors. Understanding these benefits is key to maximizing your investment return.</p>

<h2>Main taxes</h2>
<p>The main taxes affecting real estate property in DR are:</p>
<ul>
<li><strong>Real Estate Transfer Tax:</strong> 3% on cadastral value at purchase</li>
<li><strong>Real Estate Property Tax (IPI):</strong> 1% annually on properties valued over RD$9,860,649</li>
<li><strong>Income Tax:</strong> 27% on income generated in Dominican territory</li>
<li><strong>Capital Gains:</strong> 27% on the appreciation at sale</li>
</ul>

<h2>Confotur Law: exemptions for tourism projects</h2>
<p>Law 158-01 offers a package of tax exemptions for 15 years for projects in qualified tourism areas. The exemptions include all the taxes mentioned above, which can represent savings of 15-25% on the total investment cost.</p>

<h2>Recommended ownership structure</h2>
<p>Most foreign investors opt to establish a Dominican company (SRL) to acquire the property. This structure offers advantages in terms of succession, management and tax optimization.</p>

<h2>Double taxation agreements</h2>
<p>The Dominican Republic has agreements to avoid double taxation with Spain, Canada and other countries, allowing investors to optimize their overall tax burden.</p>`,
    },
  },
  'cap-cana-vs-bavaro-donde-construir': {
    es: {
      title: 'Cap Cana vs Bávaro: ¿dónde construir su villa?',
      excerpt: 'Comparativa detallada entre las dos zonas más demandadas de Punta Cana.',
      image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=85&fit=crop',
      category: 'Destino',
      date: '20 Nov 2024',
      readTime: '9 min',
      content: `<p>Cap Cana y Bávaro son las dos zonas más demandadas por inversores internacionales en Punta Cana. Cada una ofrece un perfil diferente que se adapta a distintos objetivos de inversión y estilos de vida.</p>

<h2>Cap Cana: exclusividad y plusvalía</h2>
<p>Cap Cana es una comunidad cerrada de 120 km² que incluye marina, campo de golf diseñado por Jack Nicklaus, playas privadas y servicios premium. Es la zona más exclusiva de Punta Cana, con precios de terreno entre 80-150 USD/m².</p>
<p>El perfil de comprador es predominantemente internacional, con alto poder adquisitivo. La rentabilidad por alquiler vacacional puede alcanzar el 8-10% anual en villas bien gestionadas.</p>

<h2>Bávaro: accesibilidad y diversidad</h2>
<p>Bávaro ofrece una mayor diversidad de opciones, desde apartamentos hasta villas, con precios de terreno desde 40 USD/m². La zona cuenta con amplia infraestructura comercial, restaurantes y servicios.</p>
<p>El perfil de comprador es más diverso, incluyendo tanto inversores como residentes permanentes. La rentabilidad por alquiler puede situarse entre el 6-8% anual.</p>

<h2>Comparativa directa</h2>
<p><strong>Precio terreno:</strong> Cap Cana 80-150 USD/m² vs Bávaro 40-80 USD/m²</p>
<p><strong>Seguridad:</strong> Cap Cana (comunidad cerrada) vs Bávaro (urbanizaciones con seguridad privada)</p>
<p><strong>Servicios:</strong> Ambas zonas cuentan con servicios completos, aunque Cap Cana ofrece más exclusividad</p>
<p><strong>Plusvalía proyectada:</strong> Cap Cana 10-12% anual vs Bávaro 6-8% anual</p>

<h2>Nuestra recomendación</h2>
<p>La elección depende del objetivo del inversor. Cap Cana es ideal para quienes buscan exclusividad y máxima plusvalía. Bávaro ofrece una mejor relación inversión-rentabilidad para presupuestos más ajustados.</p>`,
    },
    en: {
      title: 'Cap Cana vs Bávaro: where to build your villa?',
      excerpt: 'Detailed comparison between the two most sought-after areas in Punta Cana.',
      image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=85&fit=crop',
      category: 'Destination',
      date: '20 Nov 2024',
      readTime: '9 min',
      content: `<p>Cap Cana and Bavaro are the two most sought-after areas by international investors in Punta Cana. Each offers a different profile that adapts to different investment objectives and lifestyles.</p>

<h2>Cap Cana: exclusivity and appreciation</h2>
<p>Cap Cana is a 120 km² gated community that includes a marina, Jack Nicklaus-designed golf course, private beaches and premium services. It is the most exclusive area in Punta Cana, with land prices between 80-150 USD/m².</p>
<p>The buyer profile is predominantly international, with high purchasing power. Vacation rental returns can reach 8-10% annually for well-managed villas.</p>

<h2>Bavaro: accessibility and diversity</h2>
<p>Bavaro offers a greater diversity of options, from apartments to villas, with land prices from 40 USD/m². The area has extensive commercial infrastructure, restaurants and services.</p>
<p>The buyer profile is more diverse, including both investors and permanent residents. Rental returns can range from 6-8% annually.</p>

<h2>Direct comparison</h2>
<p><strong>Land price:</strong> Cap Cana 80-150 USD/m² vs Bavaro 40-80 USD/m²</p>
<p><strong>Security:</strong> Cap Cana (gated community) vs Bavaro (developments with private security)</p>
<p><strong>Services:</strong> Both areas have full services, although Cap Cana offers more exclusivity</p>
<p><strong>Projected appreciation:</strong> Cap Cana 10-12% annually vs Bavaro 6-8% annually</p>

<h2>Our recommendation</h2>
<p>The choice depends on the investor's objective. Cap Cana is ideal for those seeking exclusivity and maximum appreciation. Bavaro offers a better investment-return ratio for tighter budgets.</p>`,
    },
  },
  'materiales-construccion-tropical-caribe': {
    es: {
      title: 'Materiales de construcción para clima tropical',
      excerpt: 'Cómo seleccionar materiales que resistan la humedad, salinidad y condiciones climáticas del Caribe.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85&fit=crop',
      category: 'Construcción',
      date: '8 Nov 2024',
      readTime: '6 min',
      content: `<p>Construir en el Caribe exige una selección cuidadosa de materiales capaces de resistir condiciones climáticas extremas: alta humedad, salinidad, temperaturas elevadas y riesgo de huracanes.</p>

<h2>Estructura y cimentación</h2>
<p>El hormigón armado es el sistema constructivo predominante en el Caribe. Las estructuras deben cumplir la normativa sísmica y resistir vientos de hasta 250 km/h. El recubrimiento mínimo de las armaduras debe ser mayor que en climas templados para proteger contra la corrosión por salinidad.</p>

<h2>Cerramientos y fachadas</h2>
<p>Los bloques de hormigón con aislamiento térmico son la opción más eficiente. Para acabados exteriores, recomendamos morteros impermeabilizantes y pinturas con protección UV y anti-humedad.</p>

<h2>Carpintería y ventanas</h2>
<p>El aluminio con rotura de puente térmico y cristal laminado es la elección estándar para resistir huracanes. Las ventanas deben cumplir clasificación de impacto para zonas costeras. La madera, aunque estéticamente atractiva, requiere tratamientos especiales y mantenimiento frecuente.</p>

<h2>Cubiertas e impermeabilización</h2>
<p>Las cubiertas planas con sistema de impermeabilización multicapa son las más habituales. Los materiales cerámicos para terrazas deben ser antideslizantes y resistentes a la salinidad.</p>

<h2>Instalaciones especiales</h2>
<p>La climatización es un elemento crítico. Los sistemas VRF o splits inverter de alta eficiencia son los más recomendados. La fontanería debe ser de PVC o polipropileno para evitar corrosión, y las instalaciones eléctricas deben incluir protección contra sobretensiones por tormentas.</p>`,
    },
    en: {
      title: 'Construction materials for tropical climates',
      excerpt: 'How to select materials that withstand humidity, salinity and Caribbean climate conditions.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85&fit=crop',
      category: 'Construction',
      date: '8 Nov 2024',
      readTime: '6 min',
      content: `<p>Building in the Caribbean demands careful selection of materials capable of withstanding extreme climate conditions: high humidity, salinity, elevated temperatures and hurricane risk.</p>

<h2>Structure and foundations</h2>
<p>Reinforced concrete is the predominant construction system in the Caribbean. Structures must comply with seismic regulations and resist winds of up to 250 km/h. The minimum reinforcement cover must be greater than in temperate climates to protect against salinity corrosion.</p>

<h2>Enclosures and facades</h2>
<p>Concrete blocks with thermal insulation are the most efficient option. For exterior finishes, we recommend waterproofing mortars and paints with UV protection and anti-moisture properties.</p>

<h2>Joinery and windows</h2>
<p>Aluminum with thermal break and laminated glass is the standard choice for hurricane resistance. Windows must meet impact classification for coastal areas. Wood, although aesthetically attractive, requires special treatments and frequent maintenance.</p>

<h2>Roofing and waterproofing</h2>
<p>Flat roofs with multi-layer waterproofing systems are the most common. Ceramic materials for terraces must be non-slip and salt-resistant.</p>

<h2>Special installations</h2>
<p>Climate control is a critical element. High-efficiency VRF or inverter split systems are the most recommended. Plumbing should be PVC or polypropylene to avoid corrosion, and electrical installations should include surge protection for storms.</p>`,
    },
  },
}

interface ArticleData {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  content: string
}

// Compute related articles by category affinity
function getRelatedArticles(currentSlug: string, maxCount = 3) {
  const current = ARTICLES[currentSlug]
  if (!current) return []

  const currentCategoryEs = current.es.category
  const otherSlugs = Object.keys(ARTICLES).filter((s) => s !== currentSlug)

  // Same category first, then others
  const sameCategory = otherSlugs.filter((s) => ARTICLES[s].es.category === currentCategoryEs)
  const diffCategory = otherSlugs.filter((s) => ARTICLES[s].es.category !== currentCategoryEs)
  const ordered = [...sameCategory, ...diffCategory].slice(0, maxCount)

  return ordered.map((s) => ({
    slug: s,
    es: { title: ARTICLES[s].es.title, excerpt: ARTICLES[s].es.excerpt, image: ARTICLES[s].es.image, category: ARTICLES[s].es.category, date: ARTICLES[s].es.date, readTime: ARTICLES[s].es.readTime },
    en: { title: ARTICLES[s].en.title, excerpt: ARTICLES[s].en.excerpt, image: ARTICLES[s].en.image, category: ARTICLES[s].en.category, date: ARTICLES[s].en.date, readTime: ARTICLES[s].en.readTime },
  }))
}

export default async function BlogSlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Try Supabase first
  let dbArticle: ArticleData | null = null
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (data) {
      dbArticle = {
        title: data.title,
        excerpt: data.excerpt,
        image: data.image,
        category: data.category,
        date: data.date,
        readTime: data.read_time || '5 min',
        content: data.content || '',
      }
    }
  } catch {
    // Supabase not available, use hardcoded data
  }

  const staticArticle = ARTICLES[slug]
  const relatedArticles = getRelatedArticles(slug, 3)

  return (
    <BlogArticlePage
      slug={slug}
      dbArticle={dbArticle}
      staticArticle={staticArticle ? { es: staticArticle.es, en: staticArticle.en } : undefined}
      relatedArticles={relatedArticles}
    />
  )
}
