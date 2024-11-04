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
