<div class="container">
    <h1> All types of 2d effects on hover</h1>
    <h2>Just hover them, explore</h2>
    <div class="container--inner"> 
        <div class=skew></div>
        <div class="grow"></div>
        <div class="growx"></div>
        <div class="growy"></div>
        <div class="turnright"></div>
        <div class="turntop"></div>
        <div class="movedown"></div>
        <div class="moveup"></div>
    </div>
    <p>A 2D (two-dimensional) shape can be defined as a plane figure that can be drawn on a flat surface. It has only two dimensions - length and width, with no thickness or depth. Some of the basic 2D shapes are rectangle, pentagon, quadrilateral, circle, triangles, square, octagon, and hexagon.</p>
</div>

<style>
    .container--inner{
        display: grid;
    grid-template-columns: repeat(8, 0fr);
    grid-template-rows: repeat(1, 1fr);
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    }

    .container--inner div{
        height: 8em;
        width: 8em;
        background-color: var(--dark);
        transition: ease-out 0.3s;
    }
    .container--inner div:hover{
        background-color: red;
        cursor: pointer;
    }

    .skew:hover{
        transform: skew(-15deg, -15deg);
    }

    .grow:hover{
        transform: scale(110%);
    }

    .growx:hover{
        transform: scaleX(120%);
    }

    .growy:hover{
        transform: scaleY(120%);
        
    }

    .turnright:hover{
        transform: rotate(90deg);
    }

    .turntop:hover{
        transform: rotateX(360deg);
    }

    .movedown:hover{
        transform: translateY(2em);
    }

    .moveup:hover{
        transform: translateY(-2em);
    }
</style>