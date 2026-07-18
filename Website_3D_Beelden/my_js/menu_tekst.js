// export 
function leesMenuTekst() {
    let pad = "";
    let extralink = "";
    let extralink2 = "";
    let menu_tekst = "";
    let x = location.hostname;
    if (x == "llocalhost")
        pad = "http://localhost/www/hccnet/Website_3D_Beelden/"
    else
        pad = "https://robvancooten.github.io/hccnet/Website_3D_Beelden/";

        //  alert("pad= " + pad ); 

        pad = "https://robvancooten.github.io/hccnet/Website_3D_Beelden/";        

    const urlParams = new URLSearchParams(window.location.search);
    let menu_keuze = urlParams.get('menu_keuze');
    const link_nummer = urlParams.get('link_nummer');
    if (menu_keuze == null)
        menu_keuze = 0;
    //   alert("menu keuze: " + menu_keuze);

    const witregel = '<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </li>';
    if (x == "localhost") {
        extralink = '<li><a href= ' + pad + 'all.html?menu_keuze=4&link_nummer=4 ' +
            'title="Alle keramieke koppen van marjan.">ALL</a></li>';
        extralink2 = '<li><a href= ' + pad + 'index.html?menu_keuze=4&link_nummer=3 ' +
            'title="meerdere keramieke koppen van marjan.">nav-kop</a></li>';
    }
    else {
        extralink = witregel;
        extralink2 = witregel;
    };

    if (menu_keuze == 5) {
        menu_tekst = '<ul>' +
            '<li><a href=' + pad + 'fps.html?menu_keuze=5&link_nummer=0           title="Walking along ceramic heads..">FPS</a></li>' +
            '<li><a href=' + pad + 'spiegel.html?menu_keuze=5&link_nummer=1   title="Mirror with reflections.">Mirror</a></li>' +
            '<li><a href=' + pad + 'circel.html?menu_keuze=5&link_nummer=2   title="Running text along a circel.">Circel</a></li>' +
            '<li><a href=' + pad + 'toren.html?menu_keuze=5&link_nummer=3   title="Tower of Babilon.">Tower</a></li>' +
            '<li><a href=' + pad + 'birds.html?menu_keuze=5&link_nummer=4   title="4 Birds hiding and showing.">Birds</a></li>' +
            '<li><a href=' + pad + 'train.html?menu_keuze=5&link_nummer=5   title="Heads moving along a line.">Train</a></li>' +
            witregel +
            '<li><a href=' + pad + 'flyer.html?menu_keuze=3&link_nummer=0        title="Expositie wordt opgebouwd via parachute.">back4</a></li>' +

            '<li style="float:right"><a href=' + pad + 'howto.html?menu_keuze=4&link_nummer=7  title="The Making Of.">HOWTO</a></li>' +
            '<li style="float:right"><a href="https://robvancooten.github.io/hccnet/" title="Website van Rob van Cooten.">Home</a></li>' +
            ' </ul>';
    }

    else if (menu_keuze == 4) {
        menu_tekst = '<ul>' +
            '<li><a href=' + pad + 'flyer.html?menu_keuze=4&link_nummer=0           title="Expositie wordt opgebouwd via parachute.">Flyer</a></li>' +
            '<li><a href=' + pad + 'multitextures.html?menu_keuze=4&link_nummer=1   title="1 Kop met meerdere textures.">Multi</a></li>' +
            '<li><a href=' + pad + 'ruimte.html?menu_keuze=4&link_nummer=2          title="ff spelen, koppen in roterende ruimte.">Ruimte</a></li>' +
            '<li><a href=' + pad + 'koppen.html?menu_keuze=4&link_nummer=3          title="keramieke kop via meerdere cameras">Koppen</a></li>' +
            '<li><a href=' + pad + 'move.html?menu_keuze=4&link_nummer=4             title="move around heads">Move</a></li>' +
            '<li><a href=' + pad + 'matroesjka.html?menu_keuze=4&link_nummer=5             title="Matroesjkas uit ei.">Matroesjka</a></li>' +
            '<li><a href=' + pad + 'all.html?menu_keuze=4&link_nummer=6             title="Alle keramieke koppen van marjan.">ALL</a></li>' +
            witregel +
            '<li><a href=' + pad + 'sprites.html?menu_keuze=3&link_nummer=0  title="sprites koppen."> back3 </a></li>' +
            '<li><a href=' + pad + 'fps.html?menu_keuze=5&link_nummer=0  title="Walking along ceramic heads."> MORE5 </a></li>' +

            '<li style="float:right"><a href=' + pad + 'howto.html?menu_keuze=4&link_nummer=7  title="The Making Of.">HOWTO</a></li>' +
            '<li style="float:right"><a href="https://robvancooten.github.io/hccnet/" title="Website van Rob van Cooten.">Home</a></li>' +
            ' </ul>';
    }

    else if (menu_keuze == 3) {
        menu_tekst = '<ul>' +
            '<li><a href=' + pad + 'sprites.html?menu_keuze=3&link_nummer=0   title="sprites koppen.">Sprites</a></li>' +
            '<li><a href=' + pad + 'schaduw.html?menu_keuze=3&link_nummer=1  title="light points.">Shadows</a></li>' +
            '<li><a href=' + pad + 'skybox.html?menu_keuze=3&link_nummer=2  title="Sky Box.">Skybox</a></li>' +
            '<li><a href=' + pad + 'cubebox.html?menu_keuze=3&link_nummer=3  title="Funny Box met plaatjes.">Box</a></li>' +
            '<li><a href=' + pad + 'mask_ani.html?menu_keuze=3&link_nummer=4  title="Masking van Koppen.">Mask</a></li>' +
            witregel +
            '<li><a href=' + pad + 'meermin.html?menu_keuze=2&link_nummer=0  title="Meermin.">back2</a></li>' +
            '<li><a href=' + pad + 'flyer.html?menu_keuze=4&link_nummer=0  title="parachute.">MORE4</a></li>' +

            '<li style="float:right"><a   href="https://robvancooten.write2me.nl/" title="Guestbook.">Write2Me</a></li>' +
            '<li style="float:right"><a   href="https://robvancooten.github.io/hccnet/" title="Website van Rob van Cooten.">Home</a></li>' +
            ' </ul>';
    }
    else if (menu_keuze == 2) {
        menu_tekst = '<ul>' +
            '<li><a href= ' + pad + 'meermin.html?menu_keuze=2&link_nummer=0     title="meermin.">Meermin</a></li>' +
            '<li><a href= ' + pad + 'masking_3D.html?menu_keuze=2&link_nummer=1  title="3D masking van blader kop.">Mask3D</a></li>' +
            '<li><a href=' + pad + 'clonekoppen.html?menu_keuze=2&link_nummer=2  title="gekloonde koppen.">Clone</a></li>' +

            '<li><a href= ' + pad + 'xray.html?menu_keuze=2&link_nummer=3    title=" X-ray photograph of a Head..">X-Ray</a></li>' +
            '<li><a href= ' + pad + 'vertex.html?menu_keuze=2&link_nummer=4  title=" Cube Head..">Vertex</a></li>' +
            witregel +
            '<li><a href=' + pad + 'expo.html?menu_keuze=1&link_nummer=0 title="keramieke koppen.">back1</a></li>' +
            '<li><a href=' + pad + 'sprites.html?menu_keuze=3&link_nummer=0  title="sprites koppen.">MORE3</a></li>' +

            '<li style="float:right"><a href="https://threejs.org/manual/#en/fundamentals" title="Threejs examples.">Examples.</a></li>' +
            '<li style="float:right"><a href="https://robvancooten.github.io/hccnet/" title="Website van Rob van Cooten.">Home</a></li>' +
            ' </ul>';
    }
    else {
        menu_tekst = '<ul>' +
            '<li><a href= ' + pad + 'expo.html?menu_keuze=0&link_nummer=0    title="Meerdere keramieke koppen van marjan.">Expo</a></li>' +
            '<li><a href=' + pad + 'ei.html?menu_keuze=0&link_nummer=1       title="Geboorte keramieke kop.">&nbsp; Ei &nbsp;</a></li>' +
            '<li><a href=' + pad + 'bol.html?menu_keuze=0&link_nummer=2      title="Bolleke met koppen.">Bol</a></li>' +
            '<li><a href=' + pad + 'ps.html?menu_keuze=0&link_nummer=3  title="Particle systeem van koppen">P.S.</a></li>' +
            '<li><a href=' + pad + 'cloud.html?menu_keuze=0&link_nummer=4  title="Particle systeem van koppen">Cloud</a></li>' +
            '<li><a href= ' + pad + 'pool.html?menu_keuze=0&link_nummer=5  title=" Playing pool..">Pool</a></li>' +
            '<li><a href= ' + pad + 'ocean.html?menu_keuze=0&link_nummer=6   title="kop uit het water.">Ocean</a></li>' +
            '<li><a href= ' + pad + 'drones.html?menu_keuze=0&link_nummer=7   title="Multiple animated Drones.">Drones</a></li>' +
            witregel +
            '<li><a href=' + pad + 'meermin.html?menu_keuze=2&link_nummer=0  title="Meermin.">MORE2</a></li>' +

            '<li style="float:right"><a href="https://threejs.org/examples/" title="Threejs voorbeelden.">Threejs</a></li>' +
            '<li style="float:right"><a href="https://robvancooten.github.io/hccnet/" title="Website van Rob van Cooten.">Home</a></li>' +
            ' </ul>';
    }

    const plaatjes = [];
    for (let k = 0; k < 10; k++) {
        plaatjes[k] = 'kop' + (k + 1) + '.png';
    }
    //  alert("link_nummer: " + Number(link_nummer) ); 

    let p;
    if (menu_keuze == 0)
        p = "./images/koppen_ani/kop1.png"
    else
        p = "./images/koppen_ani/" + plaatjes[Number(link_nummer)];
    //  alert("plaatje: " + p ); 
    let plaatje_ani = '<img class="marquee" src=' + p;
    plaatje_ani = plaatje_ani + ' title="grappig he..." alt="Grappig">';

    menu_tekst = menu_tekst + plaatje_ani;

    return menu_tekst;
}

// export
function isTouchDevice() {
    let el = document.createElement('div');
    el.setAttribute('ongesturestart', 'return;');
    if (typeof el.ongesturestart == "function") {
        return true;
    } else {
        return false
    }
}  // einde Touch. 

// export
function kleurActiveLink() {
    let menu_keuze = 0;
    let link_nummer = 0;
    let alinks = document.querySelectorAll('li a');
    //	alert("alinks.length: " + alinks.length);

    const urlParams = new URLSearchParams(window.location.search);

    menu_keuze = urlParams.get('menu_keuze');
    link_nummer = urlParams.get('link_nummer');
    if (link_nummer === null) {
        link_nummer = 0;
    }

    //   alert("link_nummer: " + link_nummer);

    if (alinks[link_nummer] != null) {
        alinks[link_nummer].style.backgroundColor = "#999";
        alinks[link_nummer].style.color = "white";
        alinks[link_nummer].style.fontWeight = "bolder";
    }
}    // einde kleurActiveLink. 

export { leesMenuTekst, isTouchDevice, kleurActiveLink };   // werkt ook 


