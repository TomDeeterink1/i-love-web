<script>
    import Mainlink from "../lib/mainlink/Mainlink.svelte";
    import { onMount } from 'svelte'
    import { Seasonstyles } from "$lib/page";
            onMount(() => {
                Seasonstyles() 
            })
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

<slot></slot>

<footer>
    <div class="container">
        <nav class="main-footer">
           <h4>2025 All rights served</h4>
           <h4>Copyright non excistand</h4>
        </nav>
    </div>
</footer>




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

   .main-footer{
    border-top: 2px solid black;
   }

</style>