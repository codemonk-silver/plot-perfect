// app/dashboard/settings/page.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Bell, Shield, Globe, Moon, Sun, Laptop } from "lucide-react"
import { Button } from "../../components/ui/Button"
import { Input } from "../../components/ui/Input"
import { GlassCard } from "../../components/ui/GlassCard"
import { fadeInUp } from "../../lib/animations"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [darkMode, setDarkMode] = useState("system")

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "preferences", label: "Preferences", icon: Globe },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">
          Settings
        </h1>
        <p className="text-slate-500 mt-1">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                activeTab === tab.id
                  ? "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          {activeTab === "profile" && (
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-6">
              <GlassCard intensity="low" className="p-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">First Name</label>
                    <Input defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">Last Name</label>
                    <Input defaultValue="Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">Email</label>
                    <Input defaultValue="john@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">Phone</label>
                    <Input defaultValue="+1 (555) 123-4567" />
                  </div>
                </div>
              </GlassCard>

              <GlassCard intensity="low" className="p-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Profile Picture
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <div className="space-y-2">
                    <Button variant="outline">Upload New</Button>
                    <p className="text-xs text-slate-500">JPG, PNG or GIF. Max 2MB.</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {activeTab === "notifications" && (
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-4">
              {[
                { label: "New property listings", desc: "Get notified when new properties match your saved searches", default: true },
                { label: "Price drops", desc: "Receive alerts when saved properties reduce their price", default: true },
                { label: "Tour reminders", desc: "Reminders for upcoming property tours", default: true },
                { label: "Market reports", desc: "Weekly market insights for your saved areas", default: false },
                { label: "Promotional emails", desc: "Special offers and featured properties", default: false },
              ].map((item) => (
                <GlassCard key={item.label} intensity="low" className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-slate-900 dark:text-white">{item.label}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked={item.default}
                      className="w-5 h-5 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          )}

          {activeTab === "preferences" && (
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-6">
              <GlassCard intensity="low" className="p-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Appearance
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: "light", icon: Sun, label: "Light" },
                    { id: "dark", icon: Moon, label: "Dark" },
                    { id: "system", icon: Laptop, label: "System" },
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setDarkMode(mode.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        darkMode === mode.id
                          ? "border-amber-500 bg-amber-50 dark:bg-amber-950"
                          : "border-slate-200 dark:border-slate-800 hover:border-slate-300"
                      }`}
                    >
                      <mode.icon className="w-6 h-6 mx-auto mb-2 text-slate-600 dark:text-slate-400" />
                      <span className="text-sm font-medium">{mode.label}</span>
                    </button>
                  ))}
                </div>
              </GlassCard>

              <GlassCard intensity="low" className="p-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Regional
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">Currency</label>
                    <select className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">Language</label>
                    <select className="w-full h-10 px-3 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {activeTab === "security" && (
            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="space-y-6">
              <GlassCard intensity="low" className="p-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Change Password
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">Current Password</label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">New Password</label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">Confirm New Password</label>
                    <Input type="password" />
                  </div>
                  <Button className="bg-amber-500 hover:bg-amber-600">Update Password</Button>
                </div>
              </GlassCard>

              <GlassCard intensity="low" className="p-6">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Two-Factor Authentication
                </h2>
                <p className="text-slate-500 mb-4">Add an extra layer of security to your account</p>
                <Button variant="outline">Enable 2FA</Button>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}