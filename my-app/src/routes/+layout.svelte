<script>
    import Mainlink from "../lib/mainlink/Mainlink.svelte";
    import gsap from 'gsap';
    // import { onMount } from 'svelte';

    // onMount(() => {
    //     // Define color schemes for each season
    //     const colors = {
    //         herfst: ["#95160b", "#D9831A", "#F2AB27"],
    //         winter: ["#17007c", "#97cdff", "#129bb8"],
    //         lente: ["#5e8d5a", "#f68f3c", "#ee6f68"],
    //         zomer: ["#ff4e50", "#fc913a", "#f9d62e"]
    //     };

    //     const shadows = {
    //         herfst: ["6px 6px 0px 0px rgba(149, 22, 11, 0.4)", "6px 6px 0px 0px rgba(217, 131, 26, 0.4)", "6px 6px 0px 0px rgba(242, 171, 39, 0.4)"],
    //         winter: ["6px 6px 0px 0px rgba(23, 0, 124, 0.4)", "6px 6px 0px 0px rgba(151, 205, 255, 0.4)", "6px 6px 0px 0px rgba(18, 155, 184, 0.4)"],
    //         lente: ["6px 6px 0px 0px rgba(94, 141, 90, 0.4)", "6px 6px 0px 0px rgba(246, 143, 60, 0.4)", "6px 6px 0px 0px rgba(238, 111, 104, 0.4)"],
    //         zomer: ["6px 6px 0px 0px rgba(255, 78, 80, 0.4)", "6px 6px 0px 0px rgba(252, 145, 58, 0.4)", "6px 6px 0px 0px rgba(249, 214, 46, 0.4)"]
    //     };

    //     // Function to determine the current season
    //     function getSeason() {
    //         const today = new Date();
    //         const month = today.getMonth() + 1; // Months are 0-based
    //         const day = today.getDate();

    //         if ((month === 3 && day >= 21) || (month > 3 && month < 6) || (month === 6 && day <= 20)) {
    //             return 'lente'; // Spring
    //         } else if ((month === 6 && day >= 21) || (month > 6 && month < 9) || (month === 9 && day <= 20)) {
    //             return 'zomer'; // Summer
    //         } else if ((month === 9 && day >= 21) || (month > 9 && month < 12) || (month === 12 && day <= 20)) {
    //             return 'herfst'; // Autumn
    //         } else {
    //             return 'winter'; // Winter
    //         }
    //     }

    //      // Apply hover effects based on the current season
    //     function setHoverEffects(seasonColors, seasonShadows) {
    //         const buttons = document.querySelectorAll(".season-button");
    //         const heroitems = document.querySelectorAll(".hero, .about ,.acces");

    //         heroitems.forEach((heroitem, index) => {
    //             const backgroundcolor = seasonColors[index % seasonColors.length];

    //             heroitem.style.backgroundColor = backgroundcolor;
    //         })
    //         buttons.forEach((button, index) => {
    //             const hoverColor = seasonColors[index % seasonColors.length];
    //             const hoverShadow = seasonShadows[index % seasonShadows.length];

    //             // Set inline styles for hover effect
    //             button.addEventListener("mouseover", () => {
    //                 button.style.backgroundColor = hoverColor;
    //                 button.style.boxShadow = hoverShadow;
    //             });
    //             button.addEventListener("mouseout", () => {
    //                 button.style.backgroundColor = ""; // Reset background
    //                 button.style.boxShadow = ""; // Reset shadow
    //             });
    //         });
    //     }

    //     // Determine the current season and apply hover effects accordingly
    //     const currentSeason = getSeason();
    //     setHoverEffects(colors[currentSeason], shadows[currentSeason]);
    // });
</script>

<header>
    <div class="container">
        <nav class="main-menu">
            <ul>
                <li><Mainlink title="Home" alt="go to homepage" href="/"/></li>
            </ul>
        </nav>
    </div>
</header>
<style>
    header{
        position: sticky;
        top: 0;
        background-color: white;
    }
   .container .main-menu{
    padding: 1rem 0rem;
   }

   .container .main-menu li{
    list-style-type: none
   }

   .container .main-menu ul{
    padding-inline-start: 0px;
   }

</style>
<slot></slot>
