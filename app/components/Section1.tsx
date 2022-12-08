import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Section1() {
    useEffect(() => {
        const tl = gsap.timeline({
            delay: 0.5,
        })
        tl.fromTo(".section1-text", {opacity:0}, {opacity:1, duration: 1})
    }, [])
    return (
        <div className="section1">
            <div className="section1-text">
                <h1>Avec Recif, découvrez des pièces uniques et éthiques grâce à nos créateurs</h1>
            </div>
            <span className="img1"></span>
            <span className="img2">Nous avons conçu une plateforme de vente en ligne responsable recensant les créateurs textile</span>
            <span className="img3"></span>
            <span className="img4"></span>
        </div>
    )
}