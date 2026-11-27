import React from 'react'

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello World!</h1>
      {children}
    </div>
  )
}