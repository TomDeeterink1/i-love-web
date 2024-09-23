<div class="container">
    <div class="container--inner"> 
        <article class="hero">
            <p>
                The chief enemy of creativity is good sense.
             </p>
        </article>
        <article class="about">
            <h2>My digital "garden"</h2>
            <p>
                I dont even know what im supposed tot do here, so there is no purpose. You will find nothing usefull here.
                Discover my work, or donot.
             </p>
        </article>
        <article class="acces">
            <h2>Is this site accessible?</h2>
            <p>
                No, not even close. I have build this on a desktop , en it will stay this way. Most of what i make is mobile first. Just watch this on a desktop got damn it.
             </p>
        </article>
    </div>
    <div class="container--inner"> 
        <article >
            <h2>Discover</h2>
            <div class="grid">
                <article>
                    <h3>One</h3>
                    <p>
                        the same; identical.
                    </p>
                    <a href="one"> Click</a>
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
            </div>
        </article>
    </div>
    
    
</div>

<style>
    header{
        display: none;
    }
    .container{
        padding-top: 4rem;
        display: flex;
        gap: 6rem;
        flex-direction: row;
        align-items: flex-start;
    }

    .container--inner{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .container .container--inner .hero{
        padding: 2rem;
        background-color: var(--dark);
        color: var(--light);
        transition: 0.4s ease-out;
        transform: scale(100%);
    }

    .container .container--inner .about{
        padding: 2rem;
        background-color: var(--secondary);
        color: var(--light);
        transition: 0.4s ease-out;
        transform: scale(100%);
    }



    .container .container--inner .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(17, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
</style>