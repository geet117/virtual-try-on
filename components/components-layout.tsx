'use client'

import React from 'react'
import { ComponentsHeader } from './components-header'
import { ComponentsFooter } from './components-footer'

interface LayoutProps {
  children: React.ReactNode
}

export function ComponentsLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ComponentsHeader />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <ComponentsFooter />
    </div>
  )
}