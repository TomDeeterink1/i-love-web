<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
    

	onMount(() => {
		gsap.fromTo(".main-menu", { x: 400 , opacity: 0 }, { x : 0, duration: 0.8 , opacity: 1 });
	});
</script>

<header>
    <div class="container">
        <nav class="main-menu">
            <ul>
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    </div>
</header>
<style>
    header{
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 100;
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
