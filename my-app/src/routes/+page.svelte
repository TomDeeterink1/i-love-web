<script>
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
            <h2>Discover</h2>
            <div class="grid">
                <article>
                    <h3>One</h3>
                    <p>
                        the same; identical.
                    </p>
                    <a aria-label="this is a button" href="one"> Click</a>
                </article>
                <article>
                    <h3>Two</h3>
                    <p>
                        equivalent to the sum of one and one; one less than three;
                    </p>
                    <a href="two"> Click</a>
                </article>
                <article>
                    <h3>Three</h3>
                    <p>
                        equivalent to the sum of one and two; one more than two;
                    </p>
                    <a href="three"> Click</a>
                </article>
                <article>
                    <h3>Four</h3>
                    <p>
                        equivalent to the product of two and two; one more than three, or six less than ten; 4.
                    </p>
                    <a href="four"> Click</a>
                </article>
                <article>
                    <h3>Four</h3>
                    <p>
                        equivalent to the sum of two and three; one more than four, or half of ten; 5.
                    </p>
                    <a href="four"> Click</a>
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
                    <a aria-label="Github repo mediahuis in next.js" href="https://github.com/TomDeeterink1/mediahuis-in-next"> Explore</a>
                </article>
                <article>
                    <h3>The client website (jaar 2)</h3>
                    <p>
                        A website for Mediahuis 
                    </p>
                    <a aria-label="Github repo mediahuis" href="https://github.com/fdnd-task/the-client-website"> Explore</a>
                </article>
                <article>
                    <h3>We love web (jaar 1)</h3>
                    <p>
                        A website for We love Web
                    </p>
                    <a aria-label="Github repo we love web" href="https://github.com/TomDeeterink1/we-love-web-site"> Explore</a>
                </article>
                <article>
                    <h3>Oba (jaar 1)</h3>
                    <p>
                        A website for OBA amsterdam
                    </p>
                    <a aria-label="Github repo OBA amsterdam" href="https://github.com/TomDeeterink1/pleasurable-ui-team-oba"> Explore</a>
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
                    <a aria-label="We love web" href="welovewebone"> Explore</a>
                </article>
                <article >
                    <h3>We love web (jaar 2)</h3>
                    <p>
                        Dion Pieters
                    </p>
                    <a aria-label="We love web" href="welovewebone"> Explore</a>
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
        @media only screen and (max-width: 600px) {
            font-size: 2rem;
        }
    }

    .container .container--inner .hero{
        padding: 2rem;
        background-color: var(--dark);
        color: var(--light);
    }

    .container .container--inner .about{
        padding: 2rem;
        background-color: var(--accent);
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
        background-color: var(--secondary);
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

    .container .container--inner .grid article a{
        content: "Click";
        color: var(--dark);
        transition: ease-out 0.2s;
        text-decoration: none;
        border-bottom: 1px solid var(--dark);
        font-size: 1.15rem;
        padding: 1rem 2rem;
        
    }

    .container .container--inner .grid article a:hover{
        transform: scale(115%)  translateX(8%) rotate(-2deg);
        transition: ease-in 0.2s;
        color: var(--light);
        background-color: orangered;
        box-shadow: 6px 6px 0px 0px rgb(255, 170, 33);
        border-bottom: 1px solid orangered;
        
    }

    .container .container--inner .grid article a:focus{
        transform: scale(115%)  translateX(8%) rotate(-2deg);
        transition: ease-in 0.2s;
        color: var(--light);
        background-color: orangered;
        box-shadow: 6px 6px 0px 0px rgb(255, 170, 33);
        outline: none;
        border-bottom: 1px solid orangered;
    }
</style>