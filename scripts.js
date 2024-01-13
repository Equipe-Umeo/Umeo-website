
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

    //Menu dynamique
    const header = document.getElementsByTagName('header')[0];
    if(header){
        header.innerHTML = `
        <div id="mobile__menu__toggle">
				<span></span>
				<span></span>
				<span></span>
			</div>
        <ul class="contained">
        <li>
            <a id="home" class="menu__item active" href="/">Accueil</a>
        </li>
        
        <li>
            <a id="metier" class="menu__item" href="/page/metiers.html">Nos services</a>
        </li>
        
        <li class="button yellow__bg white__text">
            <a id="rejoindre" class="menu__item" href="/page/rejoindre.html">Rejoins-nous</a>
        </li>
       
    </ul>`
    }

    const footer = document.getElementsByTagName("footer")[0];
    if(footer){
        footer.classList.add("p__40")
        footer.classList.add("w__full")
        footer.classList.add("dark__green__bg")
        footer.innerHTML = `
        <div class="contained flex items__center justify__between mobile__col">
				<div class="w__third mobile__full">
					<img id="footer__logo" src="/img/logo.png" alt="">
				</div>
				<div class="w__third mobile__full">
					<ul id="footer__menu" class="flex flex__column mobile__items__center">
						<li>
							<a href="/contact">Rencontrons-nous</a>
						</li>
						<li>
							<a href="/rejoindre">Nous rejoindre</a>
						</li>

						<li>
							<a href="/page/metiers.html">Nos services</a>
						</li>
						<li>
							<a href="/nous">
								Qui sommes-nous ?</a>
						</li>
						<li>
							<a href="/blog">Blog</a>
						</li>
						<li>
							<a href="/fondation">La fondation</a>
						</li>
					</ul>
				</div>
				<div class="w__third mobile__full">
					<ul id="footer__infos">
						<li class="flex items__center">
							<img src="/img/localisation.svg" alt="">
							<p>58 Rue de Monceau
								<br>
								75008 Paris</p>
						</li>
						<li class="flex items__center">
							<img src="/img/localisation.svg" alt="">
							<p>52 rue du colombier
								<br>
								69007 Lyon</p>
						</li>
						<li class="flex items__center">
							<img src="/img/phone2.svg" alt="">
							<a href="tel: 0478962757">04 78 96 27 57</a>
						</li>
						<li class="flex items__center">
							<img src="/img/email.svg" alt="">
							<a href="mailto: contact@umeo.consulting">contact@umeo.consulting</a>
						</li>
					</ul>
				</div>
			</div>
        `
    }

    //Style ACTIF MENU
    const menuItems = [...document.getElementsByClassName('menu__item')];

    if(menuItems){
        const currentUrl = window.location.href;
        if(currentUrl.indexOf("metiers") !== -1){
            menuItems.forEach((element, index) => {
                if(index !== 2){
                    element.classList.remove("active");
                } else {
                    element.classList.add("active");
                }
            })
        } 
        if(currentUrl.indexOf("rejoindre") !== -1){
            menuItems.forEach((element, index) => {
                    element.classList.remove("active");
            })
        } 

        menuItems.forEach(element => {
           element.addEventListener("click", function(){
                menuItems.map(element => element.classList.remove("active")); 
                element.classList.add("active")
           })
        })
    }

    //Menu click
    const mobileMenuToggle = document.getElementById("mobile__menu__toggle");
    const menu = document.getElementsByTagName("header")[0];
    if(mobileMenuToggle && menu){
        mobileMenuToggle.addEventListener('click', function(){menu.classList.toggle("show"); mobileMenuToggle.classList.toggle("show")})
    }
    
    const swup = new Swup({
        plugins: [new SwupSlideTheme()]
      });


    swup.hooks.on('page:view', () => {
        // This runs after every page change by swup
        //Animations home
        document.addEventListener("scroll", ()=>{
                const homeScroll = document.documentElement.scrollTop;
                const circle1 = document.getElementById("home1__circle");
                const circle2 = document.getElementById("home1__circle2");
                if(circle1){
                    circle1.style.top = (10 + 0.05*homeScroll) +"px";
                    circle1.style.right = (10 - 0.03*homeScroll) +"px";
                }
                if(circle2){
                    circle2.style.top = (330 + 0*homeScroll) +"px";
                    circle2.style.right = (50 + 0.03*homeScroll) +"px";
                }
                    const circle3 = document.getElementById("home2__circle");
                    const circle4 = document.getElementById("home2__circle2");
                if(circle3){
                    circle3.style.top = (150 + 0.1*homeScroll) +"px";
                    circle3.style.left = (140 - 0.03*homeScroll) +"px";
                }
                if(circle4){
                    circle4.style.top = (750 + 0.05*homeScroll) +"px";
                    circle4.style.left = (50 + 0.03*homeScroll) +"px";
                }
                const circle5 = document.getElementById("home3__circle");
                const circle6 = document.getElementById("home3__circle2");
                if(circle5){
                    circle5.style.top = (100 - 0.1*(homeScroll/10)) +"px";
                    circle5.style.left = (-100 + 0.1*(homeScroll/10)) +"px";
                }
                if(circle6){
                    circle6.style.top = (0 + 0.1*(homeScroll/10)) +"px";
                    circle6.style.left = (200 - 0.03*(homeScroll/10)) +"px";
            }
        })

        //Sliders
        if(document.getElementById("image-carousel")){
            new Splide( '#image-carousel', {perPage: 2, perMove: 1,  breakpoints: {
                800: {
                    perPage: 1,
                },
            }} ).mount();
        }   
    })

    //Animations home
    document.addEventListener("scroll", ()=>{
        const homeScroll = document.documentElement.scrollTop;
        const circle1 = document.getElementById("home1__circle");
        const circle2 = document.getElementById("home1__circle2");
        if(circle1){
            circle1.style.top = (10 + 0.05*homeScroll) +"px";
            circle1.style.right = (10 - 0.03*homeScroll) +"px";
        }
        if(circle2){
            circle2.style.top = (330 + 0*homeScroll) +"px";
            circle2.style.right = (50 + 0.03*homeScroll) +"px";
        }
            const circle3 = document.getElementById("home2__circle");
            const circle4 = document.getElementById("home2__circle2");
        if(circle3){
            circle3.style.top = (150 + 0.1*homeScroll) +"px";
            circle3.style.left = (140 - 0.03*homeScroll) +"px";
        }
        if(circle4){
            circle4.style.top = (750 + 0.05*homeScroll) +"px";
            circle4.style.left = (50 + 0.03*homeScroll) +"px";
        }
        const circle5 = document.getElementById("home3__circle");
        const circle6 = document.getElementById("home3__circle2");
        if(circle5){
            circle5.style.top = (100 - 0.1*(homeScroll/10)) +"px";
            circle5.style.left = (-100 + 0.1*(homeScroll/10)) +"px";
        }
        if(circle6){
            circle6.style.top = (0 + 0.1*(homeScroll/10)) +"px";
            circle6.style.left = (200 - 0.03*(homeScroll/10)) +"px";
        }
    })

    //Sliders
    if(document.getElementById("image-carousel")){
        new Splide( '#image-carousel', {perPage: 2, perMove: 1,  breakpoints: {
            800: {
                perPage: 1,
            },
        }} ).mount();
    }   
})