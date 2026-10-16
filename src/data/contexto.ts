import type { EatingSpot, StudentContext } from "@/types";

/**
 * Contenido de la página "Por Contexto".
 * Precios referenciales en soles (S/). Actualizar con los datos de la
 * investigación / encuestas del equipo cuando estén disponibles.
 */

export const studentContexts: StudentContext[] = [
  {
    id: "cerca",
    answer: "Vivo cerca de la U",
    name: "El Vecino de la UNI",
    emoji: "🏠",
    commute: "10 – 30 min",
    summary: "Llegas caminando, en bici o en una combi corta. Puedes desayunar y hasta almorzar en casa.",
    reality:
      "Vives en el Rímac, SMP, Independencia, Los Olivos o el Cercado y llegas a la facultad en menos de media hora. Tu gran ventaja es poder desayunar en casa e incluso regresar a almorzar si tienes horas libres. El riesgo: como \"llegas rápido\", sales corriendo sin desayunar y terminas llenando los huecos con galletas y gaseosa del kiosko.",
    stats: [
      { label: "Viaje diario", value: "10 – 30 min" },
      { label: "Comidas en la U", value: "0 – 1" },
      { label: "Gasto diario aprox.", value: "S/ 5 – 15" },
    ],
    day: [
      { time: "6:45", icon: "🍳", title: "Desayuno en casa", description: "Tienes tiempo real para sentarte 10 minutos. Aprovéchalo: es tu mayor ventaja frente a los que viajan." },
      { time: "8:00", icon: "📚", title: "Clases", description: "Llegas fresco. Lleva tu tomatodo con agua para no depender de la gaseosa." },
      { time: "10:30", icon: "🍌", title: "Snack de media mañana", description: "Una fruta o un puñado de maní que trajiste de casa evita el bajón antes del almuerzo." },
      { time: "13:00", icon: "🍛", title: "Almuerzo", description: "Si tienes 2+ horas libres, almuerza en casa. Si no, comedor o menú cerca de la U." },
      { time: "16:00", icon: "🚶", title: "Bajón de la tarde", description: "Camina 5 minutos por el campus y toma agua antes de buscar algo dulce." },
      { time: "19:30", icon: "🥗", title: "Cena en casa", description: "Ligera y no muy tarde: cenar antes de las 21:00 te ayuda a dormir mejor." },
    ],
    breakfasts: [
      { name: "Pan con huevo + fruta", description: "Pan francés o integral con huevo revuelto o sancochado y un plátano o mandarina. Proteína + carbohidrato que te dura hasta el mediodía.", price: "S/ 2 – 3", where: "Casa", prepTime: "7 min" },
      { name: "Avena cocida con plátano", description: "Avena con leche o agua, plátano en rodajas y canela. Energía de liberación lenta para las clases de la mañana.", price: "S/ 1.5 – 2.5", where: "Casa", prepTime: "10 min" },
      { name: "Quinua con manzana", description: "El clásico desayuno andino: caliente, barato y con proteína vegetal. Puedes prepararla para 3 días.", price: "S/ 1.5 – 2", where: "Casa o carretilla", prepTime: "15 min" },
    ],
    lunches: [
      { name: "Almuerzo en casa", description: "La opción más barata y nutritiva. Arma tu plato: mitad verduras, un cuarto proteína y un cuarto arroz, papa o menestra.", price: "S/ 4 – 8", where: "Casa", prepTime: "Ida y vuelta + 30 min" },
      { name: "Comedor universitario", description: "Si eres beneficiario, aprovéchalo los días de horario corrido. Plato balanceado a muy bajo costo.", price: "Muy bajo / subvencionado", where: "Comedor UNI" },
      { name: "Menú de la zona", description: "Elige sopa o ensalada de entrada y un segundo con menestra, pescado o pollo a la plancha.", price: "S/ 9 – 14", where: "Alrededores de la UNI" },
    ],
    snacks: [
      { name: "Fruta de estación", description: "Plátano, mandarina o manzana. Fácil de llevar y no se aplasta en la mochila.", price: "S/ 0.5 – 1", where: "Mercado / casa" },
      { name: "Maní o habas tostadas", description: "Grasas buenas y proteína. Un puñado basta para llegar al almuerzo.", price: "S/ 1 – 2", where: "Bodega / casa" },
      { name: "Yogurt natural + fruta", description: "Mejor que los yogures azucarados del kiosko. Agrégale avena si tienes más hambre.", price: "S/ 3", where: "Casa" },
    ],
    pitfalls: [
      "Saltarte el desayuno porque \"vives al lado\".",
      "Ir a almorzar a casa y quedarte dormido 2 horas.",
      "Llenar las horas libres con galletas y gaseosa.",
    ],
    hacks: [
      "Cuando almuerces en casa, separa una porción extra en táper para tu día de horario corrido.",
      "Siesta máxima de 20 minutos: recargas sin entrar en sueño profundo.",
      "Deja siempre un snack de respaldo en la mochila para los días que te quedas más.",
    ],
    accent: {
      solid: "bg-emerald-500",
      soft: "bg-emerald-50",
      text: "text-emerald-800",
      border: "border-emerald-400",
      ring: "ring-emerald-300/60",
    },
  },
  {
    id: "lejos",
    answer: "Vivo lejos de la U",
    name: "El Guerrero del Transporte",
    emoji: "🚌",
    commute: "1 – 2.5 h (solo ida)",
    summary: "Sales de madrugada, paras todo el día en la facultad y vuelves de noche. La burra es tu mejor aliada.",
    reality:
      "Sales de casa entre las 5:00 y 6:30 a.m. y cruzas media Lima en Metropolitano, corredor, combi o tren desde Villa El Salvador, Ate, SJL, el Callao o Chorrillos. Una vez que llegas, ya no regresas hasta la noche: la facultad es tu segunda casa. Desayunas al paso, almuerzas aquí y cenas tarde. Tu mejor aliada es la burra, el táper que traes de casa.",
    stats: [
      { label: "Viaje diario", value: "2 – 5 h" },
      { label: "Comidas en la U", value: "2 – 3" },
      { label: "Gasto diario aprox.", value: "S/ 8 – 20" },
    ],
    day: [
      { time: "5:30", icon: "🌙", title: "Sales de casa", description: "Si no te da el tiempo para un desayuno completo, toma algo líquido (avena, leche, jugo) y lleva el resto en la mochila." },
      { time: "6:30", icon: "🚌", title: "En el transporte", description: "Duerme o repasa si vas sentado. Evita las frituras del paradero: pesan y dan sueño." },
      { time: "8:30", icon: "🥪", title: "Segundo desayuno", description: "Tu sánguche o fruta de la burra entre clases. Comer algo sólido antes de las 10 a.m. es clave." },
      { time: "12:30", icon: "🥡", title: "Almuerzo", description: "Burra calentada, comedor o menú. Almuerza temprano para no llegar con hambre voraz." },
      { time: "16:00", icon: "🍌", title: "Snack de rescate", description: "Maní, fruta o pan con algo. Este es el momento en que todos caen en el kiosko." },
      { time: "19:30", icon: "🚇", title: "Viaje de regreso", description: "Lleva agua y un plátano: evita llegar a casa a \"atacar\" la cocina." },
      { time: "21:30", icon: "🍲", title: "Cena + burra de mañana", description: "Cena ligera y, mientras comes, deja armado el táper del día siguiente." },
    ],
    breakfasts: [
      { name: "Desayuno doble", description: "En casa algo rápido (leche, avena o jugo) y ya en la U un sánguche de huevo, palta o pollo. Divides la energía en dos tiempos.", price: "S/ 2 – 4", where: "Casa + mochila", prepTime: "5 min" },
      { name: "Avena remojada (overnight oats)", description: "Avena + leche o yogurt + fruta en un frasco la noche anterior. Se come fría en clase, cero tiempo en la mañana.", price: "S/ 2 – 3", where: "Frasco en la mochila", prepTime: "0 min en la mañana" },
      { name: "Emoliente o quinua + pan con queso", description: "Del carrito cerca de la U o del paradero. Elige uno con buena higiene y evita el pan con hot dog frito.", price: "S/ 3 – 5", where: "Carretilla / paradero" },
    ],
    lunches: [
      { name: "La burra clásica", description: "Arroz + menestra + huevo, pollo o atún + ensalada. Cocínala la noche anterior o haz batch cooking el domingo.", price: "S/ 4 – 7", where: "Táper de casa", prepTime: "Preparada la noche anterior" },
      { name: "Comedor universitario", description: "Si eres beneficiario, es tu mejor opción. Llega antes de la hora punta para no perder 40 minutos en la cola.", price: "Muy bajo / subvencionado", where: "Comedor UNI" },
      { name: "Menú dentro o cerca de la U", description: "Pide segundos con menestra o pescado. Evita repetir chaufa + papas fritas todos los días.", price: "S/ 9 – 14", where: "Concesionarios / alrededores" },
    ],
    snacks: [
      { name: "Sánguche de reserva", description: "Pan con palta, huevo o pollo deshilachado. Te salva cuando el almuerzo se retrasa.", price: "S/ 1.5 – 2.5", where: "Mochila" },
      { name: "Plátano + maní", description: "El combo más barato y transportable que existe. Energía rápida + grasas que sacian.", price: "S/ 1.5", where: "Mercado / bodega" },
      { name: "Refresco casero", description: "Agua de manzana, cebada o limonada con poca azúcar en tu tomatodo. Adiós gaseosa diaria.", price: "S/ 0.5", where: "Tomatodo" },
    ],
    pitfalls: [
      "Pasar de las 6 a.m. a la 1 p.m. sin comer nada sólido.",
      "Comer en la calle por apuro: salchipapa o hamburguesa de paradero.",
      "Llegar a casa a las 10 p.m. con hambre extrema y comer el doble.",
      "Dormir 5 horas por el viaje: el cansancio dispara los antojos de azúcar.",
    ],
    hacks: [
      "Batch cooking dominical: cocina 3–4 porciones de menestra y proteína y arma las burras de la semana.",
      "Usa un táper apto para microondas y una bolsa térmica: tu comida llega segura al almuerzo.",
      "Ubica los microondas disponibles y ve antes de la hora punta del mediodía.",
      "Si vas sentado, una siesta de 30 minutos en el viaje compensa la madrugada.",
    ],
    accent: {
      solid: "bg-amber-400",
      soft: "bg-amber-50",
      text: "text-amber-800",
      border: "border-amber-400",
      ring: "ring-amber-300/60",
    },
  },
  {
    id: "foraneo",
    answer: "Soy foráneo",
    name: "El Foráneo Independiente",
    emoji: "🎒",
    commute: "5 – 20 min (cuarto o pensión)",
    summary: "Vienes de provincia y vives solo. Tú decides qué, cuándo y con cuánto comes.",
    reality:
      "Vienes de Huancayo, Arequipa, Cajamarca, Piura, Ica o cualquier otra región y vives en un cuarto alquilado o en una pensión cerca de la UNI. Nadie te espera con la comida lista: el presupuesto es ajustado, la cocina (si hay) es compartida, y es muy fácil caer en el fideo instantáneo, el pan con gaseosa o comer siempre el mismo menú. Además, extrañar la comida de casa y comer solo también afectan cómo te alimentas.",
    stats: [
      { label: "Viaje diario", value: "5 – 20 min" },
      { label: "Comidas fuera", value: "Casi todas" },
      { label: "Gasto diario aprox.", value: "S/ 12 – 25" },
    ],
    day: [
      { time: "7:00", icon: "☕", title: "Desayuno en el cuarto", description: "Un hervidor eléctrico es tu mejor inversión: avena, quinua instantánea o huevos sancochados en minutos." },
      { time: "8:00", icon: "📚", title: "Clases", description: "Vives cerca: aprovecha para dormir bien en lugar de trasnochar con series." },
      { time: "12:30", icon: "🍽️", title: "Almuerzo", description: "Comedor (si eres beneficiario) o menú. Es tu comida más completa del día: nunca te la saltes para ahorrar." },
      { time: "16:00", icon: "🍎", title: "Snack", description: "Fruta comprada por kilo en el mercado. Mucho más barata que en la bodega o el minimarket." },
      { time: "19:00", icon: "🍲", title: "Cena", description: "Comedor, menú de noche o algo simple en el cuarto. Evita que la cena sea siempre pan con gaseosa." },
      { time: "Domingo", icon: "🧺", title: "Mercado + cocina semanal", description: "Compra fruta, huevos y menestras. Si viajas a tu tierra, trae quinua, habas, queso o cancha." },
    ],
    breakfasts: [
      { name: "Avena o quinua con hervidor", description: "Solo necesitas agua caliente. Agrégale plátano o una cucharada de maní para que te dure más.", price: "S/ 1 – 2", where: "Tu cuarto", prepTime: "5 min" },
      { name: "Huevos sancochados + pan + fruta", description: "Sancocha 6 huevos el domingo: en refrigeración duran hasta una semana. Proteína barata lista al instante.", price: "S/ 2 – 3", where: "Tu cuarto", prepTime: "2 min" },
      { name: "Desayuno del comedor", description: "Si eres beneficiario, úsalo siempre: es la opción más completa y económica que tienes.", price: "Muy bajo / subvencionado", where: "Comedor UNI" },
    ],
    lunches: [
      { name: "Comedor universitario", description: "Prioridad #1. Infórmate en Bienestar Universitario sobre la evaluación socioeconómica para acceder al beneficio.", price: "Muy bajo / subvencionado", where: "Comedor UNI" },
      { name: "Menú económico rotativo", description: "Rota entre 2–3 sitios de confianza para variar. Prefiere los que incluyen sopa o ensalada y refresco.", price: "S/ 8 – 12", where: "Alrededores de la UNI" },
      { name: "Olla compartida de pensión", description: "Organízate con compañeros: uno compra, otro cocina, otro lava. Sale más barato y comes acompañado.", price: "S/ 4 – 6 por porción", where: "Cocina compartida" },
    ],
    snacks: [
      { name: "Fruta del mercado", description: "Plátanos, mandarinas o manzanas compradas por kilo. Lo más barato y nutritivo para tu semana.", price: "S/ 0.5 c/u", where: "Mercado" },
      { name: "Cancha o habas de tu tierra", description: "Snack tradicional, saciante y casi gratis si lo traes de casa.", price: "S/ 0 – 1", where: "Encomienda de casa" },
      { name: "Pan con palta o queso", description: "Simple, llenador y mucho mejor que un paquete de galletas.", price: "S/ 1.5 – 2", where: "Bodega / cuarto" },
    ],
    pitfalls: [
      "Vivir de fideos instantáneos y pan.",
      "Gastar el dinero de la semana en los primeros días.",
      "Saltarte comidas para ahorrar.",
      "Comer siempre solo frente a la laptop.",
    ],
    hacks: [
      "Hervidor eléctrico + olla arrocera: con eso cocinas arroz, menestras, huevos y avena.",
      "Compra en el mercado, no en el minimarket: fruta y verdura salen mucho más baratas.",
      "Divide tu presupuesto semanal de comida por días (sobres o app) para no quedarte corto.",
      "Almuerza con tu grupo cuando puedas: comer acompañado mejora el ánimo y la adaptación.",
    ],
    accent: {
      solid: "bg-sky-500",
      soft: "bg-sky-50",
      text: "text-sky-800",
      border: "border-sky-400",
      ring: "ring-sky-300/60",
    },
  },
];

