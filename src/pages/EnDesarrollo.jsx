// src/pages/EnDesarrollo.jsx
import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { WrenchScrewdriverIcon, ChevronLeftIcon, HomeIcon } from '@heroicons/react/24/solid'

export default function EnDesarrollo() {
  const navigate = useNavigate()
  const location = useLocation()
  const feature = location.state?.feature || 'Sección'

  const btnSoft =
    'inline-flex items-center justify-center rounded-3xl bg-[rgba(255,245,238,0.95)] text-[#CE1E10] ' +
    'font-bold px-5 py-2 shadow-2xl transition hover:bg-[#EE3223] hover:text-white'
  const badgeCircle =
    'bg-white p-3 rounded-full shadow-md ring-2 ring-[#EE3223]/20'

  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="max-w-xl w-full bg-[rgba(255,245,238,0.92)] backdrop-blur rounded-3xl shadow-2xl border border-[#EE3223]/10 px-8 py-10 text-center">
        {/* Icono destacado */}
        <div className="flex justify-center mb-5">
          <div className={badgeCircle}>
            <WrenchScrewdriverIcon className="w-10 h-10 text-[#F25E52]" />
          </div>
        </div>

        {/* Título y texto */}
        <h2 className="text-3xl font-extrabold text-[#CE1E10]">
          {feature} en desarrollo
        </h2>
        <p className="mt-2 text-[#CE1E10]/80">
          Estamos trabajando para habilitar esta funcionalidad. Vuelve pronto. 🚧
        </p>

        {/* Separador suave */}
        <div className="h-px bg-[#EE3223]/20 my-6" />

        {/* Acciones */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className={btnSoft} onClick={() => navigate(-1)}>
            <ChevronLeftIcon className="w-5 h-5 mr-2" />
            Volver
          </button>
          <Link to="/" className={btnSoft}>
            <HomeIcon className="w-5 h-5 mr-2" />
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

