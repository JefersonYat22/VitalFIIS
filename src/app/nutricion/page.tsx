'use client';

import { useState } from 'react';
import { nutricionData } from './data';

export default function NutricionPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('macronutrientes');
  const [itemActivo, setItemActivo] = useState('carbohidratos');
  const [subItemActivo, setSubItemActivo] = useState<string | null>(null);

  // Obtención de datos según el estado
  const datosCategoria = nutricionData[categoriaActiva];
  const itemSeleccionado = datosCategoria.items.find(item => item.id === itemActivo) || datosCategoria.items[0];
  
  // Si el item tiene subItems y hay uno seleccionado, lo capturamos
  const subItemSeleccionado = itemSeleccionado.subItems?.find(sub => sub.id === subItemActivo);

  // Esta variable decide qué detalles (alimentos, ayuda, tiempo) vamos a renderizar
  const detallesAMostrar = subItemSeleccionado?.detalle || itemSeleccionado.detalle;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      
      {/* SECCIÓN HERO */}
      <div className="relative bg-slate-900 text-white py-24 px-8 mb-12 shadow-xl">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/home-nutrients.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-green-400">
            Nutrientes, Hidratación y Calorías
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-200 leading-relaxed font-medium">
            Entender qué hace cada nutriente, mantener una buena hidratación y controlar tus calorías te cambia la vida. No se trata de comer menos, sino de comer estratégicamente para rendir al máximo.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* SIDEBAR */}
        <aside className="lg:col-span-3 space-y-6">
          {Object.entries(nutricionData).map(([catKey, catData]) => (
            <div key={catKey} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all">
              <button 
                onClick={() => {
                  setCategoriaActiva(catKey);
                  setItemActivo(catData.items[0].id);
                  setSubItemActivo(null); // Resetea el sub-item al cambiar de categoría
                }}
                className={`w-full text-left px-5 py-4 font-bold text-lg transition-colors ${
                  categoriaActiva === catKey 
                    ? 'bg-green-500 text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {catData.titulo}
              </button>
              
              {/* Opciones de Nivel 2 */}
              {categoriaActiva === catKey && (
                <div className="p-3 flex flex-col gap-1 bg-white">
                  {catData.items.map(item => (
                    <div key={item.id} className="flex flex-col">
                      <button
                        onClick={() => {
                          setItemActivo(item.id);
                          setSubItemActivo(null); // Vuelve a la vista general si hace clic en el padre
                        }}
                        className={`text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                          itemActivo === item.id && !subItemActivo
                            ? 'bg-green-50 text-green-700 border border-green-200 shadow-sm pl-6' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                        }`}
                      >
                        {item.nombre}
                      </button>
                      
                      {/* Opciones de Nivel 3 (Sub-menú de Vitaminas) */}
                      {itemActivo === item.id && item.subItems && (
                        <div className="ml-4 mt-1 border-l-2 border-green-100 pl-2 flex flex-col gap-1">
                          {item.subItems.map(sub => (
                            <button
                              key={sub.id}
                              onClick={() => setSubItemActivo(sub.id)}
                              className={`text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                subItemActivo === sub.id
                                  ? 'bg-green-500 text-white shadow-sm'
                                  : 'text-slate-500 hover:text-green-600 hover:bg-green-50'
                              }`}
                            >
                              • {sub.nombre}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* PANEL PRINCIPAL */}
        <section className="lg:col-span-9">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden transition-all duration-300">
            
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-green-500 rounded-full opacity-5 blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider mb-5">
                {subItemSeleccionado ? `${itemSeleccionado.nombre} > ${subItemSeleccionado.nombre}` : datosCategoria.titulo}
              </span>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
                {subItemSeleccionado ? subItemSeleccionado.nombre : itemSeleccionado.nombre}
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {subItemSeleccionado ? subItemSeleccionado.descripcion : itemSeleccionado.descripcion}
              </p>

              {/* VISTA GENERAL: Si no hay detalle (porque es un menú que agrupa como Vitaminas), mostramos el tip general */}
              {!detallesAMostrar && itemSeleccionado.tipGeneral && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200 shadow-inner mt-4">
                  <h3 className="text-xl font-bold text-green-800 mb-3">Introducción Rápida</h3>
                  <p className="text-green-900 leading-relaxed font-medium">
                    {itemSeleccionado.tipGeneral}
                  </p>
                  <p className="mt-6 text-sm font-bold text-green-600 uppercase tracking-widest flex items-center">
                    ← Selecciona un mineral en el menú izquierdo para profundizar
                  </p>
                </div>
              )}

              {/* VISTA ESPECÍFICA: Si hay detalle, mostramos la grilla de tarjetas */}
              {detallesAMostrar && (
                <div className="grid md:grid-cols-2 gap-8 border-t border-slate-100 pt-8 mt-2">
                  
                  {/* Alimentos */}
                  <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="flex items-center text-xl font-bold text-slate-800 mb-6">
                      🛒 ¿Dónde encontrarlos?
                    </h3>
                    <ul className="space-y-4">
                      {detallesAMostrar.alimentos.map((alimento, i) => (
                        <li key={i} className="flex items-start text-slate-600 font-medium">
                          <span className="text-green-500 mr-3 text-lg leading-none">✓</span>
                          {alimento}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Beneficios y Tiempos */}
                  <div className="space-y-8">
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="flex items-center text-lg font-bold text-blue-900 mb-3">
                         ¿Cómo te ayuda?
                      </h3>
                      <p className="text-blue-800 leading-relaxed text-sm">
                        {detallesAMostrar.comoTeAyuda}
                      </p>
                    </div>

                    <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="flex items-center text-lg font-bold text-amber-900 mb-3">
                         Momento Ideal de Consumo
                      </h3>
                      <p className="text-amber-800 leading-relaxed text-sm">
                        {detallesAMostrar.momentoIdeal}
                      </p>
                    </div>
                  </div>

                </div>
              )}
            </div>
            
          </div>
        </section>

      </div>
    </main>
  );
}