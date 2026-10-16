import { PhysicalActivityItem, SedentaryMicroHack } from "@/components/rendimiento/types";

export const SEDENTARY_MICRO_HACKS: SedentaryMicroHack[] = [
  {
    id: "soleus-pushup",
    title: "La Bomba de Sóleo (Soleus Push-up)",
    subtitle: "Quema glucosa mientras compilas código o escuchas clase",
    frequency: "Durante bloques largos de estudio",
    benefit: "Eleva el metabolismo oxidativo local hasta un 50% sin fatigar el cuerpo",
    icon: "🦶",
    badgeText: "Cero esfuerzo articular",
    scientificWhy:
      "El músculo sóleo en la pantorrilla utiliza glucógeno y lípidos en sangre de manera muy eficiente sin generar ácido láctico. Elevar los talones rítmicamente con los pies apoyados en el suelo activa este transportador.",
    instructions: [
      "Siéntate con la espalda recta y los pies apoyados en el suelo.",
      "Mantén las puntas de los pies en el piso y eleva los talones hasta el tope máximo.",
      "Baja controladamente y repite en series continuas de 1 a 2 minutos.",
      "Puedes hacerlo mientras lees diapositivas o programas sin llamar la atención.",
    ],
  },
  {
    id: "paseo-glucemico",
    title: "El Paseo Glucémico de 10 Minutos",
    subtitle: "El mejor antídoto contra el sueño después del almuerzo universitario",
    frequency: "Inmediatamente después de almorzar",
    benefit: "Aplana hasta en un 30% el pico de insulina que te apaga el cerebro a las 2:00 PM",
    icon: "🚶‍♂️",
    badgeText: "Impacto inmediato",
    scientificWhy:
      "Caminar suavemente contrae los músculos grandes de las piernas (cuádriceps y glúteos), los cuales capturan la glucosa circulante por vía GLUT4 sin requerir sobrecargar al páncreas de insulina.",
    instructions: [
      "Apenas termines de almorzar en el comedor o menú de la facultad, no te sientes a mirar el celular.",
      "Camina a paso tranquilo por el campus o alrededores durante 10 a 15 minutos.",
      "Aprovecha para conversar con un amigo o despejar la vista.",
      "Notarás que a las 3:00 PM tu cabeza estará despierta y libre de pesadez.",
    ],
  },
  {
    id: "regla-50-5",
    title: "Protocolo 50/5 de Descompresión Postural",
    subtitle: "Salva tu espalda baja y cuello de la tensión de la silla",
    frequency: "Cada 50 minutos de pantalla",
    benefit: "Restaura la oxigenación al lóbulo frontal y previene hernias discales tempranas",
    icon: "🧘‍♂️",
    badgeText: "Higiene postural",
    scientificWhy:
      "Estar sentado flexiona continuamente la cadera e inactiva los glúteos ('amnesia glútea'), lo que sobrecarga los discos lumbares y reduce el retorno venoso cerebral.",
    instructions: [
      "Configura una alarma suave cada 50 minutos.",
      "Ponte de pie, estira los brazos al techo inhalando profundamente.",
      "Realiza 5 rotaciones suaves de hombros y estira los flexores de la cadera llevando una pierna hacia atrás.",
      "Haz 5 sentadillas suaves solo para que la sangre fluya de nuevo hacia el cerebro.",
    ],
  },
  {
    id: "hidratacion-tactica",
    title: "Hidratación Táctica con Electrolitos",
    subtitle: "Tu recordatorio biológico para levantarte de la silla",
    frequency: "A lo largo de la mañana y tarde",
    benefit: "Elimina la falsa hambre por aburrimiento y lubrica los discos intervertebrales",
    icon: "💧",
    badgeText: "Energía celular",
    scientificWhy:
      "La deshidratación de apenas 1.5% deteriora la memoria de trabajo y la velocidad de procesamiento en un 12%. Además, beber agua regularmente te obliga a pararte al baño cada hora y media.",
    instructions: [
      "Lleva siempre un tomatodo de 750ml o 1 litro a tus clases.",
      "Añade una pizca imperceptible de sal marina o un chorrito de limón para mejorar la absorción celular.",
      "Termina el primer tomatodo antes de la 1:00 PM y el segundo antes de las 6:00 PM.",
    ],
  },
  {
    id: "regla-20-20-20",
    title: "Regla 20-20-20 & Luz Solar para el Sueño",
    subtitle: "Protege tu visión y sincroniza tu melatonina nocturna",
    frequency: "Al despertar y durante jornadas de código",
    benefit: "Reduce la fatiga ocular digital y asegura un sueño profundo y reparador por la noche",
    icon: "👁️",
    badgeText: "Sincronía circadiana",
    scientificWhy:
      "Exponer los ojos a luz natural matutina (sin mirar al sol directo) activa las células ganglionares retinianas intrínsecamente fotosensibles, iniciando una cuenta regresiva biológica de 14-16 horas para liberar melatonina de calidad.",
    instructions: [
      "Cada 20 minutos frente a la pantalla, mira un punto a más de 6 metros durante 20 segundos.",
      "Parpadea voluntariamente 5 veces seguidas para rehidratar la córnea.",
      "Al salir de casa o en el patio de la facultad, mira al cielo abierto 5 minutos sin anteojos oscuros para regular tu ritmo circadiano.",
    ],
  },
];

