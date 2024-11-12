'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Twitter, Codepen, AtSign } from 'lucide-react'
import ThemeSwitcher from './components/ThemeSwitcher'

export default function Component() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-[#0a192f] dark:bg-gray-900 text-[#8892b0] dark:text-gray-400 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-[300px_1fr] gap-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-[#ccd6f6] dark:text-white">JulianAlvarez</h1>
            <h2 className="text-2xl text-[#64ffda] dark:text-emerald-400">DevOps Trainee</h2>
          </div>
          
          <p className="text-sm">
            Former Product Owner transitioning to DevOps and SysAdmin enthusiast. 
            <br />
            Currently working on a project to automate the deployment of a Kubernetes cluster.
          </p>

          <nav className="space-y-4 text-sm">
            <button
              onClick={() => setActiveSection('about')}
              className={`block w-full text-left px-4 py-2 border-l-2 hover:text-[#64ffda] dark:hover:text-emerald-400 transition-colors ${
                activeSection === 'about' 
                  ? 'border-[#64ffda] dark:border-emerald-400 text-[#64ffda] dark:text-emerald-400' 
                  : 'border-transparent'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => setActiveSection('experience')}
              className={`block w-full text-left px-4 py-2 border-l-2 hover:text-[#64ffda] dark:hover:text-emerald-400 transition-colors ${
                activeSection === 'experience' 
                  ? 'border-[#64ffda] dark:border-emerald-400 text-[#64ffda] dark:text-emerald-400' 
                  : 'border-transparent'
              }`}
            >
              EXPERIENCE
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`block w-full text-left px-4 py-2 border-l-2 hover:text-[#64ffda] dark:hover:text-emerald-400 transition-colors ${
                activeSection === 'projects' 
                  ? 'border-[#64ffda] dark:border-emerald-400 text-[#64ffda] dark:text-emerald-400' 
                  : 'border-transparent'
              }`}
            >
              PROJECTS
            </button>
          </nav>

          <div className="flex gap-4 pt-8">
            {['Github', 'Linkedin', 'Codepen', 'Instagram', 'Twitter', 'AtSign'].map((icon) => (
              <Link 
                key={icon} 
                href="#" 
                className="text-[#8892b0] dark:text-gray-400 hover:text-[#64ffda] dark:hover:text-emerald-400 transition-colors"
              >
                {/* Los componentes de iconos se mantienen igual */}
                <span className="sr-only">{icon}</span>
              </Link>
            ))}
          </div>
        </div>

        <main className="space-y-24">
          {activeSection === 'about' && (
            <div className="space-y-4">
              <p>
                Coming from a Product Owner background where I bridged business and development teams, I discovered my true passion lies in the technical side of software delivery. My transition journey began with diving deep into DevOps practices and infrastructure automation. Through hands-on projects and continuous learning, I have been building expertise in{' '}
                <Link href="#" className="text-[#64ffda] dark:text-emerald-400 hover:underline">
                  containerization
                </Link>
                {/* Resto de los links mantienen el mismo patrón */}
                .
              </p>
              <p>
                My main focus these days is building accessible user interfaces for our customers at{' '}
                <Link href="#" className="text-[#64ffda] dark:text-emerald-400 hover:underline">
                  Klaviyo
                </Link>
                .
              </p>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl text-[#ccd6f6] dark:text-white">DevOps Trainee, CRM · Willdom LLC ↗</h3>
                  <span className="text-sm">2024 — PRESENT</span>
                </div>
                <p className="text-sm">
                  Assist in implementing and maintaining CI/CD pipelines, container orchestration, and infrastructure automation. 
                  Collaborate with development teams to streamline deployment processes, monitor system performance, and improve 
                  operational efficiency using modern DevOps tools and practices.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {['Linux', 'Kubernetes', 'Docker', 'CI/CD'].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded bg-[#112240] dark:bg-gray-800 text-[#64ffda] dark:text-emerald-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="grid gap-8">
              <div className="p-6 rounded-lg bg-[#112240] dark:bg-gray-800 space-y-4">
                <h3 className="text-xl text-[#ccd6f6] dark:text-white">Portfolio site on Minikube</h3>
                <p>A personal portfolio website deployed on local Kubernetes cluster using Minikube, showcasing modern web development and containerization practices.</p>
                <div className="flex gap-2 flex-wrap">
                  {['Kubernetes', 'Next.js', 'Docker', 'Github Copilot'].map((tech) => (
                    <span key={tech} className="text-sm text-[#64ffda] dark:text-emerald-400">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <ThemeSwitcher />
    </div>
  )
}