<script>
    import Mainlink from "../../lib/mainlink/mainlink.svelte";
</script>
<div class="container">
    <div class="container--inner"> 
        <h1>Making the website change each season</h1>
        <h2>What was my idea?</h2>
        <p>I wanted to make a little easter egg, the colors on the site change during the 4 different seasons of the year</p>
        <h3>Try the different season buttons</h3>
        <div>
            <div class="button-list">
                <Mainlink title="Click" alt="Three" href="three"/>
                <Mainlink title="Click" alt="Three" href="three"/>
                <Mainlink title="Click" alt="Three" href="three"/>
                <Mainlink title="Click" alt="Three" href="three"/>
            </div>
        </div>
    </div>
</div>
<style>
    .button-list{
        display: flex;
        gap: 2em;
    }
</style>
