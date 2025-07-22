"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  X,
  Search,
  Home,
  User,
  Settings,
  Bell,
  Heart,
  ShoppingBag,
  CreditCard,
  HelpCircle,
  Moon,
  Sun,
  ChevronRight,
  ChevronDown,
  Star,
  Gift,
  Zap,
  Shield,
  Headphones,
  LogOut,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const menuItems = [
    {
      id: "home",
      icon: Home,
      label: "Home",
      badge: null,
      hasSubmenu: false,
    },
    {
      id: "profile",
      icon: User,
      label: "Profile",
      badge: null,
      hasSubmenu: true,
      submenu: [
        { icon: User, label: "View Profile" },
        { icon: Settings, label: "Edit Profile" },
        { icon: Shield, label: "Privacy Settings" },
      ],
    },
    {
      id: "notifications",
      icon: Bell,
      label: "Notifications",
      badge: 3,
      hasSubmenu: false,
    },
    {
      id: "favorites",
      icon: Heart,
      label: "Favorites",
      badge: 12,
      hasSubmenu: false,
    },
    {
      id: "shopping",
      icon: ShoppingBag,
      label: "Shopping",
      badge: null,
      hasSubmenu: true,
      submenu: [
        { icon: ShoppingBag, label: "My Orders" },
        { icon: CreditCard, label: "Payment Methods" },
        { icon: Gift, label: "Gift Cards" },
      ],
    },
    {
      id: "premium",
      icon: Star,
      label: "Premium",
      badge: "NEW",
      hasSubmenu: false,
      special: true,
    },
  ]

  const quickActions = [
    { icon: Zap, label: "Quick Pay", color: "bg-yellow-500" },
    { icon: Gift, label: "Rewards", color: "bg-pink-500" },
    { icon: Headphones, label: "Support", color: "bg-green-500" },
    { icon: Star, label: "Rate App", color: "bg-blue-500" },
  ]

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "text-blue-500" },
    { icon: Twitter, label: "Twitter", color: "text-sky-500" },
    { icon: Instagram, label: "Instagram", color: "text-pink-500" },
    { icon: Youtube, label: "YouTube", color: "text-red-500" },
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20 backdrop-blur-md">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">John Doe</h3>
                <p className="text-gray-400 text-sm">Premium Member</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/10">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-b border-white/10">
            <h4 className="text-white font-medium mb-3">Quick Actions</h4>
            <div className="grid grid-cols-4 gap-3">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  className="flex flex-col items-center space-y-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center`}>
                    <action.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs text-gray-300">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => (item.hasSubmenu ? toggleSection(item.id) : undefined)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                      item.special
                        ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          item.special ? "bg-gradient-to-r from-yellow-500 to-orange-500" : "bg-white/10"
                        }`}
                      >
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white font-medium">{item.label}</span>
                      {item.badge && (
                        <Badge
                          variant={typeof item.badge === "string" ? "secondary" : "destructive"}
                          className={`text-xs ${
                            typeof item.badge === "string"
                              ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                              : "bg-red-500"
                          }`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    {item.hasSubmenu && (
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 transition-transform ${
                          expandedSection === item.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Submenu */}
                  {item.hasSubmenu && item.submenu && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedSection === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-6 mt-2 space-y-1">
                        {item.submenu.map((subItem, index) => (
                          <button
                            key={index}
                            className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <subItem.icon className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-300 text-sm">{subItem.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Settings & Theme Toggle */}
          <div className="p-4 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  {isDarkMode ? <Moon className="h-4 w-4 text-white" /> : <Sun className="h-4 w-4 text-white" />}
                </div>
                <span className="text-white font-medium">Dark Mode</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-3">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.label}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <social.icon className={`h-4 w-4 ${social.color}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Settings & Logout */}
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors">
                <Settings className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">Settings</span>
                <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
              </button>
              <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-colors">
                <HelpCircle className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">Help & Support</span>
                <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
              </button>
              <button className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-red-500/20 transition-colors text-red-400">
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
