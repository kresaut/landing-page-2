"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Code,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Shield,
  Award,
  Phone,
  MessageSquare,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [visibleSections, setVisibleSections] = useState<string[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const impactRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 50])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = [
        { ref: heroRef, id: "hero" },
        { ref: impactRef, id: "impact" },
        { ref: servicesRef, id: "services" },
        { ref: processRef, id: "process" },
        { ref: statsRef, id: "stats" },
      ]

      sections.forEach(({ ref, id }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
            setVisibleSections((prev) => (prev.includes(id) ? prev : [...prev, id]))
          }
        }
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Olá! Gostaria de criar uma presença digital para minha empresa.")
    window.open(`https://wa.me/5547988592850?text=${message}`, "_blank")
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const textReveal = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  }

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        custom={index}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.03,
              duration: 0.5,
            },
          }),
        }}
        initial="hidden"
        animate="visible"
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#021527] to-[#053768] opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle absolute rounded-full bg-white opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-2 border-b border-white/10" : "bg-transparent py-4"
        }`}
      >
        <div className="container flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#053768]/10 p-0.5">
              <div className="absolute inset-0 rounded-full bg-[#053768] opacity-20 blur-sm"></div>
              <div className="relative w-full h-full rounded-full bg-black/50 flex items-center justify-center">
                <Image src="/logo.png" alt="Kresaut Logo" width={44} height={44} className="w-auto h-auto" priority />
              </div>
            </div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold text-gradient"
            >
              KRESAUT
            </motion.span>
          </div>
          <nav className="hidden md:flex gap-6">
            {["Serviços", "Como Funciona", "Resultados"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              onClick={handleWhatsAppContact}
              className="glow-button bg-[#053768] text-white hover:bg-[#053768]/90 font-medium border border-white/20"
            >
              Iniciar Projeto
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="grid-background"></div>
          <div className="hero-glow"></div>

          {/* Mouse follower light */}
          <div
            className="absolute pointer-events-none w-[500px] h-[500px] rounded-full bg-[#053768]/20 blur-[100px] opacity-50 z-0"
            style={{
              left: `${mousePosition.x - 250}px`,
              top: `${mousePosition.y - 250}px`,
              transition: "transform 0.2s ease-out",
              transform: "translate3d(0, 0, 0)",
            }}
          ></div>

          <motion.div style={{ opacity, scale, y }} className="container px-4 md:px-6 z-10 relative">
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div
                initial="hidden"
                animate={visibleSections.includes("hero") ? "visible" : "hidden"}
                variants={fadeIn}
                className="space-y-4 max-w-4xl"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm"
                >
                  <MapPin className="h-4 w-4 text-white" />
                  <p className="text-sm font-medium text-white/80">Software House em Gaspar, Santa Catarina</p>
                </motion.div>

                <div className="overflow-hidden">
                  <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={textReveal}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter"
                  >
                    Seu software,
                    <span className="block mt-2">sua forma de trabalhar</span>
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="max-w-[700px] mx-auto text-white/70 md:text-xl"
                >
                  Cansado de soluções que não entregam o que você precisa? Chegou a hora de ter o software ideal para o
                  seu negócio.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-wrap justify-center gap-4 pt-4"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-white" />
                    <span className="text-sm text-white/80">Presença Profissional</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-white" />
                    <span className="text-sm text-white/80">Seguro e Confiável</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-white" />
                    <span className="text-sm text-white/80">3 Anos de Experiência</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={visibleSections.includes("hero") ? "visible" : "hidden"}
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={handleWhatsAppContact}
                  className="glow-button relative px-8 py-6 bg-[#053768] text-white hover:bg-[#053768]/90 border border-white/20 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Solicitar Orçamento
                  </span>
                  <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 border-white/20 text-white hover:bg-white/10 transition-colors group"
                  onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="flex items-center gap-2">
                    Conversar sobre meu projeto
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
            <div className="scroll-arrow"></div>
          </div>
        </section>

        {/* Impact Statement Section */}
        <section ref={impactRef} className="relative w-full py-24 overflow-hidden bg-black/40 backdrop-blur-sm">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#053768]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#053768]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("impact") ? "visible" : "hidden"}
              variants={fadeIn}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="overflow-hidden mb-8">
                <motion.h2
                  initial="hidden"
                  animate={visibleSections.includes("impact") ? "visible" : "hidden"}
                  variants={textReveal}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
                >
                  De nada adianta uma página bonita
                  <br />
                  se ela não <span className="highlight-text">funciona</span> para o seu negócio
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections.includes("impact") ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl text-white/70 max-w-3xl mx-auto"
              >
                A Kresaut transforma ideias em negócios através de soluções digitais que realmente funcionam e trazem
                resultados para sua empresa.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="servicos"
          ref={servicesRef}
          className="relative w-full py-24 overflow-hidden bg-black/60 backdrop-blur-sm"
        >
          <div className="grid-background"></div>
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-[#053768]/10 rotate-45 blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#053768]/10 rounded-full blur-2xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("services") ? "visible" : "hidden"}
              variants={fadeIn}
              className="flex flex-col items-center text-center space-y-4 mb-16"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm">
                <p className="text-sm font-medium text-white/80">O que fazemos</p>
              </div>

              <div className="overflow-hidden">
                <motion.h2
                  initial="hidden"
                  animate={visibleSections.includes("services") ? "visible" : "hidden"}
                  variants={textReveal}
                  className="text-3xl md:text-5xl font-bold tracking-tighter"
                >
                  Soluções Digitais para sua Empresa
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections.includes("services") ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-[700px] text-white/70 md:text-lg"
              >
                Criamos páginas web e plataformas que ajudam sua empresa a vender mais, organizar melhor e crescer na
                internet.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={visibleSections.includes("services") ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Code className="h-8 w-8 text-white" />,
                  title: "Desenvolvimento sob medida",
                  description:
                    "Cada negócio é único. Criamos soluções que se moldam à sua realidade, sem forçar ajustes em sistemas prontos.",
                },
                {
                  icon: <Zap className="h-8 w-8 text-white" />,
                  title: "Entrega eficiente",
                  description:
                    "Nosso processo é rápido, mas nunca corrido. Mapeamos cada detalhe para que você receba o que precisa, na hora que precisa.",
                },
                {
                  icon: <Users className="h-8 w-8 text-white" />,
                  title: "Suporte que conhece o seu setor",
                  description:
                    "Estamos ao seu lado para garantir que o software evolua com suas demandas, sempre prontos para ajustar o que for necessário.",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="feature-card rounded-xl p-8 flex flex-col items-center text-center h-full group"
                >
                  <div className="w-16 h-16 rounded-full bg-[#053768] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 min-h-[3.5rem] flex items-center">{service.title}</h3>
                  <p className="text-white/70 flex-grow flex items-center">{service.description}</p>

                  <div className="mt-6 w-full pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center text-white/80 text-sm">
                      <span>Saiba mais</span>
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Simple Process Section */}
        <section
          id="como-funciona"
          ref={processRef}
          className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-black/60 to-[#053768]/60 backdrop-blur-sm"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2">
                <div className="w-full h-full border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
              </div>
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("process") ? "visible" : "hidden"}
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm mb-6">
                <p className="text-sm font-medium text-white/80">Como funciona</p>
              </div>

              <div className="overflow-hidden mb-8">
                <motion.h2
                  initial="hidden"
                  animate={visibleSections.includes("process") ? "visible" : "hidden"}
                  variants={textReveal}
                  className="text-3xl md:text-5xl font-bold tracking-tighter"
                >
                  Processo Simples e Transparente
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections.includes("process") ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white/70 md:text-lg mb-12 max-w-2xl mx-auto"
              >
                Trabalhamos de forma direta e objetiva. Você acompanha cada etapa e participa das decisões importantes.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    number: "1",
                    title: "Conversamos",
                    description: "Entendemos sua necessidade e definimos o escopo do projeto",
                  },
                  {
                    number: "2",
                    title: "Desenvolvemos",
                    description: "Criamos sua solução com entregas frequentes e feedback constante",
                  },
                  {
                    number: "3",
                    title: "Entregamos",
                    description: "Seu projeto vai ao ar com suporte completo e treinamento",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={visibleSections.includes("process") ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
                    className="text-center relative"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#053768] flex items-center justify-center mx-auto mb-4 relative">
                      <div className="absolute inset-0 rounded-full bg-[#053768] opacity-50 blur-md animate-pulse"></div>
                      <span className="text-2xl font-bold text-white relative z-10">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>

                    {i < 2 && (
                      <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] right-[calc(50%-4rem)] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections.includes("process") ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  onClick={handleWhatsAppContact}
                  className="glow-button bg-[#053768] text-white hover:bg-[#053768]/90 font-medium mt-12 border border-white/20 group"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Iniciar meu Projeto
                  </span>
                  <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          id="resultados"
          ref={statsRef}
          className="relative w-full py-24 overflow-hidden bg-black/60 backdrop-blur-sm"
        >
          <div className="grid-background"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("stats") ? "visible" : "hidden"}
              variants={fadeIn}
              className="flex flex-col items-center text-center space-y-4 mb-16"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm">
                <p className="text-sm font-medium text-white/80">Resultados</p>
              </div>

              <div className="overflow-hidden">
                <motion.h2
                  initial="hidden"
                  animate={visibleSections.includes("stats") ? "visible" : "hidden"}
                  variants={textReveal}
                  className="text-3xl md:text-5xl font-bold tracking-tighter"
                >
                  Números que Comprovam Nossa Qualidade
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={visibleSections.includes("stats") ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-[700px] text-white/70 md:text-lg"
              >
                Resultados reais que ajudam empresas a crescer e se destacar no mercado digital.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("stats") ? "visible" : "hidden"}
              variants={fadeIn}
              className="relative"
            >
              <div className="absolute -inset-1 bg-white/10 rounded-xl blur-lg opacity-30"></div>
              <div className="relative grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-lg overflow-hidden">
                {[
                  { value: "50+", label: "Projetos entregues" },
                  { value: "98%", label: "Clientes satisfeitos" },
                  { value: "3", label: "Anos de experiência" },
                  { value: "24h", label: "Resposta rápida" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={visibleSections.includes("stats") ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="bg-black/50 p-8 flex flex-col items-center justify-center text-center backdrop-blur-sm group hover:bg-[#053768]/20 transition-colors duration-300"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 relative">
                      <span className="relative z-10 group-hover:scale-110 transition-transform duration-300 inline-block">
                        {stat.value}
                      </span>
                      <div className="absolute -inset-1 rounded-full bg-[#053768]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-white/70 group-hover:text-white transition-colors duration-300">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-b from-black to-[#053768]">
          <div className="absolute inset-0 z-0">
            <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#053768] to-transparent opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#053768]/20 blur-[100px] animate-pulse"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative max-w-4xl mx-auto text-center"
            >
              <div className="absolute -inset-1 bg-white/10 rounded-xl blur-lg opacity-30"></div>
              <div className="relative bg-black/30 border border-white/10 shadow-lg rounded-lg p-6 md:p-12 backdrop-blur-sm">
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm">
                    <p className="text-sm font-medium text-white/80">Vamos começar</p>
                  </div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter"
                  >
                    Pronto para Transformar sua Empresa?
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-white/70 max-w-2xl mx-auto text-sm md:text-base"
                  >
                    Converse conosco e vamos criar juntos a solução digital perfeita para o seu negócio. É mais simples
                    do que você imagina!
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                  >
                    <Button
                      onClick={handleWhatsAppContact}
                      size="lg"
                      className="glow-button bg-[#053768] text-white hover:bg-[#053768]/90 font-medium px-6 md:px-8 py-3 md:py-4 border border-white/20 group"
                    >
                      <span className="flex items-center gap-2 relative z-10">
                        <MessageSquare className="h-4 md:h-5 w-4 md:w-5" />
                        Iniciar Projeto Agora
                      </span>
                      <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
                    </Button>
                    <div className="flex items-center gap-2 text-white/70">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">(47) 98859-2850</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-4 md:pt-6 text-xs md:text-sm text-white/70"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 md:h-4 w-3 md:w-4 text-white" />
                      <span>Conversa sem compromisso</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 md:h-4 w-3 md:w-4 text-white" />
                      <span>Orçamento gratuito</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3 md:h-4 w-3 md:w-4 text-white" />
                      <span>Resposta rápida</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-white/10 bg-black relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#053768]/10 p-0.5">
                  <div className="absolute inset-0 rounded-full bg-[#053768] opacity-20 blur-sm"></div>
                  <div className="relative w-full h-full rounded-full bg-black/50 flex items-center justify-center">
                    <Image src="/logo.png" alt="Kresaut Logo" width={44} height={44} className="w-auto h-auto" />
                  </div>
                </div>
                <span className="text-2xl font-bold text-gradient">KRESAUT</span>
              </div>
              <p className="text-white/70 text-sm">
                Criamos soluções digitais para empresas que querem crescer na internet. Simples, profissional e com
                resultados.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">O que Fazemos</h3>
              <ul className="space-y-2 text-white/70">
                <li>Páginas Web Profissionais</li>
                <li>Plataformas Personalizadas</li>
                <li>Manutenção e Suporte</li>
                <li>Consultoria Digital</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Empresa</h3>
              <ul className="space-y-2 text-white/70">
                <li>Sobre a Kresaut</li>
                <li>Nossos Clientes</li>
                <li>Como Trabalhamos</li>
                <li>Política de Privacidade</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contato</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white" />
                  <span>Gaspar, Santa Catarina</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-white" />
                  <span>(47) 98859-2850</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-white" />
                  <span>WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Kresaut. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Simple WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppContact}
          className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
          aria-label="Contato via WhatsApp"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
