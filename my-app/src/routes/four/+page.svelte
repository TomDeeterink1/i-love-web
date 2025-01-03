<script>
    import Mainlink from "../../lib/mainlink/Mainlink.svelte";
</script>
<div class="container">
    <div class="container--inner"> 
        <h1>Making the website change each season</h1>
        <h2>What was my idea?</h2>
        <p>I wanted to make a little easter egg, the colors on the site change during the 4 different seasons of the year</p>
        <h3>Try the different season buttons</h3>
        <strong>Note: this function might not work, please hard reload the page to see the working colors (cmd, shift , r)</strong>
        <div>
            <div class="button-list">
                <Mainlink title="Click" alt="" href="#"/>
                <Mainlink title="Click" alt="" href="#"/>
                <Mainlink title="Click" alt="" href="#"/>
                <Mainlink title="Click" alt="" href="#"/>
            </div>
        </div>
        <h3>Fully accesible</h3>
        <p>The function of using colors is fully accesible, it runs on a stand alone script. Also when JS is disabled it falls back on the normal color scheme</p>
        <p>Also the function only works on hover, there is a reason for this: i think its important to have a non changing effect for a focus state, this to prevent miscommunication to users who navigate with their keyboard.</p>
        <h3>Is this usefull?</h3>
        <p>No not really, but it was fun to try out with my partner CHATGPT</p>
        <div class="links">
            <Mainlink title="Link towards the js code" alt="" href="https://github.com/TomDeeterink1/i-love-web/blob/main/my-app/static/page.js"/>
            <Mainlink title="Link towards the wiki with explanaition of code" alt="" href="https://github.com/TomDeeterink1/i-love-web/wiki/Learning-journal-JS-functie-1"/>
        </div>
    </div>
</div>
<style>
    .button-list , .links{
        padding: 2em 0em;
        display: flex;
        flex-direction: column;
        gap: 2em;
        align-items: flex-start;;

        @media only screen and (min-width: 900px) {
            flex-direction: row;
        }
    }
</style>
