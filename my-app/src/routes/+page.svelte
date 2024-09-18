<div class="container">
    <article class="hero">
        <h2>Welcome to my digital garden</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Perferendis totam suscipit deleniti velit commodi accusantium et 
            tenetur culpa architecto odio necessitatibus, blanditiis sed harum possimus molestiae,
             quae assumenda ea dolore?
         </p>
    </article>
    <article >
        <h2>Discover</h2>
        <div class="grid">
            <article>
                <h3>Test</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perferendis totam suscipit deleniti velit commodi accusantium et 
                </p>
                <a href="#"> Laat maar zien</a>
            </article>
            <article>
                <h3>Test</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perferendis totam suscipit deleniti velit commodi accusantium et 
                </p>
                <a href="#"> Laat maar zien</a>
            </article>
            <article>
                <h3>Test</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perferendis totam suscipit deleniti velit commodi accusantium et 
                </p>
                <a href="#"> Laat maar zien</a>
            </article>
            <article>
                <h3>Test</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perferendis totam suscipit deleniti velit commodi accusantium et 
                </p>
                <a href="#"> Laat maar zien</a>
            </article>
            <article>
                <h3>Test</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perferendis totam suscipit deleniti velit commodi accusantium et 
                </p>
                <a href="#"> Laat maar zien</a>
            </article>
        </div>
    </article>
</div>

<style>
    .container{
        padding-top: 4rem;
        display: flex;
        gap: 6rem;
        flex-direction: row;
    }

    .container .hero{
        padding: 1rem;
        background-color: var(--primary);
    }

    .container .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(17, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
</style>