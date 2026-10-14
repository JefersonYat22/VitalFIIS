import { PlatoNutricional } from "@/types";

export const PLATOS_DATA: PlatoNutricional[] = [
  {
    id: "arroz-con-pollo-huancaina",
    nombre: "Arroz con Pollo + Papa a la Huancaína",
    categoria: "comedor",
    categoriaLabel: "Comedor / Menú",
    objetivos: ["energia-sostenida"],
    porcionGramos: 520,
    calorias: 780,
    macros: {
      proteinas: 34,
      carbohidratos: 98,
      grasas: 28,
      fibra: 3.5,
    },
    riesgoSomnolencia: "alto",
    riesgoSomnolenciaDetalle: "Riesgo Alto de Coma Alimenticio (Pico de Insulina Elevado)",
    horasSaciedad: "4 - 4.5 hrs",
    impactoGlucemico: "Pico alto y abrupto",
    descripcion:
      "El plato insignia de los comedores universitarios y menús estudiantiles. Combina una presa de pollo con arroz sazonado con culantro y ají amarillo, acompañado de media papa bañada en crema huancaína.",
    ingredientesPrincipales: [
      "Pierna/encuentro de pollo guisado",
      "Arroz verde con culantro y alverjitas",
      "Papa sancochada",
      "Crema huancaína (queso fresco, ají amarillo, leche y galleta)",
    ],
    porQueDaSueno:
      "La combinación de doble carbohidrato (arroz blanco + papa) sumado a las grasas lácteas de la huancaína genera una absorción acelerada de glucosa seguida de una liberación masiva de insulina. Esto eleva los niveles cerebrales de triptófano, convirtiéndolo en serotonina y melatonina (la hormona del sueño) justo a los 45-60 minutos de haber comido.",
    vitalHack: {
      titulo: "El Secuenciador Bioquímico (Inchauspé Hack)",
      accion:
        "Si el menú incluye ensalada fresca o verduras del arroz, cómelas primero. Luego come la presa de pollo y la salsa huancaína. Deja el arroz para el final. Si te sirven un cerro de arroz, aparta un tercio antes de empezar.",
      explicacionCientifica:
        "La fibra y la proteína en el estómago crean una malla gelatinosa que ralentiza el vaciamiento gástrico, reduciendo el pico de glucosa hasta en un 40% y evitando el colapso de energía de las 2:00 PM.",
      ordenIngestaRecomendado: ["1° Ensalada / Verduras", "2° Pollo + Huancaína", "3° Arroz verde"],
    },
    mejorMomento: "Días con descanso posterior o clases de laboratorio práctico.",
    evitarEn: "Previo a exámenes teóricos densos de cálculo, física o lectura intensiva a las 2:00 PM.",
    precioPromedioSol: "S/ 8.00 - S/ 12.00 (o menú universitario)",
    emoji: "🍗",
  },
  {
    id: "lentejas-pescado-arroz",
    nombre: "Lentejas con Pescado Frito, Arroz y Ensalada Criolla",
    categoria: "comedor",
    categoriaLabel: "Comedor / Menú",
    objetivos: ["anti-sueno", "energia-sostenida", "alta-proteina"],
    porcionGramos: 490,
    calorias: 690,
    macros: {
      proteinas: 42,
      carbohidratos: 78,
      grasas: 22,
      fibra: 11.5,
    },
    riesgoSomnolencia: "bajo",
    riesgoSomnolenciaDetalle: "Riesgo Bajo (Curva de Glucosa Muy Estable por Alta Fibra)",
    horasSaciedad: "4.5 - 5 hrs",
    impactoGlucemico: "Plano y sostenido",
    descripcion:
      "La clásica tradición peruana de los lunes universitarios. Menestra rica en hierro y fibra soluble, filete de pescado frito o a la plancha, arroz y ensalada de cebolla y tomate con limón.",
    ingredientesPrincipales: [
      "Lentejas guisadas con aderezo criollo",
      "Filete de pescado (bonito o jurel)",
      "Arroz blanco",
      "Sarsa criolla con limón y cilantro",
    ],
    porQueDaSueno:
      "A diferencia de otros platos con arroz, la enorme carga de fibra soluble de las lentejas (más de 11g) amortigua por completo la absorción del almidón. La digestión es gradual y continua, sin picos ni caídas abruptas.",
    vitalHack: {
      titulo: "Sinergia de Hierro + Pescado Azul",
      accion:
        "Asegúrate de exprimir todo el limón de la sarsa sobre las lentejas y prioriza pescados oscuros como bonito o caballa si están disponibles.",
      explicacionCientifica:
        "La vitamina C del limón convierte el hierro no hemo de la lenteja a su forma ferrosa (altamente biodisponible), oxigenando tu cerebro para sesiones de cálculo prolongadas.",
      ordenIngestaRecomendado: ["1° Sarsa criolla", "2° Lentejas con pescado", "3° Arroz"],
    },
    mejorMomento: "Lunes de inicio de semana o antes de sesiones continuas de 4 horas de clase.",
    evitarEn: "Si tienes problemas de distensión digestiva aguda por legumbres (hidrátate con agua tibia).",
    precioPromedioSol: "S/ 9.00 - S/ 12.00",
    emoji: "🍲",
  },
  {
    id: "arroz-chaufa-pollo",
    nombre: "Arroz Chaufa de Pollo (Chifa Universitario)",
    categoria: "al-paso",
    categoriaLabel: "Al Paso / Económicos",
    objetivos: [],
    porcionGramos: 550,
    calorias: 820,
    macros: {
      proteinas: 26,
      carbohidratos: 112,
      grasas: 30,
      fibra: 2.1,
    },
    riesgoSomnolencia: "alto",
    riesgoSomnolenciaDetalle: "Alerta Crítica: Alto Pico Glucémico y Deshidratación Celular",
    horasSaciedad: "2.5 - 3 hrs (rebote de apetito rápido)",
    impactoGlucemico: "Pico alto y abrupto",
    descripcion:
      "El salvavidas de medianoche y almuerzos apurados frente a la facultad. Gran volumen de arroz salteado al wok a alta temperatura con sillao, aceite, trocitos de pollo, huevo batido y cebolla china.",
    ingredientesPrincipales: [
      "Arroz blanco cocido del día anterior",
      "Trozos pequeños de pollo salteado",
      "Huevo revuelto",
      "Sillao (salsa de soya alta en sodio), aceite y cebolla china",
    ],
    porQueDaSueno:
      "Es prácticamente un bloque de almidón puro con casi nula fibra vegetal y alto contenido de sodio (sillao/glutamato). Provoca un pico vertiginoso de azúcar en sangre, seguido de una hipoglucemia reactiva ('crash'). Además, la carga de sodio induce deshidratación intracelular, provocando pesadez en los párpados.",
    vitalHack: {
      titulo: "El Salchicha & Vinagre Hack",
      accion:
        "Pide si es posible medio wantán con nabo encurtido o compra una ensalada simple aparte. Añade vinagre o limón a tu plato y bebe un vaso grande de agua antes de empezar.",
      explicacionCientifica:
        "El ácido acético (vinagre/limón) inactiva parcialmente la enzima alfa-amilasa salival, frenando la descomposición inmediata del almidón en glucosa.",
      ordenIngestaRecomendado: ["1° Vaso de agua + encurtido/ensalada", "2° Trozos de pollo/huevo", "3° Chaufa"],
    },
    mejorMomento: "Post-entrenamientos extenuantes donde necesitas recargar glucógeno rápido.",
    evitarEn: "A toda costa antes de clases teóricas de 2 horas o exámenes decisivos.",
    precioPromedioSol: "S/ 7.00 - S/ 11.00",
    emoji: "🥡",
  },
  {
    id: "lomo-saltado-papas-arroz",
    nombre: "Lomo Saltado con Papas Fritas y Arroz",
    categoria: "comedor",
    categoriaLabel: "Comedor / Menú",
    objetivos: ["alta-proteina"],
    porcionGramos: 500,
    calorias: 760,
    macros: {
      proteinas: 38,
      carbohidratos: 84,
      grasas: 32,
      fibra: 4.2,
    },
    riesgoSomnolencia: "moderado",
    riesgoSomnolenciaDetalle: "Riesgo Moderado-Alto (Doble Almidón + Grasa de Fritura)",
    horasSaciedad: "4 hrs",
    impactoGlucemico: "Moderado",
    descripcion:
      "Tiras de carne de res salteadas al wok con cebolla, tomate, ají amarillo y culantro, combinadas con papas fritas y una porción de arroz blanco.",
    ingredientesPrincipales: [
      "Carne de res magra/semigrasa",
      "Papas fritas en bastones",
      "Cebolla roja y tomate en gajos gruesos",
      "Sillao, vinagre tinto y culantro fresco",
    ],
    porQueDaSueno:
      "El lomo saltado tiene excelente proteína y algo de fibra en la cebolla y tomate, pero la presencia simultánea de papas fritas y arroz genera una competencia digestiva pesada por el contenido lipídico.",
    vitalHack: {
      titulo: "El Cambio de Balanza 50/50",
      accion:
        "Come primero los gajos de cebolla y tomate crujientes empapados en el jugo de vinagre tinto. Luego la carne de res. Finalmente consume las papas y solo la mitad del arroz.",
      explicacionCientifica:
        "El vinagre tinto del aderezo salteado reduce la respuesta insulínica de los almidones si se consumen primero las fibras vegetales marinadas.",
      ordenIngestaRecomendado: ["1° Tomate y cebolla con juguito", "2° Tiras de lomo", "3° Papas fritas y arroz"],
    },
    mejorMomento: "Almuerzos cuando la tarde involucra trabajo en equipo dinámico o movimiento.",
    evitarEn: "Jornadas sedentarias de programación donde debas leer documentación intrincada.",
    precioPromedioSol: "S/ 12.00 - S/ 16.00",
    emoji: "🥩",
  },
  {
    id: "tallarines-rojos-pollo-huancaina",
    nombre: "Tallarines Rojos con Pollo + Papa a la Huancaína",
    categoria: "comedor",
    categoriaLabel: "Comedor / Menú",
    objetivos: [],
    porcionGramos: 560,
    calorias: 890,
    macros: {
      proteinas: 33,
      carbohidratos: 118,
      grasas: 32,
      fibra: 3.0,
    },
    riesgoSomnolencia: "alto",
    riesgoSomnolenciaDetalle: "Peligro Crítico: 'Bomba de Carbohidratos' y Coma Inducido",
    horasSaciedad: "3.5 hrs",
    impactoGlucemico: "Pico alto y abrupto",
    descripcion:
      "El combo 'matador' del menú universitario: plato hondo de espaguetis en salsa de tomate y zanahoria con presa de pollo, rematado con una porción de papa con huancaína.",
    ingredientesPrincipales: [
      "Pasta larga de harina refinada",
      "Salsa de tomate con trozos de zanahoria y hongo/laurel",
      "Presa de pollo",
      "Papa con crema huancaína",
    ],
    porQueDaSueno:
      "Concentra tres fuentes masivas de carbohidratos refinados simultáneos: fideos de trigo, papa y galleta de soda (en la salsa). Produce la mayor respuesta insulínica de la gastronomía de menú universitario, causando pesadez ocular y sopor a los 40 minutos.",
    vitalHack: {
      titulo: "Estrategia de Mitigación Severa",
      accion:
        "Pide que te sirvan la salsa huancaína sobre el pollo o la ensalada, no sobre una papa entera adicional. Deja un tercio del plato de fideos si no vas a hacer actividad física intensa esa misma tarde.",
      explicacionCientifica:
        "La harina de trigo refinada cocida en fideos tiene una tasa de hidrólisis enzimática ultra veloz; recortar el volumen previene la caída brusca de energía.",
      ordenIngestaRecomendado: ["1° Pollo bañado en salsa", "2° Huancaína con huevo duro", "3° Fideos rojos"],
    },
    mejorMomento: "Viernes después del último examen de la semana o días de entrenamiento de fuerza.",
    evitarEn: "Clase teórica de las 2:00 a 4:00 PM con profesor monótono.",
    precioPromedioSol: "S/ 9.00 - S/ 13.00",
    emoji: "🍝",
  },
  {
    id: "seco-pollo-frejoles-arroz",
    nombre: "Seco de Pollo / Res con Frejoles y Arroz",
    categoria: "comedor",
    categoriaLabel: "Comedor / Menú",
    objetivos: ["energia-sostenida", "alta-proteina"],
    porcionGramos: 540,
    calorias: 740,
    macros: {
      proteinas: 44,
      carbohidratos: 86,
      grasas: 24,
      fibra: 13.0,
    },
    riesgoSomnolencia: "bajo",
    riesgoSomnolenciaDetalle: "Riesgo Bajo-Moderado (Freno Biológico por Legumbres)",
    horasSaciedad: "5 hrs",
    impactoGlucemico: "Plano y sostenido",
    descripcion:
      "Guiso aromático de culantro, ají amarillo y chicha de jora o cerveza negra con presa de pollo o carne de res, servido sobre una generosa porción de frejoles canario y arroz.",
    ingredientesPrincipales: [
      "Frejol canario bien cocido",
      "Presa de pollo o trozo de res guisado al culantro",
      "Arroz blanco",
      "Sarsa criolla con limón",
    ],
    porQueDaSueno:
      "Aunque el plato parece denso, los frejoles canarios son una de las mejores fuentes de almidón resistente y fibra soluble del mundo andino. La curva de glucosa sube muy lentamente, manteniendo el cerebro alimentado durante horas sin bajón.",
    vitalHack: {
      titulo: "La Regla de la Sarsa Ácida",
      accion:
        "Pide doble porción de cebollita criolla con limón en el menú. Come la carne y los frejoles mezclados con la cebolla antes de terminar con el arroz.",
      explicacionCientifica:
        "El almidón resistente de los frejoles nutre a las bacterias del colon para producir ácidos grasos de cadena corta (butirato), que mejoran la sensibilidad a la insulina.",
      ordenIngestaRecomendado: ["1° Sarsa criolla", "2° Carne guisada + frejoles", "3° Arroz"],
    },
    mejorMomento: "Días largos de estudio con horarios corridos sin tiempo para cenar temprano.",
    evitarEn: "Si sufres de digestión lenta antes de nadar o correr.",
    precioPromedioSol: "S/ 9.00 - S/ 13.00",
    emoji: "🫘",
  },
  {
    id: "pollo-plancha-quinua-ensalada",
    nombre: "Pollo a la Plancha con Quinua Graneada y Ensalada Fresca",
    categoria: "tupper",
    categoriaLabel: "Tupper Saludable",
    objetivos: ["anti-sueno", "alta-proteina", "energia-sostenida"],
    porcionGramos: 440,
    calorias: 520,
    macros: {
      proteinas: 46,
      carbohidratos: 48,
      grasas: 14,
      fibra: 8.5,
    },
    riesgoSomnolencia: "bajo",
    riesgoSomnolenciaDetalle: "Riesgo Mínimo: La Opción Maestra para Enfoque Cognitivo Extremo",
    horasSaciedad: "4 hrs",
    impactoGlucemico: "Plano y sostenido",
    descripcion:
      "La opción dorada para llevar en tupper o pedir en cafeterías saludables universitarias. Filete de pechuga dorada con especias, quinua perlada graneada como cereal andino completo y ensalada mixta multicolor.",
    ingredientesPrincipales: [
      "Pechuga de pollo a la plancha (150g)",
      "Quinua perlada graneada con ajo y cebollita",
      "Ensalada fresca (lechuga, tomate, pepino, palta)",
      "Aliño de limón y aceite de oliva/vegetal",
    ],
    porQueDaSueno:
      "No da sueño. La quinua tiene un índice glucémico bajo (IG ~35) frente al arroz blanco (IG ~73), contiene los 9 aminoácidos esenciales y su digestión demanda un gasto metabólico eficiente sin desviar todo el flujo sanguíneo al estómago.",
    vitalHack: {
      titulo: "El Combo de Parciales Finales",
      accion:
        "Agrega 1/4 de palta a la ensalada. Las grasas monoinsaturadas aportan saciedad y potencian la absorción de carotenoides protectores de la vista frente a monitores.",
      explicacionCientifica:
        "Mantiene la glucosa en un rango óptimo de 80-100 mg/dL, eliminando la fluctuación que activa el centro cerebral del sueño (núcleo preóptico ventrolateral).",
      ordenIngestaRecomendado: ["1° Ensalada mixta con palta", "2° Pechuga de pollo", "3° Quinua graneada"],
    },
    mejorMomento: "El almuerzo definitivo antes de un examen final o entrega de proyecto a las 2:00 PM.",
    evitarEn: "Ninguno. Es el estándar de oro para estudiar con mente afilada.",
    precioPromedioSol: "S/ 6.50 (Tupper casero) - S/ 14.00 (Cafetería)",
    emoji: "🥗",
  },
  {
    id: "salchipapa-broaster-carretilla",
    nombre: "Salchipapa / Pollo Broaster con Papas Fritas (Al Paso)",
    categoria: "al-paso",
    categoriaLabel: "Al Paso / Económicos",
    objetivos: [],
    porcionGramos: 480,
    calorias: 880,
    macros: {
      proteinas: 22,
      carbohidratos: 82,
      grasas: 52,
      fibra: 2.8,
    },
    riesgoSomnolencia: "alto",
    riesgoSomnolenciaDetalle: "Peligro: Digestión Muy Pesada por Aceites Recalentados y Grasas Saturadas",
    horasSaciedad: "3 hrs (con reflujo e hinchazón)",
    impactoGlucemico: "Pico alto y abrupto",
    descripcion:
      "La tentación nocturna frente a las puertas universitarias al salir de clases a las 9:00 PM. Papas fritas amarillas o blancas con embutido o presa empanizada frita y cascada de cremas (mayonesa, tártara, mostaza).",
    ingredientesPrincipales: [
      "Papas fritas en aceite reutilizado",
      "Hot dog cortado en rodajas o presa con rebozado de harina frita",
      "Cremas comerciales (mayonesa, kétchup, tártara, ají)",
    ],
    porQueDaSueno:
      "La enorme densidad de aceites vegetales recalentados ralentiza la motilidad gástrica provocando que el estómago requiera irrigación sanguínea masiva durante 4 horas. Produce letargia profunda, reflujo esofágico e interrumpe la fase REM si duermes poco después.",
    vitalHack: {
      titulo: "Protocolo Anti-Cremas y Alivio Nocturno",
      accion:
        "Pide solo ají de la casa y mostaza; dile NO a la mayonesa y tártara industrial. Bebe un vaso grande de agua con limón al llegar a tu cuarto y no te acuestes hasta pasadas 2 horas.",
      explicacionCientifica:
        "La mostaza contiene vinagre y cúrcuma que estimulan la secreción de bilis, facilitando la emulsión de grasas difíciles.",
      ordenIngestaRecomendado: ["1° Agua previa", "2° Presa/embutido con ají", "3° Papas fritas sin ahogar en mayonesa"],
    },
    mejorMomento: "Salida social con amigos de fin de ciclo donde no tengas que estudiar al llegar.",
    evitarEn: "Noches previas a exámenes de 7:00 AM o durante semanas de entregas continuas.",
    precioPromedioSol: "S/ 5.00 - S/ 9.00",
    emoji: "🍟",
  },
  {
    id: "aji-de-gallina-arroz-huevo",
    nombre: "Ají de Gallina con Arroz, Huevo Duro y Aceituna",
    categoria: "comedor",
    categoriaLabel: "Comedor / Menú",
    objetivos: ["energia-sostenida", "alta-proteina"],
    porcionGramos: 490,
    calorias: 710,
    macros: {
      proteinas: 36,
      carbohidratos: 74,
      grasas: 28,
      fibra: 2.9,
    },
    riesgoSomnolencia: "moderado",
    riesgoSomnolenciaDetalle: "Riesgo Moderado (Cremoso y Energético, Requiere Regulación de Arroz)",
    horasSaciedad: "3.5 - 4 hrs",
    impactoGlucemico: "Moderado",
    descripcion:
      "Clásico reconfortante de la cocina criolla. Pechuga de pollo deshilachada sumergida en una crema aterciopelada a base de ají amarillo, caldo, leche evaporada y pan remojado, coronado con huevo duro y aceituna botija.",
    ingredientesPrincipales: [
      "Pechuga de pollo deshilachada",
      "Crema de ají amarillo, cebolla, ajo y leche",
      "Pan francés o galleta de soda espesante",
      "Arroz blanco, huevo duro y aceituna negra",
    ],
    porQueDaSueno:
      "Aporta buen nivel de proteína magra (pollo + huevo duro), pero el espesante de pan francés remojado en la crema sumado a la ración de arroz blanco eleva la carga glucémica neta si se ingiere con rapidez.",
    vitalHack: {
      titulo: "El Hack del Huevo & Aceituna Primero",
      accion:
        "Empieza comiendo el medio huevo duro y la aceituna botija. Luego mezcla la crema de ají de gallina con solo la mitad de la porción de arroz que te sirvan.",
      explicacionCientifica:
        "La colina del huevo y los ácidos grasos de la aceituna negra desencadenan la liberación temprana de colecistoquinina (CCK), indicándole al cerebro saciedad antes del exceso de carbohidratos.",
      ordenIngestaRecomendado: ["1° Huevo duro + aceituna", "2° Ají de gallina con pollo", "3° Arroz moderado"],
    },
    mejorMomento: "Días fríos de invierno universitario cuando requieres comida caliente y reconfortante.",
    evitarEn: "Días calurosos con aulas sin ventilación antes de exposiciones orales.",
    precioPromedioSol: "S/ 8.50 - S/ 12.00",
    emoji: "🍲",
  },
  {
    id: "ceviche-pescado-camote-choclo",
    nombre: "Ceviche / Pescado Sudado con Camote y Choclo",
    categoria: "comedor",
    categoriaLabel: "Comedor / Menú",
    objetivos: ["anti-sueno", "alta-proteina"],
    porcionGramos: 430,
    calorias: 460,
    macros: {
      proteinas: 39,
      carbohidratos: 52,
      grasas: 8,
      fibra: 6.8,
    },
    riesgoSomnolencia: "bajo",
    riesgoSomnolenciaDetalle: "Riesgo Nulo: Claridad Mental Inmediata y Cero Pesadez Postprandial",
    horasSaciedad: "3.5 hrs",
    impactoGlucemico: "Plano y sostenido",
    descripcion:
      "El orgullo nacional y uno de los mejores bio-combustibles cognitivos. Cubos de pescado fresco curados en zumo de limón recién exprimido, ají limo, cebolla roja crujiente, choclo desgranado y rodaja de camote sancochado.",
    ingredientesPrincipales: [
      "Pescado blanco o azul en cubos",
      "Zumo de limón, ají limo y cilantro",
      "Cebolla roja en pluma",
      "Choclo tierno sancochado y rodaja de camote",
    ],
    porQueDaSueno:
      "No produce somnolencia alguna. Es un plato prácticamente libre de grasas saturadas, rico en carbohidratos complejos de absorción lenta (choclo y camote) y con alta biodisponibilidad de aminoácidos como la tirosina (precursora de dopamina y noradrenalina).",
    vitalHack: {
      titulo: "El Disparo de Dopamina Criollo",
      accion:
        "Toma el 'leche de tigre' residual con calma y mastica bien el choclo. La combinación ácida y pungente estimula el nervio trigémino y el sistema reticular ascendente, despertando tus sentidos.",
      explicacionCientifica:
        "La capsaicina del ají limo y los aminoácidos del pescado activan el sistema nervioso simpático moderado, promoviendo alerta y foco sin ansiedad.",
      ordenIngestaRecomendado: ["1° Cebolla y pescado con leche de tigre", "2° Choclo", "3° Camote sancochado"],
    },
    mejorMomento: "Almuerzo de mediodía antes de simulacros, talleres de debate o exámenes de programación.",
    evitarEn: "Si no tienes acceso a un puesto con cadena de frío higiénica de confianza.",
    precioPromedioSol: "S/ 12.00 - S/ 16.00",
    emoji: "🐟",
  },
  {
    id: "desayuno-carretilla-quinua-palta",
    nombre: "Desayuno de Carretilla: Vaso de Quinua/Maca + Pan con Palta o Huevo",
    categoria: "desayuno",
    categoriaLabel: "Desayunos",
    objetivos: ["anti-sueno", "energia-sostenida"],
    porcionGramos: 380,
    calorias: 410,
    macros: {
      proteinas: 15,
      carbohidratos: 62,
      grasas: 12,
      fibra: 6.2,
    },
    riesgoSomnolencia: "bajo",
    riesgoSomnolenciaDetalle: "Riesgo Bajo: Energía Matutina Estable vs. Pan con Torreja Frita",
    horasSaciedad: "3 hrs",
    impactoGlucemico: "Plano y sostenido",
    descripcion:
      "El salvavidas de las 6:45 AM en la puerta de la UNI o cualquier universidad pública peruana. Un vaso caliente de quinua o maca hervida con manzana/piña y canela, acompañado de un pan francés con generosa porción de palta o tortilla de huevo.",
    ingredientesPrincipales: [
      "Vaso de quinua o maca bebible caliente",
      "Pan francés crujiente",
      "Palta madura triturada o huevo sancochado/frito al instante",
    ],
    porQueDaSueno:
      "Si pides la quinua con poca azúcar, la combinación con las grasas saludables de la palta o la proteína del huevo crea una liberación prolongada de energía para las primeras dos clases de la mañana, superando por mucho a los paquetes de galletas o energizantes.",
    vitalHack: {
      titulo: "Pídela 'Sin Azúcar' o 'Baja en Dulce'",
      accion:
        "Dile a la casera: 'Casera, sírvemelo con poco dulce o mitad quinua y mitad agua de manzana'. Elige pan con palta o huevo antes que torreja de verduras frita en aceite reusable.",
      explicacionCientifica:
        "Evitas el pico matutino de glucosa a las 7:30 AM que te dejaría cabeceando en la primera teoría de las 8:00 AM.",
      ordenIngestaRecomendado: ["1° Pan con palta/huevo", "2° Vaso de quinua/maca tibia a sorbos lentos"],
    },
    mejorMomento: "Desayuno veloz entre las 6:30 AM y 7:45 AM antes de ingresar al campus.",
    evitarEn: "Tomar versiones con jarabes de azúcar extremadamente espesas sin acompañar con proteína/grasa.",
    precioPromedioSol: "S/ 2.50 - S/ 4.00",
    emoji: "☕",
  },
  {
    id: "atun-camote-choclo-tupper",
    nombre: "Atún en Conserva con Camote Sancochado, Choclo y Ensalada (Tupper Express)",
    categoria: "tupper",
    categoriaLabel: "Tupper Saludable",
    objetivos: ["anti-sueno", "alta-proteina", "energia-sostenida"],
    porcionGramos: 410,
    calorias: 470,
    macros: {
      proteinas: 38,
      carbohidratos: 54,
      grasas: 10,
      fibra: 7.2,
    },
    riesgoSomnolencia: "bajo",
    riesgoSomnolenciaDetalle: "Riesgo Nulo: Máxima Eficiencia Económica, Tiempo Cero y Cero Bajón",
    horasSaciedad: "4 hrs",
    impactoGlucemico: "Plano y sostenido",
    descripcion:
      "El tupper de supervivencia del estudiante independiente y foráneo. Una lata de atún al agua o en aceite escurrido, camote sancochado en rodajas, granos de choclo desgranado y un puñado de tomate con limón y sal.",
    ingredientesPrincipales: [
      "1 lata de lomito o gratado de atún (140g)",
      "1 camote mediano sancochado previamente en el cuarto",
      "Choclo desgranado sancochado",
      "Tomate, cebolla y limón fresco",
    ],
    porQueDaSueno:
      "Cero sueño en clase de 2pm. El atún provee ácidos grasos Omega-3 (DHA y EPA) que forman las membranas neuronales, y el camote es un carbohidrato de índice glucémico bajo-medio rico en betacarotenos. Digestión ultra fluida.",
    vitalHack: {
      titulo: "El Hack Foráneo de 5 Minutos",
      accion:
        "Sancocha 4 camotes los domingos y guárdalos en la refrigeradora o espacio fresco. Al armar tu tupper en la mañana solo abres la lata de atún y exprimes un limón.",
      explicacionCientifica:
        "El camote cocido y enfriado incrementa su contenido de almidón retrógrado (resistente), reduciendo su impacto glucémico en un 30% adicional.",
      ordenIngestaRecomendado: ["1° Tomate/ensalada con limón", "2° Atún con especias", "3° Camote y choclo"],
    },
    mejorMomento: "Días de biblioteca, laboratorios seguidos o semanas críticas de parciales.",
    evitarEn: "Ninguno. Es la opción más costo-efectiva de todo el ecosistema universitario.",
    precioPromedioSol: "S/ 4.50 - S/ 6.00 por porción",
    emoji: "🥫",
  },
];
