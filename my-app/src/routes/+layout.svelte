<script>
    import Mainlink from "../lib/mainlink/Mainlink.svelte";
    import gsap from 'gsap';
</script>

<header>
    <div class="container">
        <nav class="main-menu">
            <ul>
                <li><Mainlink title="Home" alt="go to homepage" href="/"/></li>
            </ul>
        </nav>
    </div>
</header>
<style>
    header{
        position: sticky;
        top: 0;
        background-color: white;
        box-shadow: 0px 4px 5px 0px rgba(83, 83, 83, 0.14);

        @media only screen and (min-width: 900px) {
            box-shadow: none;
        }
    }
   .container .main-menu{
    padding: 1rem 0rem;
   }

   .container .main-menu li{
    list-style-type: none
   }

   .container .main-menu ul{
    padding-inline-start: 0px;
   }

</style>
<slot></slot>
