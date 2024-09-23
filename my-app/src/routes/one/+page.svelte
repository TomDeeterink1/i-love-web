<div class="container">
    <h1>Random tiles, just reload</h1>
    <div class="container--inner"> 
       <div class= tile ></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile ></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile ></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile ></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile ></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile ></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile ></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile ></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
       <div class= tile></div>
    </div>
    <h2>The same, identical</h2>
    <p>All of these colors, although they seems to be random. Are pre defined and are always the same.</p>
</div>


<style>
    .container--inner {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    }

    .container--inner div{
        background-color: red;
        height: 80px;

    }

</style>

<script>
    import { onMount } from 'svelte';

    // Define the hex colors
    const colors = [
        "9DE5A4", "FFBABA", "3D5E85", "EE9DF0", 
        "656262", "ECEE89", "A2FAE5", "272222", 
        "FB8888", "B7FF95", "E385CF", "B4CCF0"
    ];

    // Function to generate a random color
    function generateNewColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return '#' + colors[randomIndex];
    }


    // Function to assign a random color to each tile
    function cardcolor() {
        const cardElements = document.querySelectorAll(".tile");
        cardElements.forEach(function(card) {
            card.style.background = generateNewColor();
        });
    }

    // Run the cardcolor function once the component has mounted
    onMount(() => {
        cardcolor();
    });
</script>