
export function Getcoloronviewport() {
   function givecolor() {
    const containers = document.querySelectorAll(".container--inner");
     
    containers.forEach(container => {
        gsap.to(container, {
            backgroundColor: "red",
            duration: 1,
            scrollTrigger:{
                trigger: container,
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
        });
    });
   }
   givecolor();
}