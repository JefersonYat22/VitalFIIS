import Link from "next/link";
import React from "react";
import Image from "next/image";

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function IntroPhilosophy() {
  const narrativeSections = [
    {
      content:
        "Tu cerebro es un consumidor masivo de energía. Cuando tus células reciben el combustible adecuado y evitas las fluctuaciones drásticas en tus niveles de glucosa, la niebla mental desaparece, la retención de información se multiplica y la ansiedad previa a un examen se reduce drásticamente. Entender cómo nutrir a tus neuronas no te quita libertad; al contrario, te da el poder de estudiar en menos tiempo y con mucha más nitidez mental.",
      buttonText: "Explorar el Combustible de tu Mente",
      href: "/nutricion",
      imageSrc: "/images/home-nutrients.jpg",
      imageAlt: "Alimentos variados y nutritivos",
      imagePosition: "right",
      imageCredit: "Bueno y Vegano",
      imageCreditUrl: "https://www.buenoyvegano.com/2021/02/16/que-son-nutrientes-esenciales-por-que-son-necesarios/",
    },
    {
      content:
        "No tienes que elegir entre ser un buen estudiante o hacer el deporte que te apasiona. El ejercicio no te \"quita energía\" para estudiar; es la herramienta más efectiva que existe para liberar el estrés acumulado de las clases, quemar el exceso de cortisol y reiniciar tus circuitos de dopamina. Ya sea jugando una pichanga, haciendo calistenia o aplicando pequeños \"estímulos de movimiento\" en tu día, el ejercicio prepara a tu sistema nervioso para enfocarse mejor y descansar como te mereces.",
      buttonText: "Ver Protocolos de Rendimiento, Deporte & Sueño",
      href: "/rendimiento",
      imageSrc: "/images/home-sports.jpg",
      imageAlt: "Pelotas y equipamiento deportivo",
      imagePosition: "left",
      imageCredit: "UNILA",
      imageCreditUrl: "https://www.unila.edu.mx/deportes-tradicionales-de-mexico/",
    },
    {
      content: (
        <>
          Lograr un cambio transformador en tu vida no exige transformaciones radicales ni sufrimientos innecesarios. Se trata de aplicar la{" "}
          <strong className="text-stone-950 font-bold">Mínima Dosis Eficaz</strong>: pequeños ajustes del 1% en la secuencia de tus alimentos o en la rutina con la que empiezas tu mañana. Al acumular estas pequeñas victorias diarias sin alterar drásticamente tu estilo de vida, consigues resultados masivos en tu rendimiento físico y mental con el mínimo esfuerzo requerido.
        </>
      ),
      buttonText: "Descubrir Hacks de Aplicación Diaria",
      href: "/hacks-energia",
      imageSrc: "/images/home-hacks.png",
      imageAlt: "Estudiantes trabajando juntos con una laptop",
      imagePosition: "right",
    },
    {
      content:
        "No importa si eres foráneo y vives solo, si viajas horas en transporte público, si almuerzas en el comedor universitario o pides en el menú de la esquina. La verdadera nutrición inteligente se adapta a ti, no tú a ella. Existen soluciones pragmáticas y al alcance de cualquier presupuesto para que nunca tengas que sacrificar tu salud ni tus metas por falta de tiempo o dinero.",
      buttonText: "Encontrar Soluciones para tu Estilo de Vida",
      href: "/contexto",
      imageSrc: "/images/home-context.png",
      imageAlt: "Bandejas de almuerzo en un comedor universitario",
      imagePosition: "left",
    },
  ];

  return (
    <section className="w-full pt-10 pb-20 sm:pt-14 sm:pb-24 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera / Titular Principal */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-950 tracking-tight leading-tight sm:leading-snug">
            Tu cuerpo y tu mente son una máquina de alto rendimiento: dales el combustible para tomar el control de tu vida.
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-stone-700 italic font-medium leading-relaxed max-w-2xl mx-auto">
            &ldquo;Comer bien y moverte no es una carga ni una dieta estricta. Es la palanca biológica que te devuelve la energía, la concentración y las ganas de comerte el mundo en la universidad.&rdquo;
          </p>
        </div>

        {/* Mascota */}
        <div className="flex justify-center mb-10 -mt-6">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 drop-shadow-xl hover:-translate-y-2 transition-transform duration-500">
            <Image
              src="/images/mascot.png"
              alt="Mascota VitalFIIS"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 256px, 320px"
              priority
            />
          </div>
        </div>

        {/* Texto continuo y fluido */}
        <div className="space-y-12 sm:space-y-14">
          {/* Párrafo inicial: Realidad y contexto universitario */}
          <div>
            <p className="text-lg sm:text-xl text-stone-800 leading-relaxed font-normal">
              Sabemos lo compleja que es la vida universitaria. Entre viajar horas en transporte público, pasar jornadas largas frente a pantallas, depender del comedor o comer al paso entre clases, la exigencia académica no te deja espacio para dietas estrictas. Y no es necesario que lo tengas.{" "}
              <strong className="text-stone-950 font-bold">
                No caigas en el error de querer cambiar todo de la noche a la mañana
              </strong>{" "}
              pretendiendo comer solo lechuga o recortar tus calorías a cero; si no estás acostumbrado, vas a caer y el bajón de energía te durará mucho tiempo. Comer bien no se trata de satanizar lo que te gusta ni de vivir sufriendo, sino de tomar decisiones más cercanas, inteligentes y realistas en la posición en la que te encuentras hoy. Con menos esfuerzo obtendrás mejores resultados, ganando la claridad y la libertad mental que necesitas para concentrarte en tus estudios y en lo que realmente te importa.
            </p>
          </div>

          {narrativeSections.map((section, idx) => (
            <div
              key={idx}
              className={`group flex flex-col ${
                section.imageSrc
                  ? section.imagePosition === "left"
                    ? "md:flex-row-reverse md:items-center md:gap-12 lg:gap-16"
                    : "md:flex-row md:items-center md:gap-12 lg:gap-16"
                  : "items-start"
              }`}
            >
              <div className={section.imageSrc ? "flex-1" : "w-full"}>
                <p className="text-lg sm:text-xl text-stone-800 leading-relaxed font-normal">
                  {section.content}
                </p>

                <div className="mt-4 sm:mt-5">
                  <Link
                    href={section.href}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-stone-900 bg-amber-300 hover:bg-amber-400 px-4 sm:px-5 py-2.5 rounded-xl transition-all shadow-xs hover:shadow hover:translate-x-0.5 active:translate-x-0"
                  >
                    <span>{section.buttonText}</span>
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {section.imageSrc && (
                <div className="flex-1 w-full mt-8 md:mt-0 flex flex-col gap-2">
                  {section.imageCreditUrl ? (
                    <a
                      href={section.imageCreditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg border-2 border-stone-100/50 block group/img"
                    >
                      <Image
                        src={section.imageSrc}
                        alt={section.imageAlt || ""}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </a>
                  ) : (
                    <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-lg border-2 border-stone-100/50">
                      <Image
                        src={section.imageSrc}
                        alt={section.imageAlt || ""}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  {section.imageCredit && (
                    <p className="text-xs text-stone-400 text-center px-4">
                      {section.imageCreditUrl ? (
                        <a
                          href={section.imageCreditUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-500 hover:underline transition-colors"
                        >
                          Imagen vía {section.imageCredit}
                        </a>
                      ) : (
                        `Imagen vía ${section.imageCredit}`
                      )}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
