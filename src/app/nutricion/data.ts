export type Detalle = {
  alimentos: string[];
  comoTeAyuda: string;
  momentoIdeal: string;
};

export type SubItem = {
  id: string;
  nombre: string;
  descripcion: string;
  detalle: Detalle;
};

export type Nutriente = {
  id: string;
  nombre: string;
  descripcion: string;
  detalle?: Detalle; // Opcional: Si no lo tiene, es porque es un grupo con subItems
  tipGeneral?: string;
  subItems?: SubItem[];
};

export type CategoriaData = {
  titulo: string;
  items: Nutriente[];
};

export const nutricionData: Record<string, CategoriaData> = {
  macronutrientes: {
    titulo: 'Macronutrientes y Calorías',
    items: [
      {
        id: 'carbohidratos',
        nombre: 'Carbohidratos y Glucosa',
        descripcion: 'Son el macronutriente principal encargado de proveer energía rápida al cuerpo y al cerebro. Si controlas su calidad y cantidad, evitas los picos de insulina que causan sueño en clase.',
        detalle: {
          alimentos: [
            'Avena en hojuelas',
            'Arroz (preferiblemente integral o servido con ensalada)',
            'Tubérculos: Papa, camote (como en el estofado)',
            'Frutas enteras (plátano, manzana)'
          ],
          comoTeAyuda: 'Mantienen tu cerebro encendido. El cerebro consume aproximadamente el 20% de la glucosa de tu cuerpo; sin carbohidratos de buena calidad, pierdes concentración.',
          momentoIdeal: 'En el desayuno (avena) para iniciar el día con energía, o antes de un examen complejo. Evita consumirlos solos a altas horas de la noche.'
        }
      },
      {
        id: 'proteinas',
        nombre: 'Proteínas',
        descripcion: 'Macronutriente estructural compuesto por aminoácidos. Son los "ladrillos" que construyen y reparan los tejidos del cuerpo, además de crear hormonas y enzimas.',
        detalle: {
          alimentos: [
            'Huevos sancochados o revueltos',
            'Carnes magras (pollo, carne de res en guisos)',
            'Legumbres: Lentejas, garbanzos',
            'Atún o sangrecita'
          ],
          comoTeAyuda: 'Sintetizan neurotransmisores como la dopamina y la serotonina, fundamentales para mantener un buen estado de ánimo frente al estrés universitario.',
          momentoIdeal: 'Es vital incluir entre 20g y 30g de proteína en tu desayuno para mantenerte saciado y evitar el hambre a media mañana.'
        }
      },
      {
        id: 'grasas',
        nombre: 'Grasas Saludables',
        descripcion: 'Las grasas son la fuente de energía más densa (aportan 9 calorías por gramo). Son indispensables para absorber vitaminas y proteger la estructura neuronal.',
        detalle: {
          alimentos: [
            'Palta',
            'Frutos secos (maní, almendras, nueces)',
            'Aceite de oliva',
            'Yemas de huevo'
          ],
          comoTeAyuda: 'Protegen las neuronas (mielina) haciendo que la transmisión de información en tu cerebro sea más rápida.',
          momentoIdeal: 'Por su lenta digestión, un puñado de frutos secos a media tarde te dará energía estable por varias horas sin generar picos de azúcar.'
        }
      }
    ]
  },
  micronutrientes: {
    titulo: 'Hidratación y Micronutrientes',
    items: [
      {
        id: 'hidratacion',
        nombre: 'Agua e Hidratación',
        descripcion: 'El agua compone aproximadamente el 60% de tu cuerpo. No aporta calorías, pero es el medio donde ocurren todas las reacciones químicas que te mantienen alerta.',
        detalle: {
          alimentos: [
            'Agua pura (esencial)',
            'Infusiones sin azúcar (manzanilla, anís)',
            'Frutas ricas en agua (sandía, melón)'
          ],
          comoTeAyuda: 'Regula la temperatura corporal y transporta nutrientes al cerebro. Una deshidratación del 2% disminuye drásticamente tu capacidad lógica.',
          momentoIdeal: 'Toma al menos 500ml de agua inmediatamente al despertar para reactivar tu organismo tras el sueño.'
        }
      },
      {
        id: 'vitaminas_minerales',
        nombre: 'Vitaminas y Minerales',
        descripcion: 'Las vitaminas y minerales son los catalizadores de tu cuerpo. No te dan energía directa como los carbohidratos, pero sin ellos, tus células literalmente no pueden encender el motor metabólico para aprovechar lo que comes.',
        tipGeneral: '💡 Tip universitario: No necesitas gastar en suplementos caros en pastillas si mantienes una dieta variada. Selecciona una de las opciones abajo para ver los micronutrientes que más impactan en tu rendimiento académico.',
        subItems: [
          {
            id: 'magnesio',
            nombre: 'Magnesio',
            descripcion: 'El mineral de la relajación. Participa en más de 300 reacciones bioquímicas y es clave para regular el sistema nervioso después de un día lleno de clases.',
            detalle: {
              alimentos: ['Espinaca', 'Avena', 'Almendras y nueces', 'Cacao puro'],
              comoTeAyuda: 'Relaja los músculos tensos y ayuda a apagar el cerebro por la noche, combatiendo el insomnio previo a los parciales.',
              momentoIdeal: 'Ideal consumirlo en la cena o al final del día para preparar al cuerpo para un sueño reparador.'
            }
          },
          {
            id: 'hierro',
            nombre: 'Hierro',
            descripcion: 'El transportador vital. Es el componente principal de la hemoglobina, encargado de llevar oxígeno desde tus pulmones hasta tu cerebro.',
            detalle: {
              alimentos: ['Sangrecita', 'Hígado', 'Lentejas', 'Espinaca cocida'],
              comoTeAyuda: 'Evita la anemia, la fatiga crónica y ese bostezo constante en clases por la falta de oxigenación cerebral.',
              momentoIdeal: 'En los almuerzos. OJO: Siempre acompáñalo con Vitamina C (limonada) para multiplicar su absorción, y aleja el té o café de esta comida.'
            }
          },
          {
            id: 'vitamina_c',
            nombre: 'Vitamina C',
            descripcion: 'El antioxidante escudo. Además de fortalecer tu sistema inmune, es indispensable para que tu cuerpo absorba el hierro vegetal (el de las lentejas).',
            detalle: {
              alimentos: ['Limón', 'Naranja', 'Papaya', 'Pimiento rojo'],
              comoTeAyuda: 'Evita que te enfermes en épocas de estrés (semanas de exámenes) y mantiene tus tejidos saludables.',
              momentoIdeal: 'Acompañando tus almuerzos fuertes (en ensaladas o refrescos) o como fruta de media mañana.'
            }
          },
          {
            id: 'vitamina_b12',
            nombre: 'Vitamina B12',
            descripcion: 'Fundamental para la memoria y la formación de glóbulos rojos. Su deficiencia es una de las causas principales de la "niebla mental" y el cansancio extremo.',
            detalle: {
              alimentos: ['Huevos', 'Trozos de pollo o carne', 'Atún', 'Lácteos (yogurt, leche)'],
              comoTeAyuda: 'Mantiene la vaina de mielina (el recubrimiento de tus neuronas) sana, acelerando tu velocidad de procesamiento y retención de información durante el estudio.',
              momentoIdeal: 'En el desayuno o almuerzo. Nota: Si llevas una dieta estrictamente vegetariana en la universidad, es obligatorio suplementarla.'
            }
          },
          {
            id: 'vitamina_d',
            nombre: 'Vitamina D',
            descripcion: 'Conocida como la vitamina del sol. Más que una vitamina, actúa como una hormona maestra clave para tu estado de ánimo y tu sistema inmunológico.',
            detalle: {
              alimentos: ['Yemas de huevo', 'Atún o pescados grasos', '¡Luz solar directa! (15 min al día)'],
              comoTeAyuda: 'Previene el estrés y el bajo estado de ánimo que genera estar encerrado todo el día estudiando o frente a una pantalla.',
              momentoIdeal: 'El mejor "consumo" es salir a caminar 10-15 minutos bajo el sol de la mañana en el campus antes de entrar a tus clases o pabellones.'
            }
          },
          {
            id: 'zinc',
            nombre: 'Zinc',
            descripcion: 'El mineral del rendimiento cognitivo y la inmunidad. Es un pilar para la neuroplasticidad, que es básicamente tu capacidad para aprender cosas nuevas.',
            detalle: {
              alimentos: ['Carnes rojas', 'Pollo', 'Lentejas y garbanzos', 'Semillas de calabaza'],
              comoTeAyuda: 'Fortalece tus defensas para que no pierdas clases por resfriados y optimiza la comunicación entre tus neuronas, mejorando tu capacidad de atención.',
              momentoIdeal: 'En los almuerzos. Si alguna vez decides suplementarlo, nunca lo tomes con el estómago vacío junto con tu primer vaso de agua porque genera náuseas.'
            }
          }
        ]
      }
    ]
  }
};