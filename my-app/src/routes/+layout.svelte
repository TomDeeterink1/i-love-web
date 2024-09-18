<header>
    <div class="container">
        <h1>Digital garden</h1>
        <nav class="menu">
            <ul>
                <li><a href="#">Learning journal</a></li>
                <li><a href="#">We love web</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </nav>
        <button class="open-menu"> Menu </button>
    </div>
</header>

<style>
    header{
        width: 100%;
        z-index: 99;
    }
    header .container{
        margin: 0 auto;
        max-width: 1120px;
        display: flex;
        gap: 3em;
        align-items: center;
        border-top: 2px solid orangered;
        border-bottom: 2px solid orangered;
    }

    header ul{
        display: flex;
        gap: 2em;
        padding-inline-start: 1em;
        list-style-type: none;
    }

    header ul li a{
        text-decoration: none;
        font-size: 1.25em;
        color: black;
        transition: ease-out 0.2s;
    }
    /* hover */
    header ul li a:hover{
        text-decoration: 1px underline;
        text-underline-offset: 0.5em;
        transition: ease-in 0.2s;
        color: var(--color);
    }
    
    .open-menu{
        display: none;
    }
    /* mobile menu */
    @media only screen and (max-width: 600px) {
    
    header nav{
        display: flex;
        flex-direction: row;
        position: absolute;
        background-color: var(--light);
        width: 100%;
        right: -400px;
    }
    header ul{
        display: flex;
        flex-direction: column;
        margin-top: 180px;
    }
    .slide{
        right: 0px;
    }
    .open-menu{
        display: block;
        z-index: 98;
    }
}
</style>

<script lang="js">
    import { browser } from '$app/environment';

    if (browser) {
        // Select all elements with the class 'open-menu'
        const menubuttons = document.querySelectorAll('.open-menu');

        // Define the clicker function
        const clicker = (event) => {
            
        };

        // Add event listener to each button
        menubuttons.forEach(button => {
            button.addEventListener("click", clicker);
        });
    }
</script>