export const SEDENTARY_CHALLENGE_STEPS = [
  {
    day: "Día 1 - 2",
    title: "Micro-Pausa Activa",
    desc: "Al terminar cada bloque de estudio o clase, levántate 2 minutos a estirar brazos y hombros.",
    metric: "+500 pasos diarios",
  },
  {
    day: "Día 3 - 4",
    title: "Escaleras del Pabellón",
    desc: "Sube los pisos de tus aulas a pie con la espalda erguida para activar glúteos y circulación.",
    metric: "Bomba muscular activa",
  },
  {
    day: "Día 5",
    title: "Caminata de Sobremesa",
    desc: "Tras almorzar, camina 10 a 15 minutos por el campus o los pasillos para prevenir el sueño de la tarde.",
    metric: "Cero pesadez a las 2 PM",
  },
  {
    day: "Día 6 - 7",
    title: "Descompresión en Casa",
    desc: "Dedica 15 minutos el fin de semana a una rutina suave de movilidad articular y estiramiento lumbar.",
    metric: "Cuerpo y mente reiniciados",
  },
];



export const PHYSICAL_ACTIVITIES: PhysicalActivityItem[] = [
  {
    id: "calistenia",
    title: "Calistenia & Barras en Campus / Parque",
    category: "fuerza",
    categoryLabel: "Fuerza & Peso Corporal",
    tagline: "El entrenamiento universitario por excelencia: 100% gratuito y sin equipamiento costoso.",
    icon: "🤸‍♂️",
    intensity: "Alta",
    duration: "30 - 45 min",
    location: "Parques con barras, áreas verdes del campus o barras en puerta",
    cost: "Gratuito",
    cognitiveBenefit:
      "Desarrolla propiocepción aguda y coordinación neuromuscular. Al exigir máxima concentración motora, desconecta al 100% tu mente del estrés de las fórmulas.",
    physicalBenefit:
      "Fortalece la espalda dorsal, core y hombros, corrigiendo la postura caída causada por horas frente a la laptop.",
    nutritionTip:
      "Consume una fruta con un puñado de maní 45 min antes. Después, prioriza huevos sancochados o lata de atún con camote para reparar fibras.",
    studentTip:
      "Aprovecha las horas libres entre clases con amigos. 4 series de dominadas y 4 de fondos bastan para un estímulo tremendo en menos de 25 minutos.",
  },
  {
    id: "gimnasio",
    title: "Entrenamiento de Fuerza en Gimnasio",
    category: "fuerza",
    categoryLabel: "Fuerza & Hipertrofia",
    tagline: "Sobrecarga progresiva para blindar tu masa muscular y sensibilidad a la insulina.",
    icon: "🏋️‍♂️",
    intensity: "Alta",
    duration: "45 - 60 min",
    location: "Gimnasio universitario o de barrio",
    cost: "Bajo costo",
    cognitiveBenefit:
      "Estimula la liberación de mioquinas y BDNF (factor neurotrófico derivado del cerebro), sustancia biológica que crea nuevas conexiones sinápticas para estudiar mejor.",
    physicalBenefit:
      "Aumenta la densidad mineral ósea, masa muscular limpia y optimiza la tolerancia a los carbohidratos.",
    nutritionTip:
      "Carbohidratos complejos 1.5 horas antes (avena o arroz). Tras el entreno, 25-35g de proteína de alto valor biológico + agua abundante.",
    studentTip:
      "No necesitas pasar 2 horas allí. Con 3 días a la semana aplicando rutinas Full-Body o Tirón/Empuje de 45 minutos obtendrás el 85% de los beneficios.",
  },
  {
    id: "pichanga-futbol",
    title: "Fútbol y Futsal ('La Pichanga')",
    category: "equipo",
    categoryLabel: "Deporte de Equipo",
    tagline: "El escape colectivo favorito: intervalos de alta intensidad combinados con risas y camaradería.",
    icon: "⚽",
    intensity: "Alta",
    duration: "60 - 90 min",
    location: "Lozas de la facultad, canchas sintéticas o polideportivos",
    cost: "Bajo costo",
    cognitiveBenefit:
      "Dispara la dopamina y la oxitocina social. La toma de decisiones rápida en espacios reducidos agudiza la velocidad de procesamiento mental.",
    physicalBenefit:
      "Excelente estímulo HIIT (High Intensity Interval Training) natural: piques explosivos alternados con trote que maximizan tu VO2 Max.",
    nutritionTip:
      "Hidrátate 2 horas antes con suero casero (agua, limón, miel y pizca de sal). No juegues con el estómago lleno de comida pesada.",
    studentTip:
      "Organiza partidos fijos una o dos veces por semana con tus compañeros de ciclo. Es la mejor forma de afianzar lazos y quemar el cortisol de los parciales.",
  },
  {
    id: "running",
    title: "Running & Trote Continuo",
    category: "cardio",
    categoryLabel: "Cardio & Resistencia",
    tagline: "Meditación en movimiento para ventilar los pulmones y ganar resistencia cardiovascular.",
    icon: "🏃‍♂️",
    intensity: "Moderada",
    duration: "25 - 45 min",
    location: "Calles tranquilas, pista atlética o malecón",
    cost: "Gratuito",
    cognitiveBenefit:
      "Induce el estado de flujo (runner's high) mediante liberación de endocannabinoides. Ideal para estructurar ideas, resolver problemas lógicos o escuchar podcasts.",
    physicalBenefit:
      "Mejora la salud del miocardio, expande la red capilar muscular y acelera el metabolismo basal en reposo.",
    nutritionTip:
      "Si corres temprano, un vaso de agua con limón y un dátil o plátano es suficiente. Si corres por la tarde, deja pasar 2 horas tras tu última comida.",
    studentTip:
      "Inicia con el método CACO (Caminar - Correr): 2 min de trote suave + 1 min de caminata durante 20 minutos. No intentes correr rápido desde el primer día.",
  },
  {
    id: "ciclismo",
    title: "Ciclismo Urbano & Desplazamiento",
    category: "cardio",
    categoryLabel: "Cardio & Movilidad Diaria",
    tagline: "Convierte el tiempo muerto del tráfico de Lima en tu sesión diaria de cardio.",
    icon: "🚴‍♂️",
    intensity: "Moderada",
    duration: "30 - 50 min",
    location: "Ciclovías, avenidas seguras y rutas universitarias",
    cost: "Inversión moderada",
    cognitiveBenefit:
      "Llegas a la primera clase de la mañana completamente alerta y con el sistema nervioso encendido, en lugar de mareado por el bus abarrotado.",
    physicalBenefit:
      "Bajo impacto en articulaciones de rodilla y tobillo mientras desarrollas resistencia aeróbica y cuádriceps potentes.",
    nutritionTip:
      "Un desayuno con carbohidratos de absorción sostenida (avena con manzana) y un tomatodo en el marco de la bicicleta con electrolitos.",
    studentTip:
      "Ahorras dinero en pasajes diarios y evitas el estrés del tráfico. Asegúrate de usar siempre casco, luces recargables y candado tipo U-lock.",
  },
  {
    id: "natacion",
    title: "Natación",
    category: "cardio",
    categoryLabel: "Cardio & Bajo Impacto",
    tagline: "El mejor reseteo articular: descompresión de columna bajo resistencia líquida.",
    icon: "🏊‍♂️",
    intensity: "Moderada",
    duration: "40 - 50 min",
    location: "Piscina universitaria o municipal",
    cost: "Bajo costo",
    cognitiveBenefit:
      "El estímulo rítmico respiratorio calma el sistema nervioso simpático, induciendo una sensación profunda de serenidad y alivio mental.",
    physicalBenefit:
      "Entrena toda la cadena muscular sin estrés de gravedad sobre la columna ni las rodillas. Gran desarrollo de caja torácica.",
    nutritionTip:
      "La natación suele despertar un apetito voraz. Ten listo un taper con frutos secos, sándwich de pollo o plátano para no caer en galletas al salir.",
    studentTip:
      "Consulta si tu universidad ofrece horarios libres de piscina para estudiantes con tarifa subsidiada o acceso gratuito en talleres.",
  },
  {
    id: "basquet-voley",
    title: "Básquetbol & Vóley",
    category: "equipo",
    categoryLabel: "Deporte de Equipo & Salto",
    tagline: "Velocidad de reacción, pliometría y reflejos instantáneos en la cancha.",
    icon: "🏀",
    intensity: "Alta",
    duration: "45 - 60 min",
    location: "Canchas múltiples universitarias o losas barriales",
    cost: "Gratuito",
    cognitiveBenefit:
      "Estimula la visión periférica, orientación espacial 3D y agilidad de pensamiento táctico.",
    physicalBenefit:
      "Desarrollo notable de potencia de salto vertical, coordinación mano-ojo y agilidad lateral defensiva.",
    nutritionTip:
      "Snacks de rápida digestión entre partidos (pasas, plátano seda) y abundante agua para reponer sales minerales perdidas por el sudor.",
    studentTip:
      "Únete a los grupos deportivos de tu facultad o forma una escuadra para los torneos inter-escuelas de la universidad.",
  },
  {
    id: "yoga-movilidad",
    title: "Yoga & Movilidad Funcional",
    category: "movilidad",
    categoryLabel: "Movilidad & Flexibilidad",
    tagline: "El antídoto contra el estrés de parciales y la rigidez de cuello y cadera.",
    icon: "🧘‍♀️",
    intensity: "Baja",
    duration: "20 - 35 min",
    location: "Tu cuarto, sala o áreas de césped del campus",
    cost: "Gratuito",
    cognitiveBenefit:
      "Estimula el nervio vago y activa el sistema parasimpático ('descansar y digerir'), bajando la presión arterial y preparando el cuerpo para el sueño profundo.",
    physicalBenefit:
      "Aumenta el rango de movimiento de hombros, caderas y columna, devolviéndole elasticidad al cuerpo tras jornadas de laboratorio.",
    nutritionTip:
      "Practica con el estómago ligero. Una infusión tibia de manzanilla o té verde después de la sesión complementa el estado de calma.",
    studentTip:
      "Solo necesitas una esterilla o toalla y un video de 15 minutos en YouTube. Hazlo a primera hora al despertar o antes de dormir para un descanso profundo.",
  },
  {
    id: "hiit-casa",
    title: "Entrenamiento HIIT en Casa",
    category: "fuerza",
    categoryLabel: "Fuerza & Acondicionamiento",
    tagline: "20 minutos de máxima eficiencia cuando tu horario universitario está colapsado.",
    icon: "⚡",
    intensity: "Alta",
    duration: "18 - 25 min",
    location: "El espacio libre al lado de tu cama",
    cost: "Gratuito",
    cognitiveBenefit:
      "Despeja la mente de golpe y rompe la apatía. Excelente para iniciar días donde tienes que estudiar materias pesadas.",
    physicalBenefit:
      "Efecto EPOC (consumo excesivo de oxígeno post-ejercicio): tu cuerpo sigue quemando energía extra varias horas después de terminar.",
    nutritionTip:
      "Un vaso de agua fría antes de arrancar. Al terminar, tu desayuno o almuerzo habitual equilibrado con proteína y fibra.",
    studentTip:
      "Aplica el formato Tabata: 20 segundos de esfuerzo (burpees, flexiones, sentadillas, skipping) por 10 segundos de descanso, repetido 8 veces.",
  },
];
