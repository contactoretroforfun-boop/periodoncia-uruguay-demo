"use client";

import React, { useState } from "react";
import Image from "next/image";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { 
  ShieldCheck, 
  Activity, 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X, 
  Award, 
  Stethoscope, 
  Heart, 
  Sparkles,
  ChevronRight,
  FileText
} from "lucide-react";

// Pixel-perfect inline custom SVG for Instagram to ensure 100% build reliability
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Constants
  const WHATSAPP_URL = "https://wa.me/59896556563?text=Hola%20Periodoncia%20Uruguay,%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20de%20diagn%C3%B3stico.";
  const CLINIC_PHONE = "2709 2424";
  const CLINIC_ADDRESS = "Gabriel Pereira 3046, Montevideo, Uruguay";
  const CLINIC_HOURS = "Lunes a Viernes de 09:00 a 20:00 hs";

  // Schema Markup for Local SEO
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Periodoncia Uruguay - Especialidades Odontológicas",
    "image": "https://periodonciauruguay.com.uy/facebook-cover.jpg",
    "@id": "https://periodonciauruguay.com.uy/#dentist",
    "url": "https://periodonciauruguay.com.uy",
    "telephone": "+59827092424",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gabriel Pereira 3046",
      "addressLocality": "Montevideo",
      "addressRegion": "Montevideo",
      "postalCode": "11300",
      "addressCountry": "UY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.9048,
      "longitude": -56.1523
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/periodonciauruguay",
      "https://www.facebook.com/PeriodonciaUruguay"
    ],
    "medicalSpecialty": "Periodontics"
  };

  return (
    <>
      {/* Structured Schema.org Markup for local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#FCFDFD]/90 backdrop-blur-md border-b border-gray-100/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20 sm:h-24">
            
            {/* Logo area */}
            <a href="#hero" className="flex items-center justify-center md:justify-start w-full md:w-auto group">
              
              {/* Mobile View: Original stacked vertical logo (Centered and scaled at 1.6) */}
              <div className="relative w-40 h-16 md:hidden transition-transform duration-300 scale-[1.6] origin-center">
                <Image
                  src="/logo-transparent.png"
                  alt="Periodoncia Uruguay Logo"
                  fill
                  sizes="256px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Desktop (Web) View: Isotype on the left, Typography on the right */}
              <div className="hidden md:flex items-center gap-3.5 group-hover:opacity-95 transition-opacity duration-300">
                
                {/* Isotype (Sphere) with subtle micro-rotation on hover */}
                <div className="relative w-12 h-12 transition-transform duration-500 group-hover:rotate-[15deg]">
                  <Image
                    src="/logo_isotype_v3.png"
                    alt="Isotipo Periodoncia Uruguay"
                    fill
                    sizes="48px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Typography (Brand name text image aligned to the right of isotype) */}
                <div className="relative w-56 h-12">
                  <Image
                    src="/logo_typography_v3.png"
                    alt="Periodoncia Uruguay"
                    fill
                    sizes="224px"
                    className="object-contain"
                    priority
                  />
                </div>

              </div>

            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              <a href="#servicios" className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">
                Servicios
              </a>
              <a href="#por-que-nosotros" className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">
                Por Qué Nosotros
              </a>
              <a href="#educacion" className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">
                Educación
              </a>
              <a href="#casos" className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">
                Resultados
              </a>
              <a href="#testimonios" className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">
                Opiniones
              </a>
              <a href="#contacto" className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors">
                Contacto
              </a>
            </nav>

            {/* Desktop Action CTA */}
            <div className="hidden md:block">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-brand-primary hover:bg-brand-primary-hover shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.897 14.1 1.872 12.012 1.872c-5.437 0-9.863 4.42-9.867 9.864 0 1.93.507 3.812 1.47 5.516l-.965 3.525 3.61-.947zm11.237-7.79c-.3-.15-1.776-.875-2.05-1.05-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.792-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.48-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 0-.275-.3-1.05-1.025-1.05-2.25s.8-2.4 1.15-2.8c.35-.4.675-.625 1.1-.625.2 0 .375.025.55.025.175 0 .425-.025.65.175.325.275 1.1.875 1.35 1.05.275.175.4.3.2.6-.2.3-.425.55-.6.775-.175.225-.375.475-.15.8.225.375.99 1.623 2.125 2.63 1.46 1.297 2.69 1.7 3.09 1.9.4.2.75.175 1.025-.125.275-.3 1.175-1.375 1.475-1.85.3-.475.6-.4.9-.25.3.15 1.9.9 2.225 1.05.325.15.55.225.625.35.075.125.075.725-.225 1.025-.3.3-1.775 1.75-2.475 1.75-.7 0-1.325-.325-1.6-.475z" />
                </svg>
                Agendar Consulta
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="absolute right-4 md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-brand-primary hover:bg-brand-light focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FCFDFD] border-b border-gray-100 shadow-xl transition-all duration-300 absolute w-full left-0">
            <div className="px-4 pt-2 pb-6 space-y-3 sm:px-6">
              <a 
                href="#servicios" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light transition-all"
              >
                Servicios
              </a>
              <a 
                href="#por-que-nosotros" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light transition-all"
              >
                Por Qué Nosotros
              </a>
              <a 
                href="#educacion" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light transition-all"
              >
                Educación
              </a>
              <a 
                href="#casos" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light transition-all"
              >
                Resultados (Antes/Después)
              </a>
              <a 
                href="#testimonios" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light transition-all"
              >
                Opiniones de Pacientes
              </a>
              <a 
                href="#contacto" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light transition-all"
              >
                Contacto
              </a>
              <div className="pt-2">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-4 px-6 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-brand-primary hover:bg-brand-primary-hover shadow-md transition-all gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.897 14.1 1.872 12.012 1.872c-5.437 0-9.863 4.42-9.867 9.864 0 1.93.507 3.812 1.47 5.516l-.965 3.525 3.61-.947zm11.237-7.79c-.3-.15-1.776-.875-2.05-1.05-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.792-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.48-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 0-.275-.3-1.05-1.025-1.05-2.25s.8-2.4 1.15-2.8c.35-.4.675-.625 1.1-.625.2 0 .375.025.55.025.175 0 .425-.025.65.175.325.275 1.1.875 1.35 1.05.275.175.4.3.2.6-.2.3-.425.55-.6.775-.175.225-.375.475-.15.8.225.375.99 1.623 2.125 2.63 1.46 1.297 2.69 1.7 3.09 1.9.4.2.75.175 1.025-.125.275-.3 1.175-1.375 1.475-1.85.3-.475.6-.4.9-.25.3.15 1.9.9 2.225 1.05.325.15.55.225.625.35.075.125.075.725-.225 1.025-.3.3-1.775 1.75-2.475 1.75-.7 0-1.325-.325-1.6-.475z" />
                  </svg>
                  Agendar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-8 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-brand-light/30 via-[#FCFDFD] to-[#FCFDFD]">
        {/* Background elegant accents */}
        <div className="absolute top-0 right-0 w-[45%] h-[70%] bg-brand-light/20 rounded-bl-[120px] -z-10 pointer-events-none" />
        <div className="absolute -top-40 left-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
              
              {/* Specialized Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light border border-brand-primary/10 rounded-full">
                <Award className="w-4 h-4 text-brand-primary" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider text-brand-primary uppercase font-sans">
                  Odontología Altamente Especializada
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 tracking-tight leading-[1.1]">
                  Especialistas en <span className="text-brand-primary italic">Periodoncia</span> y <span className="text-brand-primary">Ortodoncia</span> en Montevideo
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Tratamientos avanzados enfocados en la salud de tus encías, la estética y la reconstrucción integral de sonrisas con atención personalizada de primer nivel.
                </p>
              </div>

              {/* Trust Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 font-sans text-left text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>Dra. Fabiana Villarnobo (MSc. Ortodoncia)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>Diagnóstico periodontal digital temprano</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>Atención 100% personalizada e individualizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>Ubicación céntrica en Pocitos</span>
                </div>
              </div>

              {/* Primary Call to Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:py-5 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-brand-primary hover:bg-brand-primary-hover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 gap-3 animate-pulse-gentle"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.897 14.1 1.872 12.012 1.872c-5.437 0-9.863 4.42-9.867 9.864 0 1.93.507 3.812 1.47 5.516l-.965 3.525 3.61-.947zm11.237-7.79c-.3-.15-1.776-.875-2.05-1.05-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.792-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.48-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 0-.275-.3-1.05-1.025-1.05-2.25s.8-2.4 1.15-2.8c.35-.4.675-.625 1.1-.625.2 0 .375.025.55.025.175 0 .425-.025.65.175.325.275 1.1.875 1.35 1.05.275.175.4.3.2.6-.2.3-.425.55-.6.775-.175.225-.375.475-.15.8.225.375.99 1.623 2.125 2.63 1.46 1.297 2.69 1.7 3.09 1.9.4.2.75.175 1.025-.125.275-.3 1.175-1.375 1.475-1.85.3-.475.6-.4.9-.25.3.15 1.9.9 2.225 1.05.325.15.55.225.625.35.075.125.075.725-.225 1.025-.3.3-1.775 1.75-2.475 1.75-.7 0-1.325-.325-1.6-.475z" />
                  </svg>
                  Agendar por WhatsApp
                </a>
                
                <a 
                  href="#contacto"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:py-5 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:border-brand-accent/50 hover:bg-brand-light/20 transition-all duration-300 gap-2"
                >
                  Ver Ubicación y Teléfono
                </a>
              </div>

            </div>

            {/* Right Hero Image (Authentic Physical Clinic Photo) */}
            <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-[1.5/1] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/facebook-cover.jpg"
                alt="Clínica Periodoncia Uruguay - Dra. Fabiana Villarnobo"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
                priority
              />
              
              {/* Doctor Name overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-gray-100 shadow-lg font-sans">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Dra. Fabiana Villarnobo</h3>
                    <p className="text-xs text-gray-500 font-medium">Especialista en Periodoncia, Ortodoncia y Ortopedia</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE CONFIANZA */}
      <section id="por-que-nosotros" className="py-16 sm:py-24 bg-[#FCFDFD] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-brand-accent uppercase font-sans">
              Compromiso Clínico
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
              Un estándar superior de excelencia odontológica
            </p>
            <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-serif mb-3">Atención Personalizada</h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                Sin prisas ni esperas. Diseñamos planes terapéuticos individuales que se adaptan rigurosamente a tus necesidades de salud y estética dental.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-serif mb-3">Especialistas Certificados</h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                Formación universitaria avanzada y posgrados internacionales. Te atiendes directamente con expertos certificados en cada disciplina.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-serif mb-3">Clínica en Montevideo</h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                Ubicados en Gabriel Pereira, Pocitos. Un espacio moderno, cálido e impecable provisto con tecnología clínica de vanguardia para tu confort.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-serif mb-3">Tratamientos Modernos</h3>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                Aplicamos protocolos modernos de mínima invasión e instrumentos digitales para lograr procedimientos indoloros, cómodos y de pronta recuperación.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SERVICIOS */}
      <section id="servicios" className="py-20 sm:py-28 bg-[#FCFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-brand-accent uppercase font-sans">
              Áreas de Especialización
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
              Tratamientos odontológicos de alta precisión
            </p>
            <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full" />
            <p className="text-base text-gray-500 font-sans max-w-2xl mx-auto">
              Nuestra práctica se enfoca en resolver problemas biológicos complejos, garantizando la durabilidad funcional y estética de tu boca.
            </p>
          </div>

          {/* Grid of Services (2-3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary/10 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 mb-8">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-4 group-hover:text-brand-primary transition-colors">Periodoncia</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6">
                  Cuidado altamente especializado de las encías y los tejidos de soporte de tus dientes. Tratamos la gingivitis, periodontitis (piorrea) y realizamos microcirugía plástica periodontal para recubrir encías retraídas.
                </p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-accent gap-2 group/btn font-sans">
                Consultar Servicio <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary/10 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 mb-8">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-4 group-hover:text-brand-primary transition-colors">Ortodoncia</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6">
                  Alineación dental estética y corrección de la mordida para niños, adolescentes y adultos. Tratamiento con aparatología de última generación, brackets tradicionales y alineadores estéticos invisibles.
                </p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-accent gap-2 group/btn font-sans">
                Consultar Servicio <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary/10 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 mb-8">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-4 group-hover:text-brand-primary transition-colors">Implantes Dentales</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6">
                  Recuperación funcional y estética de dientes perdidos mediante implantes de titanio biocompatibles de alta gama. Procedimientos minuciosos y coronas confeccionadas con materiales de apariencia idéntica a la natural.
                </p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-accent gap-2 group/btn font-sans">
                Consultar Servicio <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary/10 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 mb-8">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-4 group-hover:text-brand-primary transition-colors">Rehabilitación Oral</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6">
                  Restauración biológica y estética de bocas con desgastes severos, múltiples caries o pérdidas de piezas. Colocación de carillas de porcelana premium, coronas estéticas y puentes sobre dientes naturales o implantes.
                </p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-accent gap-2 group/btn font-sans">
                Consultar Servicio <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary/10 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 mb-8">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-serif mb-4 group-hover:text-brand-primary transition-colors">Diagnóstico Periodontal</h3>
                <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6">
                  Análisis exhaustivo del estado clínico de tus encías. Realizamos mapas periodontales de precisión mediante sondajes informatizados y diagnóstico radiográfico digital completo para anticipar problemas graves antes del dolor.
                </p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-primary hover:text-brand-accent gap-2 group/btn font-sans">
                Consultar Servicio <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>
            </div>

            {/* Quick Consultation Promo Card */}
            <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-8 rounded-3xl shadow-lg flex flex-col justify-between text-white border border-brand-primary/10">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold font-serif leading-snug">¿Necesitás una evaluación con especialistas?</h3>
                <p className="text-sm text-brand-light/80 font-sans leading-relaxed">
                  Evitá complicaciones irreversibles. Agendá una consulta de diagnóstico completa con nuestros profesionales hoy mismo por WhatsApp de forma directa.
                </p>
              </div>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center py-4 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-brand-primary bg-white hover:bg-brand-accent hover:text-white transition-all duration-300 gap-2"
              >
                Agendar Consulta por WhatsApp
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECCIÓN EDUCATIVA & INSTAGRAM AUTHORITY */}
      <section id="educacion" className="py-20 sm:py-28 bg-brand-pale/50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Educational Text & Cards */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-widest text-brand-accent uppercase font-sans">
                  Educación y Prevención
                </h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
                  Tu salud periodontal es el cimiento de tu salud general
                </h3>
                <div className="h-1 w-20 bg-brand-accent rounded-full" />
                <p className="text-base text-gray-600 font-sans leading-relaxed">
                  Creemos profundamente en la odontología informativa. Las enfermedades periodontales suelen ser silenciosas: no duelen hasta encontrarse en fases muy avanzadas. Reconocer los síntomas tempranos es vital para salvar tus piezas dentales.
                </p>
              </div>

              {/* Warnings List */}
              <div className="space-y-6">
                
                {/* Warning 1 */}
                <div className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100/70 shadow-sm font-sans">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-red-500 font-bold text-sm">
                    !
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Sangrado al Cepillarse o Comer</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      El sangrado de encías <span className="font-semibold text-brand-primary">no es normal</span>. Es la primera manifestación clínica de inflamación bacteriana (gingivitis) y, si no se trata a tiempo, evoluciona hacia la pérdida de hueso.
                    </p>
                  </div>
                </div>

                {/* Warning 2 */}
                <div className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100/70 shadow-sm font-sans">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-red-500 font-bold text-sm">
                    !
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Sensación de Movilidad Dental o Espacios Nuevos</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      Si notas que un diente se mueve levemente o aparecen pequeños triángulos negros entre ellos, la periodontitis puede estar destruyendo el soporte óseo radicular de tus dientes. Debes consultar a un especialista de inmediato.
                    </p>
                  </div>
                </div>

                {/* Warning 3 */}
                <div className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100/70 shadow-sm font-sans">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-brand-primary font-bold text-sm">
                    i
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">Conexión con la Salud Sistémica</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                      Las bacterias periodontales viajan por el torrente sanguíneo. Está clínicamente demostrado que una periodontitis no controlada complica la diabetes, agrava enfermedades pulmonares y aumenta el riesgo cardiovascular.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Phone Mockup with REAL Clinical Instagram Screenshot */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              
              {/* Phone Mockup Frame */}
              <div className="relative w-[280px] sm:w-[320px] aspect-[9/18.5] bg-gray-950 rounded-[48px] p-3 shadow-2xl border-[6px] border-gray-800 ring-4 ring-gray-900 ring-offset-2 overflow-hidden group">
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-30" />

                {/* Screen Inner with premium white padding margins */}
                <div className="relative w-full h-full rounded-[38px] bg-white z-20 pt-7 px-3 pb-3 sm:pt-9 sm:px-4 sm:pb-4 flex flex-col">
                  {/* Inner container to hold and clip the actual image screen with smooth rounded corners */}
                  <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-gray-50 flex-1">
                    <Image
                      src="/instagram-v2.png"
                      alt="Instagram de Periodoncia Uruguay"
                      fill
                      sizes="(max-width: 1024px) 100vw, 300px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      priority
                    />
                    
                    {/* Subtle visual lighting shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/15 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Instagram Call to Action */}
              <div className="mt-8 text-center space-y-3 font-sans">
                <div className="flex items-center justify-center gap-2 text-brand-primary font-bold">
                  <InstagramIcon className="w-5 h-5" />
                  <span>@periodonciauruguay</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 max-w-xs leading-relaxed">
                  Seguinos en redes para aprender diariamente con nuestros casos clínicos reales, videos informativos de prevención y consejos odontológicos.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a 
                    href="https://www.instagram.com/periodonciauruguay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:shadow-md transition-all duration-300"
                  >
                    Seguir en Instagram <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="https://www.facebook.com/PeriodonciaUruguay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166FE5] hover:shadow-md transition-all duration-300"
                  >
                    Seguir en Facebook <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. ANTES Y DESPUÉS (Interactive Case Showroom) */}
      <section id="casos" className="py-20 sm:py-28 bg-[#FCFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-brand-accent uppercase font-sans">
              Galería de Resultados
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
              Casos reales, transformaciones biológicas y estéticas
            </p>
            <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full" />
            <p className="text-base text-gray-500 font-sans max-w-2xl mx-auto">
              Cada resultado es el fruto de un diagnóstico minucioso y la ejecución de técnicas microquirúrgicas y ortodóncicas avanzadas, preservando la anatomía del paciente.
            </p>
          </div>

          {/* Interactive BeforeAfterSlider component */}
          <BeforeAfterSlider />

          {/* Clinical Context Badges */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 font-sans text-center">
            <div className="p-4 rounded-xl bg-brand-light/40 border border-brand-primary/5">
              <span className="block font-bold text-brand-primary text-base">Tratamiento Realizado</span>
              <span className="text-xs text-gray-500 mt-1 block">Alineación avanzada y salud gingival</span>
            </div>
            <div className="p-4 rounded-xl bg-brand-light/40 border border-brand-primary/5">
              <span className="block font-bold text-brand-primary text-base">Especialidad</span>
              <span className="text-xs text-gray-500 mt-1 block">Periodoncia y Ortodoncia Combinada</span>
            </div>
            <div className="p-4 rounded-xl bg-brand-light/40 border border-brand-primary/5">
              <span className="block font-bold text-brand-primary text-base">Objetivo Logrado</span>
              <span className="text-xs text-gray-500 mt-1 block">Preservación natural y simetría estética</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIOS (Inspired by real Google Maps Reviews) */}
      <section id="testimonios" className="py-20 sm:py-28 bg-brand-light/20 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-brand-accent uppercase font-sans">
              Testimonios de Pacientes
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
              La confianza de quienes cuidan su sonrisa con nosotros
            </p>
            <div className="h-1 w-20 bg-brand-accent mx-auto rounded-full" />
            <p className="text-base text-gray-500 font-sans">
              Nuestros pacientes valoran el rigor profesional, la calidez y los resultados duraderos.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between font-sans">
              <div>
                {/* Gold Stars */}
                <div className="flex gap-1 text-amber-400 mb-6">
                  {"★★★★★".split("").map((star, idx) => (
                    <span key={idx} className="text-lg leading-none">{star}</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed mb-6">
                  &ldquo;Soy de Melo, y viajo todos los meses a atenderme en Periodoncia Uruguay, tengo ortodoncia. Siempre me preguntan por qué me tomo el trabajo y esfuerzo de pagar pasaje y viajar 500km para atenderme ahí. ¡Realmente lo vale! Son los mejores. Destaco que siempre me escuchan, trabajan en equipo con sus pacientes, son todos de primer nivel, me han contenido cuando pasé mal por los desastres que me dejaron ortodoncias previas mal hechas. La Dra. Villarnobo siempre me contesta los msjs con todas mis dudas y planteos, no importa el día ni la hora. Cuidan siempre conservar mis dientes naturales. 100% recomendable.&ldquo;
                </p>
              </div>
              <div>
                <div className="h-px bg-gray-100 w-full my-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Luisa Aquino</h4>
                    <p className="text-xs text-gray-400">Paciente desde Melo (500km)</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-accent bg-brand-light px-2.5 py-1 rounded-full">
                    Ortodoncia
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between font-sans">
              <div>
                {/* Gold Stars */}
                <div className="flex gap-1 text-amber-400 mb-6">
                  {"★★★★★".split("").map((star, idx) => (
                    <span key={idx} className="text-lg leading-none">{star}</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed mb-6">
                  &ldquo;Me atiendo hace unos años y realmente tuve un gran cambio con el tratamiento de ortodoncia, la atención y dedicación con el paciente es muy buena, es un trabajo en equipo. Le agradezco la dedicación en mejorar y mantener la boca sana.&ldquo;
                </p>
              </div>
              <div>
                <div className="h-px bg-gray-100 w-full my-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Ana Urrutia</h4>
                    <p className="text-xs text-gray-400">Paciente de Montevideo</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-accent bg-brand-light px-2.5 py-1 rounded-full">
                    Ortodoncia
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between font-sans">
              <div>
                {/* Gold Stars */}
                <div className="flex gap-1 text-amber-400 mb-6">
                  {"★★★★★".split("").map((star, idx) => (
                    <span key={idx} className="text-lg leading-none">{star}</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed mb-6">
                  &ldquo;Las clases han sido buenas, de mucho conocimiento, en lo personal me ha ayudado ampliamente en el diagnóstico y plan de tratamiento. Aunque me cuesta trabajo la parte ortodóntica, la Dra. Fabiana siempre es muy amplia en su explicación y con mucha paciencia. El diplomado es ampliamente recomendado.&ldquo;
                </p>
              </div>
              <div>
                <div className="h-px bg-gray-100 w-full my-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Eva María García Alvarez</h4>
                    <p className="text-xs text-gray-400">Alumna de Formación / Especialista</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-accent bg-brand-light px-2.5 py-1 rounded-full">
                    Formación
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Social Proof indicator */}
          <div className="mt-12 text-center font-sans">
            <p className="text-xs sm:text-sm text-gray-500">
              Calificación destacada en base a reseñas de pacientes reales. Comprometidos con la excelencia y la salud a largo plazo.
            </p>
          </div>

        </div>
      </section>

      {/* 7. MAPA Y CONTACTO */}
      <section id="contacto" className="py-20 sm:py-28 bg-[#FCFDFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left side: Info Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 font-sans">
              
              <div className="space-y-6">
                
                {/* Title */}
                <div className="space-y-3">
                  <h2 className="text-xs font-bold tracking-widest text-brand-accent uppercase">
                    Información y Turnos
                  </h2>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
                    Ubicación y Canales de Contacto
                  </h3>
                  <div className="h-1 w-20 bg-brand-accent rounded-full" />
                </div>

                <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                  Nuestra clínica se encuentra en una zona de excelente acceso en el barrio Pocitos, Montevideo. Atendemos exclusivamente con reserva previa para asegurar la máxima puntualidad y dedicación individualizada.
                </p>

                {/* Details List */}
                <div className="space-y-5 mt-6">
                  
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Dirección de la Clínica</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{CLINIC_ADDRESS}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Línea Telefónica Fija</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{CLINIC_PHONE}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Horario de Atención</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{CLINIC_HOURS}</p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Call to Action WhatsApp */}
              <div className="bg-brand-light/50 p-6 rounded-2xl border border-brand-primary/5">
                <h4 className="font-bold text-gray-900 text-sm mb-2">¿Querés agendar una consulta de forma inmediata?</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  El canal más directo y rápido es WhatsApp. Nuestro equipo responderá tu consulta a la brevedad coordinando un día y horario conveniente.
                </p>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-primary hover:bg-brand-primary-hover shadow-md gap-2 animate-pulse-gentle"
                >
                  Escribinos por WhatsApp
                </a>
              </div>

            </div>

            {/* Right side: Google Map Embedded */}
            <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-md relative">
              <iframe
                title="Mapa de ubicación de Periodoncia Uruguay en Montevideo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.603417726359!2d-56.152336!3d-34.904791000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f810e7401db5f%3A0xc3f146522c0e86b0!2sGabriel%20Pereira%203046%2C%2011300%20Montevideo%2C%20Departamento%20de%20Montevideo%2C%20Uruguay!5e0!3m2!1ses!2suy!4v1700000000000!5m2!1ses!2suy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CTA FINAL BANNER */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-brand-primary text-white">
        {/* Background visual detail */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -z-10" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 z-10">
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-brand-accent uppercase font-sans">
              Cuidá tu sonrisa con profesionales
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif max-w-3xl mx-auto leading-tight">
              ¿Necesitás una evaluación clínica profesional?
            </h3>
            <p className="text-sm sm:text-base text-brand-light/80 font-sans max-w-xl mx-auto">
              Da el paso correcto hacia una salud bucal duradera y estética. No postergues tu diagnóstico periodontal o de ortodoncia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-primary bg-white hover:bg-brand-accent hover:text-white shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 gap-3"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.897 14.1 1.872 12.012 1.872c-5.437 0-9.863 4.42-9.867 9.864 0 1.93.507 3.812 1.47 5.516l-.965 3.525 3.61-.947zm11.237-7.79c-.3-.15-1.776-.875-2.05-1.05-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.792-1.49-1.77-1.665-2.07-.175-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.48-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 0-.275-.3-1.05-1.025-1.05-2.25s.8-2.4 1.15-2.8c.35-.4.675-.625 1.1-.625.2 0 .375.025.55.025.175 0 .425-.025.65.175.325.275 1.1.875 1.35 1.05.275.175.4.3.2.6-.2.3-.425.55-.6.775-.175.225-.375.475-.15.8.225.375.99 1.623 2.125 2.63 1.46 1.297 2.69 1.7 3.09 1.9.4.2.75.175 1.025-.125.275-.3 1.175-1.375 1.475-1.85.3-.475.6-.4.9-.25.3.15 1.9.9 2.225 1.05.325.15.55.225.625.35.075.125.075.725-.225 1.025-.3.3-1.775 1.75-2.475 1.75-.7 0-1.325-.325-1.6-.475z" />
              </svg>
              Hablar por WhatsApp
            </a>
            
            <a 
              href="tel:+59827092424"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 rounded-full text-xs font-semibold text-white bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300 gap-2 font-sans"
            >
              Llamar al 2709 2424
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Branding */}
            <div className="md:col-span-5 text-center md:text-left space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                
                {/* Mobile Footer View: Original stacked logo */}
                <div className="relative w-56 h-14 md:hidden transition-transform duration-300">
                  <Image
                    src="/logo-transparent.png"
                    alt="Periodoncia Uruguay Logo"
                    fill
                    sizes="224px"
                    className="object-contain filter invert brightness-200 opacity-80"
                    priority
                  />
                </div>

                {/* Desktop (Web) Footer View: Isotype left, Typography right (inverted/white for dark mode) */}
                <div className="hidden md:flex items-center gap-3.5 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  
                  {/* Isotype (Sphere) inverted */}
                  <div className="relative w-10 h-10 filter invert brightness-200">
                    <Image
                      src="/logo_isotype_v3.png"
                      alt="Isotipo Periodoncia Uruguay"
                      fill
                      sizes="40px"
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* Typography inverted */}
                  <div className="relative w-48 h-10 filter invert brightness-200">
                    <Image
                      src="/logo_typography_v3.png"
                      alt="Periodoncia Uruguay"
                      fill
                      sizes="192px"
                      className="object-contain"
                      priority
                    />
                  </div>

                </div>

              </div>
              <p className="text-xs text-gray-500 max-w-sm">
                Clínica Odontológica Especializada. Salud de encías, implantes y estética de la sonrisa con rigor científico y calidez humana.
              </p>
            </div>

            {/* Middle: Links */}
            <div className="md:col-span-3 text-center space-y-2 text-xs">
              <h4 className="text-white font-bold uppercase tracking-wider text-[10px] mb-4">Enlaces rápidos</h4>
              <div className="flex flex-col gap-2.5">
                <a href="#servicios" className="hover:text-white transition-colors">Especialidades</a>
                <a href="#por-que-nosotros" className="hover:text-white transition-colors">Por Qué Nosotros</a>
                <a href="#educacion" className="hover:text-white transition-colors">Prevención y Educación</a>
                <a href="#casos" className="hover:text-white transition-colors">Antes y Después</a>
              </div>
            </div>

            {/* Right: Regulatory/Registration & Local details */}
            <div className="md:col-span-4 text-center md:text-right text-xs space-y-2 text-gray-500">
              <h4 className="text-white font-bold uppercase tracking-wider text-[10px] mb-4">Habilitaciones y Registros</h4>
              <p>Clínica habilitada en Montevideo, Uruguay.</p>
              <p>Directora Técnica: Dra. Fabiana Villarnobo</p>
              <p className="text-[10px] text-gray-600 mt-2">
                Diseñado exclusivamente para Periodoncia Uruguay. Todos los derechos reservados &copy; {new Date().getFullYear()}.
              </p>
            </div>

          </div>

          <div className="h-px bg-gray-900 w-full my-8" />

          {/* Localized Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-600 gap-4">
            <div>
              Periodoncia Uruguay &bull; Gabriel Pereira 3046, Montevideo, Uruguay &bull; Tel: 2709 2424
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/PeriodonciaUruguay" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Facebook</a>
              <span className="text-gray-800">&bull;</span>
              <a href="https://www.instagram.com/periodonciauruguay" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Instagram</a>
              <span className="text-gray-800">&bull;</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">WhatsApp</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
