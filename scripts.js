
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
    let lang = 'fr';
    const currentUrl = window.location.href;
    if(currentUrl.indexOf("/en") !== -1){
        lang = 'en'
    }

    const header = document.getElementsByTagName('header')[0];
    if(header){
        lang == 'fr' ? header.innerHTML = `
        <img src="/img/logo.png" id="header_logo" alt="">
        <img src="/img/frenchflag.svg" id="french_flag" alt="drapeau français">
        <img src="/img/gbflag.svg" id="gb_flag" alt="drapeau anglais">
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

            <li>
                <a id="rencontre" class="menu__item" href="/page/rencontre.html">Rencontrons-nous</a>
            </li>
            
            <li class="button yellow__bg white__text">
                <a id="rejoindre" class="menu__item" href="/page/rejoindre.html">Rejoins-nous</a>
            </li>

            <li class="button white__bg black__text workbench-bold">
                <a id="fondation" class="menu__item" href="/page/fondation.html"> La fondation  <img src="/img/earth_icon_svg.svg" alt="icon planete terre"></a>
            </li>
        </ul>
        <div id="cookie-banner">
            <p class="white__text mt__20">En sélectionnant « Accepter », vous autorisez Umeo à utiliser des cookies et à partager vos données. Nous utilisons des cookies et des outils similaires pour mesurer l'audience de notre site (nombre de visites, navigateur utilisé, etc...)</p>
            <div class="flex w__full justify__center">
                <button class="button yellow__bg white__text mr__20" id="accept-cookies">Accepter</button>
                <button class="button white__bg black__border black__text workbench-bold" id="decline-cookies">Refuser</button>
            </div>
        </div>
        ` : header.innerHTML = `
        <img src="/img/logo.png" id="header_logo" alt="">
        <img src="/img/frenchflag.svg" id="french_flag" alt="drapeau français">
        <img src="/img/gbflag.svg" id="gb_flag" alt="drapeau anglais">
        <div id="mobile__menu__toggle">
				<span></span>
				<span></span>
				<span></span>
			</div>
        <ul class="contained">
            <li>
                <a id="home" class="menu__item active" href="/en">Home</a>
            </li>
            
            <li>
                <a id="metier" class="menu__item" href="/en/page/metiers.html">Services</a>
            </li>

            <li>
                <a id="rencontre" class="menu__item" href="/en/page/rencontre.html">Let's meet</a>
            </li>
            
            <li class="button yellow__bg white__text">
                <a id="rejoindre" class="menu__item" href="/en/page/rejoindre.html">Join us</a>
            </li>

            <li class="button white__bg black__text workbench-bold">
                <a id="fondation" class="menu__item" href="/en/page/fondation.html"> Our foundation <img src="/img/earth_icon_svg.svg" alt="icon planete terre"></a>
            </li>
        </ul>
        <div id="cookie-banner">
            <p class="white__text mt__20">By selecting « Accept », you authorize Umeo to use cookies and to share your data. We use cookies and similar tools to masure the audience of our site (numbers of visits, browser used,...)</p>
            <div class="flex w__full justify__center">
                <button class="button yellow__bg white__text mr__20" id="accept-cookies">Accept</button>
                <button class="button white__bg black__border black__text workbench-bold" id="decline-cookies">Refuse</button>
            </div>
        </div>
        `
    } ;

    const footer = document.getElementsByTagName("footer")[0];
    if(footer){
        footer.classList.add("p__40")
        footer.classList.add("w__full")
        footer.classList.add("dark__green__bg")
        lang == 'fr' ? footer.innerHTML = `
        <div class="contained flex items__center justify__between mobile__col">
				<div class="w__third mobile__full">
					<img id="footer__logo" src="/img/logo.png" alt="">
				</div>
				<div class="w__third mobile__full">
					<ul id="footer__menu" class="flex flex__column mobile__items__center">
						<li>
							<a href="/page/rejoindre.html">Nous rejoindre</a>
						</li>

						<li>
							<a href="/page/metiers.html">Nos services</a>
						</li>
                        <li>
							<a href="/page/rencontre.html">Rencontrons-nous</a>
						</li>
						<li>
							<a href="/">
								Qui sommes-nous ?</a>
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
        ` : footer.innerHTML = `
        <div class="contained flex items__center justify__between mobile__col">
				<div class="w__third mobile__full">
					<img id="footer__logo" src="/img/logo.png" alt="">
				</div>
				<div class="w__third mobile__full">
					<ul id="footer__menu" class="flex flex__column mobile__items__center">
						<li>
							<a href="/en/page/rejoindre.html">Join us</a>
						</li>

						<li>
							<a href="/en/page/metiers.html">Services</a>
						</li>
                        <li>
							<a href="/en/page/rencontre.html">Let's meet</a>
						</li>
						<li>
							<a href="/">
								About us</a>
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

         //Gestion des cookies
        var cookieBanner = document.getElementById('cookie-banner');
        var acceptButton = document.getElementById('accept-cookies');
        var declineButton = document.getElementById('decline-cookies');

        // Vérifier si l'utilisateur a déjà donné son consentement
        if (localStorage.getItem('cookiesAccepted') === 'true') {
            loadGoogleTagManager();
            cookieBanner.style.display = 'none';
        }

        acceptButton.addEventListener('click', function () {
            localStorage.setItem('cookiesAccepted', 'true');
            loadGoogleTagManager();
            cookieBanner.style.display = 'none';
        });

        declineButton.addEventListener('click', function () {
            localStorage.setItem('cookiesAccepted', 'false');
            cookieBanner.style.display = 'none';
        });

        function loadGoogleTagManager() {
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9M4MC65');
        }
    }

    

    //Menu click
    const mobileMenuToggle = document.getElementById("mobile__menu__toggle");
    const menu = document.getElementsByTagName("header")[0];
    if(mobileMenuToggle && menu){
        mobileMenuToggle.addEventListener('click', function(){menu.classList.toggle("show"); mobileMenuToggle.classList.toggle("show")})
    }

    const applyBaseFunctions = () => {
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
            const circle1fondation = document.getElementById("fondation1__circle");
            if(circle1fondation){
                circle1fondation.style.top = (-50 + 0.05*homeScroll) +"px";
                circle1fondation.style.right = (120 - 0.02*homeScroll) +"px";
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
        if(document.getElementById("fondation-carousel")){
            new Splide( '#fondation-carousel', {perPage: 2, perMove: 1,  breakpoints: {
                800: {
                    perPage: 1,
                },
            }} ).mount();
        }   
        if(document.getElementById("loc-carousel")){
            new Splide( '#loc-carousel', {perPage: 1, perMove: 1,  breakpoints: {
                800: {
                    perPage: 1,
                },
            }} ).mount();
        }   
        if(document.getElementById("offers-carousel")){
            new Splide( '#offers-carousel', {perPage: 1, perMove: 1,  breakpoints: {
                800: {
                    perPage: 1,
                },
            }} ).mount();
        } 

        //BOUTONS POSTULER
        const applyButtons = [...document.getElementsByClassName('apply__button')];
        const offerField = document.getElementById('offer_field');
        if(applyButtons && applyButtons.length>0 && offerField){
            applyButtons.forEach(button => {
                button.addEventListener("click", () => {
                    offerField.value = button.id;
                })
            })
        }

        //Style ACTIF MENU
        const menuItems = [...document.getElementsByClassName('menu__item')];

        if(menuItems){
            const currentUrl = window.location.href;
            if(currentUrl.indexOf("metiers") !== -1){
                menuItems.forEach((element, index) => {
                    if(index !== 1){
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
            if(currentUrl.indexOf("rencontre") !== -1){
                menuItems.forEach((element, index) => {
                    if(index !== 2){
                        element.classList.remove("active");
                    } else {
                        element.classList.add("active");
                    }
                })
            }
            if(currentUrl.indexOf("fondation") !== -1){
                menuItems.forEach((element, index) => {
                    element.classList.remove("active");
                })
            } 
            if(currentUrl.indexOf("blog") !== -1){
                menuItems.forEach((element, index) => {
                    if(index !== 3){
                        element.classList.remove("active");
                    } else {
                        element.classList.add("active");
                    }
                })
            }

            menuItems.forEach(element => {
                element.addEventListener("click", function(){
                        menuItems.map(element => element.classList.remove("active")); 
                        element.classList.add("active")
                        const mobileMenuToggle = document.getElementById("mobile__menu__toggle");
                        const menu = document.getElementsByTagName("header")[0];
                        if(mobileMenuToggle && menu){
                            menu.classList.remove("show"); 
                            mobileMenuToggle.classList.remove("show")
                        }
                })
            })
        }

        //Gestion langues
        const switchLang = (locale) => {
            locale == 'en' ? window.location.href = "/en" : window.location.href = "/";
        }

        const GbFlag = document.getElementById('gb_flag');
        if(GbFlag){
            GbFlag.addEventListener('click', () => switchLang('en'))
        }
        const FrFlag = document.getElementById('french_flag');
        if(FrFlag){
            FrFlag.addEventListener('click', () => switchLang('fr'))
        }
    }

    //On lance les fonctions la première fois
    applyBaseFunctions();

    const swup = new Swup({
        plugins: [new SwupSlideTheme()]
      });


    swup.hooks.on('page:view', () => {
        // This runs after every page change by swup
        applyBaseFunctions();
    })
    
})