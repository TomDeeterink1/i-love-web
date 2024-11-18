<script>
    import Mainlink from "../../lib/mainlink/Mainlink.svelte";
</script>
<div class="container">
    <div class="container--inner"> 
        <h1>Experiencing with some fonts</h1>
        <hr>
        <h2 class="f-one">Font style one</h2>
     </div>   
</div>
<style>
   .container--inner .f-one{
        font-family: 'Opensans' , sans-serif;
        font-variation-settings: 'wdth' 75 , 'ital';
        @media only screen and (max-width: 600px) {
            font-size: 2rem;
        }
   }
</style>
