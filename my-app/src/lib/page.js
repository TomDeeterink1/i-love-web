
export function Seasonstyles() {
    function applySeasonalStyles() {
        const colors = {
            herfst: ["#95160b", "#D9831A", "#F2AB27"],
            winter: ["#17007c", "#97cdff", "#129bb8"],
            lente: ["#5e8d5a", "#f68f3c", "#ee6f68"],
            zomer: ["#ff4e50", "#fc913a", "#f9d62e"]
        };
    
        const shadows = {
            herfst: ["6px 6px 0px 0px rgba(149, 22, 11, 0.4)", "6px 6px 0px 0px rgba(217, 131, 26, 0.4)", "6px 6px 0px 0px rgba(242, 171, 39, 0.4)"],
            winter: ["6px 6px 0px 0px rgba(23, 0, 124, 0.4)", "6px 6px 0px 0px rgba(151, 205, 255, 0.4)", "6px 6px 0px 0px rgba(18, 155, 184, 0.4)"],
            lente: ["6px 6px 0px 0px rgba(94, 141, 90, 0.4)", "6px 6px 0px 0px rgba(246, 143, 60, 0.4)", "6px 6px 0px 0px rgba(238, 111, 104, 0.4)"],
            zomer: ["6px 6px 0px 0px rgba(255, 78, 80, 0.4)", "6px 6px 0px 0px rgba(252, 145, 58, 0.4)", "6px 6px 0px 0px rgba(249, 214, 46, 0.4)"]
        };
    
        function getSeason() {
            const today = new Date();
            const month = today.getMonth() + 1;
            const day = today.getDate();
    
            if ((month === 3 && day >= 21) || (month > 3 && month < 6) || (month === 6 && day <= 20)) {
                return 'lente'; // Spring
            } else if ((month === 6 && day >= 21) || (month > 6 && month < 9) || (month === 9 && day <= 20)) {
                return 'zomer'; // Summer
            } else if ((month === 9 && day >= 21) || (month > 9 && month < 12) || (month === 12 && day <= 20)) {
                return 'herfst'; // Autumn
            } else {
                return 'winter'; // Winter
            }
        }
    
        const currentSeason = getSeason();
    
    
        function setEffects(seasonColors, seasonShadows) {
            const buttons = document.querySelectorAll(".season-button");
            buttons.forEach((button, index) => {
                const hoverColor = seasonColors[index % seasonColors.length];
                const hoverShadow = seasonShadows[index % seasonShadows.length];
                button.addEventListener("mouseover", () => {
                    button.style.backgroundColor = hoverColor;
                    button.style.boxShadow = hoverShadow;
                });
                button.addEventListener("mouseout", () => {
                    button.style.backgroundColor = "";
                    button.style.boxShadow = "";
                });
            });
        }
    
        function setBackgroundColor(seasonColors){
            const heroitems = document.querySelectorAll(".hero, .about , .acces");
            heroitems.forEach((heroitem, index) => {
                const backgroundcolor = seasonColors[index % seasonColors.length];
                heroitem.style.backgroundColor = backgroundcolor;
            })
        }
    
        setEffects(colors[currentSeason], shadows[currentSeason]);
        setBackgroundColor((colors[currentSeason]));
    }
    
    applySeasonalStyles();
    
}

