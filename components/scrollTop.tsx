"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "./ui/button"

export function ScrollTop() {
    // Aqui hare la logica para que el boton se muestre o se oculte dependiendo la cantidad de pixeles que deslice el usuario verticalmente
    const[isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        function handleScroll () {
            setIsVisible(window.scrollY > 300) //Cuando deslice mayor a 300 px verticalmente el usuario se mostrara el boton
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll) // Esto es para que deje de escuchar cuando el componte desaparezca
    }, [])

    function scrollToTop(){
        window.scrollTo({ top:0, behavior: "smooth"})
    }

    //Condicional si es que no hay que mostrarlo que no se dibuje nada

    if (!isVisible) return null

    return(
        <Button
            size="icon"
            onClick={scrollToTop}
            className="fixed right-6 bottom-6 z-50 rounded-full shadow-lg"
        >
            <ArrowUp className="size-4"/>
        </Button>
    )
}