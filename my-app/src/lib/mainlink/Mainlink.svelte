<script>
     export let title = ""; // Changes the label text
     export let href = "#"; // Changes the href
     export let alt = ""; // Changes the alt text
</script>

<a {href} {alt}  class="season-button hover">{title}</a>

<style>
   .season-button{
        color: var(--dark);
        transition: ease-out 0.2s;
        text-decoration: none;
        border-bottom: 1px solid var(--dark);
        font-size: 1.15rem;
        padding: 1rem 2rem;
   }

   .season-button:hover{
        transform: scale(115%)  translateX(8%) rotate(-2deg);
        transition: ease-in 0.2s;
        color: var(--light);
        background-color: var(--funky-one);
        box-shadow: 6px 6px 0px 0px var(--funky-three);
        border: none;
   }

   .season-button:focus{
        transform: scale(115%)  translateX(8%) rotate(-2deg);
        transition: ease-in 0.2s;
        color: var(--light);
        background-color: var(--funky-one);
        box-shadow: 6px 6px 0px 0px var(--funky-three);
        border: none;
   }
</style>