export const eatingSpots: EatingSpot[] = [
  {
    id: "comedor",
    name: "Comedor universitario",
    emoji: "🍽️",
    description: "Raciones balanceadas a muy bajo costo para estudiantes que califican mediante evaluación socioeconómica.",
    price: "Muy bajo / subvencionado",
    pros: ["Lo más económico", "Menú balanceado", "Porciones completas"],
    cons: ["Colas largas en hora punta", "Requiere inscripción", "Menú fijo"],
    tip: "Llega 15 minutos antes de la hora punta y ve con tu grupo para turnarse en la cola.",
    bestFor: ["foraneo", "lejos"],
  },
  {
    id: "restaurantes",
    name: "Restaurantes y menús de la U",
    emoji: "🏪",
    description: "Concesionarios dentro del campus y menús en los alrededores de la UNI, sobre la Av. Túpac Amaru.",
    price: "S/ 9 – 15",
    pros: ["Variedad", "Rápido", "Entrada + segundo"],
    cons: ["El gasto diario se acumula", "Muchas frituras", "Exceso de arroz"],
    tip: "Elige sopa o ensalada de entrada y pide más ensalada en lugar de papas fritas.",
    bestFor: ["cerca", "foraneo"],
  },
  {
    id: "burra",
    name: "La burra (táper de casa)",
    emoji: "🥡",
    description: "La comida que traes preparada desde casa. El arma secreta de quien para todo el día en la facultad.",
    price: "S/ 4 – 7",
    pros: ["Lo más barato", "Controlas lo que comes", "Sin colas"],
    cons: ["Requiere planificación", "Necesitas microondas", "Peso en la mochila"],
    tip: "Arma la burra de mañana mientras cenas: la misma comida, cero esfuerzo extra.",
    bestFor: ["lejos", "cerca"],
  },
  {
    id: "kioskos",
    name: "Kioskos y carretillas",
    emoji: "🥪",
    description: "Snacks, sánguches, emoliente y quinua al paso entre clases o en el paradero.",
    price: "S/ 1 – 6",
    pros: ["Inmediato", "Barato", "Siempre a la mano"],
    cons: ["Muchos ultraprocesados", "Gaseosas y frituras", "Higiene variable"],
    tip: "Prefiere emoliente, quinua, fruta o sánguche de pollo/huevo. No lo conviertas en tu almuerzo.",
    bestFor: ["lejos"],
  },
];
