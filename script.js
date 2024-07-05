// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", function() {

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Select the container element
    const img = document.querySelector(".img");

    // GSAP timeline for the animation
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true, // Smooth animation tied to scroll
            markers: false // Optional: for debugging purposes
        }
    });

    

    // Define the animation sequence
    tl.to(img, {
        x: 500, // Move to right
        y: 260, // Move down 
        duration: 1,
        rotation: 135 // Animation duration
    })
    .to(img, {
        x: -500,
        y: 800, 
        duration: 1,
        rotation: 225,
    })
    .to(img, {
        x: 500,
        y:1400, 
        duration: 1,
        rotation: 135,
    }).to(img, {
        x: 0,
        y:1700, 
        duration: 1,
        rotation:0,
    });

});
