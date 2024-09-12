'use client'

import React from 'react'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export function ComponentsLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      {/* Footer can be added here if needed */}
    </div>
  )
}