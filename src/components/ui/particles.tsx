'use client'

import React, { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { useMousePosition } from '@/lib/util/mouse'

interface ParticlesProps {
  className?: string
  quantity ?: number
  staticity?: number
  ease     ?: number
  refresh  ?: boolean

  path_name?: string
}

export default function Particles({
  className = '',
  quantity  = 30,
  staticity = 40,
  ease      = 50,
  refresh   = false,
  path_name,
}: ParticlesProps) {
  const canvasRef          = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context            = useRef<CanvasRenderingContext2D | null>(null)
  const circles            = useRef<any[]>([])
  const mousePosition      = useMousePosition()
  const quantityRef        = useRef(quantity);
  const mouse              = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize         = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr                = typeof window !== 'undefined' ? window.devicePixelRatio : 1

  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext('2d')
    }
    initCanvas()
    animate()
    window.addEventListener('resize', initCanvas)

    return () => {
      window.removeEventListener('resize', initCanvas)
    }
  }, [])

  useEffect(() => {
    onMouseMove()
  }, [mousePosition.x, mousePosition.y])

  useEffect(() => {
    let timer: NodeJS.Timeout
    /* These two are scroll able, redo animation is needed */
    /* My lord, wwhy would u do this to me */
    if (path_name === '/guestbook' || path_name === '/projects') {
      quantityRef.current = 1000;
      timer = setTimeout(() => {
        initCanvas()
      }, 1500) // This is like, erm, e.preventDefault() in a way
    } else {
      initCanvas()
    }

    console.log('path_name: ', path_name)
    console.log('current height: ', canvasSize.current.h)
    console.log('current width: ', canvasSize.current.w)
    console.log('current theme is: ', resolvedTheme)
    
    return () => {
      if (timer) clearTimeout(timer)
    }
    // console.log('theme: ', theme)
  }, [refresh, path_name]) // NOTE: DO NOT INCLUDE theme, the thing update inistantaneous

  const initCanvas = () => {
    resizeCanvas()
    drawParticles()
  }

  const onMouseMove = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()

      const { w, h } = canvasSize.current
      const x = mousePosition.x - rect.left - w / 2
      const y = mousePosition.y - rect.top - h / 2
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2

      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
      }
    }
  }

  type Circle = {
    x: number
    y: number
    translateX: number
    translateY: number
    size: number
    alpha: number
    targetAlpha: number
    dx: number
    dy: number
    magnetism: number
  }

  // const resizeCanvas = () => {
  //   if (canvasContainerRef.current && canvasRef.current && context.current) {
  //     circles.current.length = 0
  //     canvasSize.current.w = canvasContainerRef.current.offsetWidth
  //     canvasSize.current.h = canvasContainerRef.current.offsetHeight
  //     canvasRef.current.width = canvasSize.current.w * dpr
  //     canvasRef.current.height = canvasSize.current.h * dpr
  //     canvasRef.current.style.width = `${canvasSize.current.w}px`
  //     canvasRef.current.style.height = `${canvasSize.current.h}px`
  //     context.current.scale(dpr, dpr)
  //   }
  // }

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length         = 0
      canvasSize.current.w           = document.body.scrollWidth
      canvasSize.current.h           = document.body.scrollHeight

      /* Bugs: mobile view, reset too often? */
      if (canvasSize.current.w < 640) {
        canvasSize.current.w = canvasContainerRef.current.offsetWidth
        canvasSize.current.h = canvasContainerRef.current.offsetHeight
      }

      canvasRef.current.width        = canvasSize.current.w * dpr
      canvasRef.current.height       = canvasSize.current.h * dpr
      canvasRef.current.style.width  = `${canvasSize.current.w}px`
      canvasRef.current.style.height = `${canvasSize.current.h}px`
      context.current.scale(dpr, dpr)
    }
  }

  const circleParams = (): Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w)
    const y = Math.floor(Math.random() * canvasSize.current.h)
    const translateX = 0
    const translateY = 0
    const size = Math.floor(Math.random() * 2) + 0.1
    const alpha = 0
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
    const dx = (Math.random() - 0.5) * 0.2
    const dy = (Math.random() - 0.5) * 0.2
    const magnetism = 0.1 + Math.random() * 15 // increase to see more magnetism
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    }
  }

  const drawCircle = (circle: Circle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle
      context.current.translate(translateX, translateY)
      context.current.beginPath()
      context.current.arc(x, y, size, 0, 2 * Math.PI)

      if (resolvedTheme === 'dark') {
        context.current.fillStyle = `rgba(255, 255, 255, ${alpha})` // Color for dark theme
      } else if (resolvedTheme === 'light') {
        context.current.fillStyle = `rgba(0, 0, 128, ${alpha})` // Color for light theme
      } else if (resolvedTheme === undefined) {
        context.current.fillStyle = `rgba(255, 255, 255, ${alpha})` // Color for dark theme (default)
      }

      context.current.fill()
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (!update) {
        circles.current.push(circle)
      }
    }
  }

  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
    }
  }

  const drawParticles = () => {
    clearContext()
    let particleCount = quantityRef.current
    if (resolvedTheme === 'light') {
      particleCount = 1000
    }
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams()
      drawCircle(circle)
    }
  }

  const remapValue = (value: number, start1: number, end1: number, start2: number, end2: number): number => {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
    return remapped > 0 ? remapped : 0
  }

  const animate = () => {
    // Update the canvas height to match the document height
    if (canvasRef.current && canvasContainerRef.current) {
      const documentHeight = document.body.offsetHeight
      if (documentHeight !== canvasSize.current.h) {
        canvasSize.current.h = document.body.scrollHeight
        canvasRef.current.height = canvasSize.current.h * dpr
        canvasRef.current.style.height = `${canvasSize.current.h}px`
      }
    }

    clearContext()
    circles.current.forEach((circle: Circle, i: number) => {
      // Handle the alpha value
      const edge = [
        circle.x + circle.translateX - circle.size, // distance from left edge
        canvasSize.current.w - circle.x - circle.translateX - circle.size, // distance from right edge
        circle.y + circle.translateY - circle.size, // distance from top edge
        canvasSize.current.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
      ]
      const closestEdge = edge.reduce((a, b) => Math.min(a, b))
      const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2))
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge
      }
      circle.x += circle.dx
      circle.y += circle.dy
      circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease
      circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease
      // circle gets out of the canvas
      if (circle.x < -circle.size || circle.x > canvasSize.current.w + circle.size || circle.y < -circle.size || circle.y > canvasSize.current.h + circle.size) {
        // remove the circle from the array
        circles.current.splice(i, 1)
        // create a new circle
        const newCircle = circleParams()
        drawCircle(newCircle)
        // update the circle position
      } else {
        drawCircle(
          {
            ...circle,
            x: circle.x,
            y: circle.y,
            translateX: circle.translateX,
            translateY: circle.translateY,
            alpha: circle.alpha,
          },
          true
        )
      }
    })
    window.requestAnimationFrame(animate)
  }

  return (
    <div className={'absolute inset-0 -z-50' + className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
