'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'
import { imageForGithub } from '@/lib/util/dummy'
import { CardHoverEffect } from '../common/HoverCard'

type GithubCardProps = {
  cols  ?: string
  height?: string
}

export default function GithubCard(props: GithubCardProps) {
  const [randomImage, setRandomImage] = useState<string>('/images/monika.png')

  useEffect(() => {
    const imageKeys = Object.keys(imageForGithub)
    const randomKey = imageKeys[Math.floor(Math.random() * imageKeys.length)]
    setRandomImage(imageForGithub[randomKey as keyof typeof imageForGithub])
  }, [])

  return (
    <>
      <CardHoverEffect className={`${props.cols ?? ''} ${props.height ?? ''}`}>
        <Link
          href="https://github.com/thienguen"
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
            'transform-gpu transition-all will-change-[outline,_transform] duration-600 active:scale-100 group-hover:scale-95'
          )}
        >
          <span aria-hidden className="pointer-events-none absolute inset-0 -z-20 transition duration-300 group-hover:blur-[3px]">
            <img
              src={randomImage}
              className="inset-0 h-full w-full object-cover object-center brightness-[1.4] transition-all will-change-[transform,_filter] duration-500 group-hover:scale-[1.15]"
              alt="github profile picture"
            />
            <span className="absolute inset-0 bg-neutral-900/50 " />
          </span>

          <span aria-hidden className="px-6 pt-6">
            <span className="flex justify-between">
              <SiGithub className="text-2xl" />
              <HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
            </span>
          </span>

          <span className="space-y-0.5 px-3 pb-3">
            <span className="block font-metropolis font-bold">github</span>
          </span>
        </Link>
      </CardHoverEffect>
    </>
  )
}
