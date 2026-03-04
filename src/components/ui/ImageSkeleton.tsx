'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'

interface ImageSkeletonProps extends Omit<ImageProps, 'onLoad'> {
  skeletonClass?: string
}

export default function ImageSkeleton({ skeletonClass = '', className = '', ...props }: ImageSkeletonProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className={`absolute inset-0 bg-roiba-verde/5 animate-pulse ${skeletonClass}`} />
      )}
      <Image
        {...props}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
