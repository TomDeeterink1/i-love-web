<div class="container">
    <h1> Lets try some 3d on a 2d plain</h1>
    <div class="container--inner"> 
        <div class="perspective">
            <div class="box">
              <div class="face top"></div>
              <div class="face bottom"></div>
              <div class="face front"></div>
              <div class="face left"></div>
              <div class="face right"></div>
            </div>
          </div>
    </div>
    <h2>Did i make this myself?</h2>
    <p>Copying can be an effective way to learn new skills. For example, artists and musicians often begin by mimicking the styles of others before developing their own. This helps them understand techniques, methods, and foundational elements.</p>
</div>
<style>
    .perspective {
    perspective: 800px;
    perspective-origin: 50% -200px;
    }
    .box {  
        margin-top: 150px;
        margin-bottom: 150px;
        width: 200px;
        aspect-ratio: 1;  
        position: relative;
        transform-style: preserve-3d;
}

        .face {
        position: absolute;
        width: 200px;
        aspect-ratio: 1;

        background-color: hsl(
            39,
            100%,
            66%
        );

        transform-style: preserve-3d;
        }
        .box:hover {  
        animation: rotate 5s linear;
        
        }

        .face.front {
        }

        .face.bottom {
        top: 100%;
        }

        .face.top {
        bottom: 100%;
        }

        .face.back {
        bottom: 200%;
        }

        .face.right {
        left: 100%;
        }

        .face.left {
        right: 100%;
        }

        @keyframes rotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotateY(360deg);
        }
        }

        .face.front {
        }

        .face.bottom {
        top: 100%;
        transform-origin: top;
        transform: rotateX(-90deg);
        }

        .face.top {
        bottom: 100%;
        transform-origin: bottom;
        transform: rotateX(90deg);
        }

        .face.back {
        bottom: 200%;
        transform-origin: center 150px -50px;
        transform: rotateX(180deg);
        }

        .face.right {
        left: 100%;
        transform-origin: left;
        transform: rotateY(90deg);
        }

        .face.left {
        right: 100%;
        transform-origin: right;
        transform: rotateY(-90deg);
        }

        .face {  
        background-color: hsl(
            39,
            100%,
            var(--lightness)
        );
        }

        .face.front {
        --lightness: 66%;
        }

        .face.bottom {
        --lightness: 74%;
        }

        .face.top {
        --lightness: 74%;
        }

        .face.back {
        --lightness: 78%;
        }

        .face.right {
        --lightness: 70%;
        }

        .face.left {
        --lightness: 70%;
        }
        </style>
