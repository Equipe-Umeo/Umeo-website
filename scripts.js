
window.addEventListener('DOMContentLoaded', () => {

    //Style du curseur avec le point qui suit
    const bob = document.getElementById('mouse');

    let mouseX = 0;
    let mouseY = 0;

    let ballX = 0;
    let ballY = 0;

    let speed = 0.2;  //how fast ball catches up to mouse pointer;

    function animate() {
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;
        
    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);
    
    bob.style.left = ballX + 'px';
    bob.style.top = ballY + 'px';

    requestAnimationFrame(animate)

    };

    animate();
    
    document.addEventListener('mousemove',function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    });

    document.addEventListener('click',function(e){
    e.preventDefault;
    bob.classList.remove('active');
    //some rando comment
    
    void bob.offsetWidth;
    
    bob.classList.add('active');
    
    },false);

    //Menu click
    const mobileMenuToggle = document.getElementById("mobile__menu__toggle");
    const menu = document.getElementsByTagName("header")[0];
    if(mobileMenuToggle && menu){
        mobileMenuToggle.addEventListener('click', function(){menu.classList.toggle("show"); mobileMenuToggle.classList.toggle("show")})
    }
    
    const swup = new Swup({
        plugins: [new SwupSlideTheme()]
      });


    //Animations home
    const homePage = document.getElementById("home");
    if(homePage){
        document.addEventListener("scroll", ()=>{
            const homeScroll = document.documentElement.scrollTop;
            const circle1 = document.getElementById("home1__circle");
            const circle2 = document.getElementById("home1__circle2");
            circle1.style.top = (10 + 0.1*homeScroll) +"px";
            circle1.style.right = (-50 - 0.07*homeScroll) +"px";
            circle2.style.top = (330 + 0*homeScroll) +"px";
            circle2.style.right = (-10 + 0.06*homeScroll) +"px";
            const circle3 = document.getElementById("home2__circle");
            circle3.style.top = (150 + 0.2*homeScroll) +"px";
            circle3.style.right = (0 + 0.07*homeScroll) +"px";
        })

        
    }
})