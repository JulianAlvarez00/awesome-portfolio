'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Instagram, Twitter, Codepen, AtSign } from 'lucide-react'

export default function Component() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] font-sans">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-[300px_1fr] gap-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-[#ccd6f6]">JulianAlvarez</h1>
            <h2 className="text-2xl text-[#64ffda]">DevOps Trainee</h2>
          </div>
          
          <p className="text-sm">
            Former Product Owner transitioning to DevOps and SysAdmin enthusiast. 
            <br />
            Currently working on a project to automate the deployment of a Kubernetes cluster.
          </p>

          <nav className="space-y-4 text-sm">
            <button
              onClick={() => setActiveSection('about')}
              className={`block w-full text-left px-4 py-2 border-l-2 hover:text-[#64ffda] transition-colors ${
                activeSection === 'about' ? 'border-[#64ffda] text-[#64ffda]' : 'border-transparent'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => setActiveSection('experience')}
              className={`block w-full text-left px-4 py-2 border-l-2 hover:text-[#64ffda] transition-colors ${
                activeSection === 'experience' ? 'border-[#64ffda] text-[#64ffda]' : 'border-transparent'
              }`}
            >
              EXPERIENCE
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`block w-full text-left px-4 py-2 border-l-2 hover:text-[#64ffda] transition-colors ${
                activeSection === 'projects' ? 'border-[#64ffda] text-[#64ffda]' : 'border-transparent'
              }`}
            >
              PROJECTS
            </button>
          </nav>

          <div className="flex gap-4 pt-8">
            <Link href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <Codepen className="w-5 h-5" />
              <span className="sr-only">CodePen</span>
            </Link>
            <Link href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <AtSign className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <main className="space-y-24">
          {activeSection === 'about' && (
            <div className="space-y-4">
              <p>
                Coming from a Product Owner background where I bridged business and development teams, I discovered my true passion lies in the technical side of software delivery. My transition journey began with diving deep into DevOps practices and infrastructure automation. Through hands-on projects and continuous learning, I've been building expertise in{' '}
                <Link href="#" className="text-[#64ffda] hover:underline">
                  containerization
                </Link>
                , {' '}
                <Link href="#" className="text-[#64ffda] hover:underline">
                  CI/CD pipelines
                </Link>
                , {' '}
                <Link href="#" className="text-[#64ffda] hover:underline">
                  Kubernetes
                </Link>
                , and{' '}
                <Link href="#" className="text-[#64ffda] hover:underline">
                  cloud technologies
                </Link>
                .
              </p>
              <p>
                My main focus these days is building accessible user interfaces for our customers at{' '}
                <Link href="#" className="text-[#64ffda] hover:underline">
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
                  <h3 className="text-xl text-[#ccd6f6]">DevOps Trainee, CRM · Willdom LLC ↗</h3>
                  <span className="text-sm">2024 — PRESENT</span>
                </div>
                <p className="text-sm">
                  Assist in implementing and maintaining CI/CD pipelines, container orchestration, and infrastructure automation. 
                  Collaborate with development teams to streamline deployment processes, monitor system performance, and improve 
                  operational efficiency using modern DevOps tools and practices.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 text-xs rounded bg-[#112240] text-[#64ffda]">Linux</span>
                  <span className="px-3 py-1 text-xs rounded bg-[#112240] text-[#64ffda]">Kubernetes</span>
                  <span className="px-3 py-1 text-xs rounded bg-[#112240] text-[#64ffda]">Docker</span>
                  <span className="px-3 py-1 text-xs rounded bg-[#112240] text-[#64ffda]">CI/CD</span>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="grid gap-8">
              <div className="p-6 rounded-lg bg-[#112240] space-y-4">
                <h3 className="text-xl text-[#ccd6f6]">Portfolio site on Minikube</h3>
                <p>A personal portfolio website deployed on local Kubernetes cluster using Minikube, showcasing modern web development and containerization practices.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-sm text-[#64ffda]">Kubernetes</span>
                  <span className="text-sm text-[#64ffda]">Next.js</span>
                  <span className="text-sm text-[#64ffda]">Docker</span>
                  <span className="text-sm text-[#64ffda]">Github Copilot</span>
                  
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}