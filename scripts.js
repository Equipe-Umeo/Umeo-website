
window.addEventListener('DOMContentLoaded', () => {

    //Accès
    function getCookie(cookieName) {
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
          let [key,value] = el.split('=');
          cookie[key.trim()] = value;
        })
        return cookie[cookieName];
    }

      const generateInputDiv = () => {
        const newDiv = document.createElement("div");
        newDiv.classList.add('blocage');
        var input = document.createElement("input");
        input.type = "text";
        input.id = "pass"; // set the CSS class
    
        newDiv.appendChild(input);
        document.body.appendChild(newDiv);
    
    }
    
      const checkPermission = () => {
        const div = document.getElementsByClassName("blocage")[0];
        if(!div && !getCookie("isTare")){
          generateInputDiv();
        }
        else if (div && !getCookie("isTare")){
            console.log("blockage");
            console.log(getCookie("isTare"));
            document.getElementById('pass').addEventListener('input', function(){checkPassword(event)})
        }
        else if(div && getCookie("isTare")) {
            div.style.display = "none";
          }
    }
    
    checkPermission();
    
    setInterval(() => {
    checkPermission();
    }, "500");
   
    
    const checkPassword = (event) => {
      console.log(event.target.value);
      if (event.target.value == "LucasEstNotreDieuEtJeLuiRendHomage"){
        const d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = "isTare" + "=" + true + ";" + expires + ";path=/";
        console.log(document.cookie);
      } else {
        null
      }
    }

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
        const circle1 = document.getElementById("home1__circle");
        document.addEventListener("scroll", ()=>{
            console.log(document.documentElement.scrollTop)
        })
    }
})