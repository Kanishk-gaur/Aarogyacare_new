"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Sparkles, Globe } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "../contexts/language-context"

const navItems = [
  { name: "nav.home", href: "/" },
  { name: "nav.services", href: "/services" },
  { name: "nav.about", href: "/about" },
  { name: "nav.contact", href: "/contact" },
]

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "kk", name: "Қазақша", flag: "🇰🇿" },
  { code: "ar", name: "العربية", flag: "🇦🇪" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-white/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-80"
              >
                <Sparkles className="w-3 h-3 text-white p-0.5" />
              </motion.div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                MedCare India
              </span>
              <span className="text-xs text-gray-500 font-medium">Healthcare Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm font-semibold transition-all duration-300 hover:text-blue-600 group ${
                    pathname === item.href
                      ? "text-blue-600"
                      : scrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-gray-900 hover:text-blue-600"
                  }`}
                >
                  {t(item.name)}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? "w-full" : "w-0"
                    }`}
                  />
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Language Switcher - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-1 px-2 py-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <span className="text-lg">{currentLanguage.flag}</span>
                    <span className="text-sm font-medium text-gray-700">{currentLanguage.code.toUpperCase()}</span>
                    <Globe className="w-4 h-4 text-gray-500 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-40 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl rounded-xl p-1"
                >
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                        language === lang.code ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-semibold">
                  {t("nav.getStarted")}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile: Language + Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Switcher - Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1 px-2 py-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="text-lg">{currentLanguage.flag}</span>
                  <Globe className="w-4 h-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-40 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-xl rounded-xl p-1"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                      language === lang.code ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl hover:bg-gray-100 transition-colors duration-300 relative"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-900" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-900" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${
                      pathname === item.href ? "text-blue-600 bg-blue-50" : "text-gray-700"
                    }`}
                  >
                    {t(item.name)}
                  </Link>
                </motion.div>
              ))}

              {/* Language Options in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                <div className="py-3 px-4">
                  <p className="text-sm font-medium text-gray-500 mb-2">Select Language</p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-300 ${
                          language === lang.code
                            ? "bg-blue-50 text-blue-600 border border-blue-100"
                            : "hover:bg-gray-50 border border-gray-100"
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-4"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    {t("nav.getStarted")}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
