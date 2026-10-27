"use client"

import { useEffect, useState } from "react"

export function CursorFollower() {
    // Aca hare el calculo para la posicion actual del cursor
    const [position, setPosition] = useState({ x:0, y:0 }) //La posicion inicial se establece como 0 horizontal y verticalmente

    useEffect(() => {
        function handleMouseMove(event: MouseEvent){
            setPosition({ x:event.clientX, y:event.clientY})
        }

        window.addEventListener("mousemove", handleMouseMove)
        // Dejara de escuchar al desmontarse
        return()=> window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div 
            className="pointer-events-none fixed top-0 left-0 z-[9999] size-4 bg-primary"
            style={{ transform: `translate(${position.x}px, ${position.y}px)`}} //Era un espacio en blanco o una mala escritura de algo que no me he dado cuenta a la vista
        />
    )
}