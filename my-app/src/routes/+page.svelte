<script>
    import Mainlink from "../lib/mainlink/Mainlink.svelte";
	import gsap from 'gsap';
	import { onMount } from 'svelte';


	onMount(() => {
		
	});
    
</script>
<div class="container">
    <section class="container--inner"> 
        <article class="hero">
            <p>
                The chief enemy of creativity is good sense.
             </p>
        </article>
        <article class="about">
            <h2>My digital "garden"</h2>
            <p>
                The purpose of this site is to gather information, it doesnt need to be usefull. Just explore, and find new things.
             </p>
        </article>
        <article class="acces">
            <h2>Is this site accessible?</h2>
            <p>
                Its a garden, sometimes i clean it up and it is accesible. The other time im not fully done.
             </p>
        </article>
    </section>
    <section class="container--inner"> 
        <article >
            <h2>Discover my mind</h2>
            <div class="grid">
                <article>
                    <h3>One</h3>
                    <p>
                        the same; identical.
                    </p>
                    <Mainlink title="Click" alt="one" href="one"/>
                </article>
                <article>
                    <h3>Two</h3>
                    <p>
                        equivalent to the sum of one and one; one less than three;
                    </p>
                    <Mainlink title="Click" alt="two" href="two"/>
                </article>
                <article>
                    <h3>Three</h3>
                    <p>
                        equivalent to the sum of one and two; one more than two;
                    </p>
                    <Mainlink title="Click" alt="Three" href="three"/>
                </article>
                <article>
                    <h3>Four</h3>
                    <p>
                        equivalent to the product of two and two; one more than three, or six less than ten; 4.
                    </p>
                    <Mainlink title="Click" alt="Four" href="four"/>
                </article>
                <article>
                    <h3>Five</h3>
                    <p>
                        equivalent to the sum of two and three; one more than four, or half of ten; 5.
                    </p>
                    <Mainlink title="Click" alt="Five" href="five"/>
                </article>
            </div>
        </article>
        <article>
            <h2>My projects on github</h2>
            <div class="grid">
                <article>
                    <h3>The client in next.js (jaar 2)</h3>
                    <p>
                        A website for Mediahuis in next.js
                    </p>
                    <Mainlink title="Explore" alt="Github repo mediahuis in next.js" href="https://github.com/TomDeeterink1/mediahuis-in-next"/>
                </article>
                <article>
                    <h3>The client website (jaar 2)</h3>
                    <p>
                        A website for Mediahuis 
                    </p>
                    <Mainlink title="Explore" alt="Github repo mediahuis" href="https://github.com/fdnd-task/the-client-website"/>
                </article>
                <article>
                    <h3>We love web (jaar 1)</h3>
                    <p>
                        A website for We love Web
                    </p>
                    <Mainlink title="Explore" alt="Github repo we love web" href="https://github.com/TomDeeterink1/we-love-web-site"/>
                </article>
                <article>
                    <h3>Oba (jaar 1)</h3>
                    <p>
                        A website for OBA amsterdam
                    </p>
                    <Mainlink title="Explore" alt="Github repo OBA amsterdam" href="https://github.com/TomDeeterink1/pleasurable-ui-team-oba"/>
                </article>

            </div>
        </article>
        <article >
            <h2>We love web sessies</h2>
            <div class="grid">
                <article >
                    <h3>We love web (jaar 2)</h3>
                    <p>
                        Nicolas Garnier,About animations
                    </p>
                    <Mainlink title="Click" alt="Go to page" href="/welovewebone"/>
                </article>
                <article >
                    <h3>We love web (jaar 2)</h3>
                    <p>
                        Vasilis van Gemert
                    </p>
                    <Mainlink title="Click" alt="Go to page" href="/welovewebtwo"/>
                </article>
            </div>
        </article>
    </section>
    
    
</div>

<style>
    header{
        scroll-snap-align: center;
        display: none;
    }

    .container{
        padding-top: 4rem;
        display: flex;
        gap: 6rem;
        flex-direction: row;
        align-items: flex-start;
        @media only screen and (max-width: 600px) {
            flex-direction: column;
            gap: 0px;
        }
    }

    .container--inner{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    @media only screen and (min-width: 1000px) {
        .container--inner:nth-child(1){
        position: fixed;
        width: 300px;
    }

    .container--inner:nth-child(2){
        position: relative;
        width: 100%;
        margin-left: 400px;
    }
}


    .container--inner:nth-child(2) h2{
        font-size: 3rem;
        font-family: 'Opensans' , sans-serif;
        font-weight: 700;
        font-style: normal;
        @media only screen and (max-width: 600px) {
            font-size: 2rem;
        }
    }

    .container .container--inner .hero{
        padding: 2rem;
        background-color: var(--funky-one);
        color: var(--light);
    }

    .container .container--inner .about{
        padding: 2rem;
        background-color: var(--funky-two);
        color: var(--light);
    }

    .container .container--inner .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        @media only screen and (max-width: 600px) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(1fr, 1fr);
        }
    }

    .container .container--inner .acces{
        background-color: var(--funky-three);
        padding: 2rem;
        color: var(--light);
        
    }

    .container .container--inner .grid article{
        display: flex;
        flex-direction: column;
        gap: 0em;
        align-items: flex-start;
        @media only screen and (max-width: 600px) {
            border-bottom: 1px solid  var(--secondary);
        }
    }
</style>