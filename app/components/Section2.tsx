import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Section2() {
    const phoneRef = useRef(null);
    // useEffect(() => {
    //     const tl = gsap.timeline({
    //         delay: 0.5,
    //     })
    //     tl.fromTo(".phoneImg", {y:300}, {y:0, duration: 1})
    // }, [])

    useEffect(() => {
        gsap.fromTo(".phoneImg", {y:300}, {y:0, duration: 1, delay: 0.5})
        gsap.set(phoneRef.current, {scale: 1})
        function intro(){
            const tl = gsap.timeline();
            tl.fromTo(phoneRef.current, {y:200}, {y:0, duration:0});
            return tl;
        }
        function stopTrigger() {
            const tl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: phoneRef.current,
                    start: "top top",
                    end: "+=2000",
                    pin: true,
                    scrub: true,
                },
            });
            return tl;
        }

        const master = gsap.timeline();
        master.add(intro());
        master.add(stopTrigger());
    }, [])
    
    return (
        <div className="section2" ref={phoneRef}>
            <div className="phoneImg"></div>
        </div>
    )
}