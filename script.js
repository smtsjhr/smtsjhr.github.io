
document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("hashchange", function() {
        var hash = window.location.hash.substring(1);
        
        if (hash.slice(hash.length - 1) == '/') {
            hash = hash.slice(0,hash.length - 1);
        }
        
        if (hash == '') {

        }
        else if (hash == "links" || hash == "links/" || hash == "look" || hash == "look/") {
            var link_element = document.getElementById(hash+'_link');
            link_element.click();
        }
        else {
            var img_element = document.getElementById(hash+'_img');
            if (img_element != null) {img_element.click();}
        }
    }, false);


    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
            if (video.isIntersecting) {
            for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
                }
            }

            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
            }
        });
        });

        lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
        });
    }
});

const iframe_details = {

    "Z_6GaugeTile": {
        "url": "https://smtsjhr.com/Z_6GaugeTile/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/JjXErBe",
        "github_url": "https://github.com/smtsjhr/Z_6GaugeTile",
        "style": "background-color: white;"
    },

    "MoireSun": {
        "url": "https://smtsjhr.com/MoireSun/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/NWNqZPG",
        "github_url": "https://github.com/smtsjhr/MoireSun",
    },
    "WhispyWave": {
        "url": "https://smtsjhr.com/WhispyWave/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/qBbmqGR",
        "github_url": "https://github.com/smtsjhr/WhispyWave",
        "style": "background-color: black;"
    },
    "RippleMoire": {
        "url": "https://smtsjhr.com/RippleMoire/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/JjjGGgb",
        "github_url": "https://github.com/smtsjhr/RippleMoire"
    },
    "2-ColoredLiner": {
        "url": "https://smtsjhr.com/2-ColoredLiner/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/oNgdeZV",
        "github_url": "https://github.com/smtsjhr/2-ColoredLiner"
    },
    "CircleWeb": {
        "url": "https://smtsjhr.com/CircleWeb/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/YzyRweW",
        "github_url": "https://github.com/smtsjhr/CircleWeb"
    },
    "Hall_1": {
        "url": "https://smtsjhr.com/Hall_1/",
        "codepen_url": "https://codepen.io/smtsjhr/details/LYVdweb",
        "github_url": "https://github.com/smtsjhr/Hall_1"
    },
    "Hall_2": {
        "url": "https://smtsjhr.com/Hall_2/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/XWXKGrY",
        "github_url": "https://github.com/smtsjhr/Hall_2",
        "style": "background-color: black;"
    },
    "HallTile": {
        "url": "https://smtsjhr.com/HallTile/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/YzwWoQX",
        "github_url": "https://github.com/smtsjhr/HallTile",
        "style": "background-color: black;"
    },
    "RecWaver": {
        "url": "https://smtsjhr.com/RecWaver/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/YzyRweW",
        "github_url": "https://github.com/smtsjhr/RecWaver"
    },
    "CircleArcSine": {
        "url": "https://smtsjhr.com/CircleArcSine/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/wvMLPyN",
        "github_url": "https://github.com/smtsjhr/CircleArcSine"
    },
    "CircleFarm": {
        "url": "https://smtsjhr.com/CircleFarm/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/eYJazdz",
        "github_url": "https://github.com/smtsjhr/CircleFarm"
    },
    "CircleWorm": {
        "url": "https://smtsjhr.com/CircleWorm/",
        "codepen_url": "https://codepen.io/smtsjhr/details/LYVrKaa",
        "github_url": "https://github.com/smtsjhr/CircleWorm"
    },
    "CheckerWarp": {
        "url": "https://smtsjhr.com/CheckerWarp/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/NWGNpZE",
        "github_url": "https://github.com/smtsjhr/CheckerWarp"
    },
    "BubbleRing": {
        "url": "https://smtsjhr.com/BubbleRing/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/BaNvEwE",
        "github_url": "https://github.com/smtsjhr/BubbleRing"
    },
    "RecSlicer": {
        "url": "https://smtsjhr.com/RecSlicer/",
        "codepen_url": "https://codepen.io/smtsjhr/details/ExjEOyd",
        "github_url": "https://github.com/smtsjhr/RecSlicer",
        "style": "background-color: white;"
    },
    "FocusGrid": {
        "url": "https://smtsjhr.com/FocusGrid/",
        "codepen_url": "https://codepen.io/smtsjhr/details/ZEGLQjb",
        "github_url": "https://github.com/smtsjhr/FocusGrid",
        "style": "background-color: white;"
    },
    "FocusGrid_2": {
        "url": "https://smtsjhr.com/FocusGrid_2/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/yLNvJyE",
        "github_url": "https://github.com/smtsjhr/FocusGrid_2",
        "style": "background-color: white;"
    },
    "HarmonicSpiral": {
        "url": "https://smtsjhr.com/HarmonicSpiral/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/zYxjzrK",
        "github_url": "https://github.com/smtsjhr/HarmonicSpiral",
        "style": "background-color: white;"
    },
    "PixelWave": {
        "url": "https://smtsjhr.com/PixelWave/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/VwYxpVw",
        "github_url": "https://github.com/smtsjhr/PixelWave"
    },
    "PointChoreo": {
        "url": "https://smtsjhr.com/PointChoreo/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/PoqjbYO",
        "github_url": "https://github.com/smtsjhr/PointChoreo"
    },
    "PolyArch": {
        "url": "https://smtsjhr.com/PolyArch/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/VwYxgZY",
        "github_url": "https://github.com/smtsjhr/PolyArch"
    },
    "PolyField": {
        "url": "https://smtsjhr.com/PolyField/",
        "codepen_url": "https://codepen.io/smtsjhr/details/xxbaBVv",
        "github_url": "https://github.com/smtsjhr/PolyField"
    }
};

function loadCanvas(imgs) {
    var main_body_element = document.getElementById("main_body");
    var image_id = imgs.id.replace('_img', '');
    var canvas_element = document.getElementById("canvas");
    var iframe_element = document.getElementById("expanded_iframe");
    var title_element = document.getElementById("title");
    var codepenURL_anchor = document.getElementById("codepenURL");
    var githubURL_anchor = document.getElementById("githubURL");
    var link_section_element = document.getElementById("link_section");
    var look_text_element = document.getElementById("look_text");
    var background_iframe_element = document.getElementById("background_iframe");
    var closebtn_element = document.getElementById("closebtn");
    var loading_element = document.getElementById("loading_block");
    loading_element.style.height = `${Math.max(400, window.innerHeight)}px`;
    loading_element.style.display = "block";
    iframe_element.src = iframe_details[image_id]["url"];
    iframe_element.style = iframe_details[image_id]["style"];
    iframe_element.style.height = `${window.innerHeight}px`;
    iframe_element.onload = function() {
        loading_element.style.display = "none";
        iframe_element.style.display = "block";
    }
    title_element.innerHTML = image_id;
    codepenURL_anchor.href = iframe_details[image_id]["codepen_url"];
    githubURL_anchor.href = iframe_details[image_id]["github_url"];
    link_section_element.style.display = "none";
    look_text_element.style.display = "none";
    background_iframe_element.style.display = "none";
    canvas_element.style.display = "block";
    main_body_element.style.display = "none";
    video_list = document.querySelectorAll("video");
    video_list.forEach(element => element.style = "");
    imgs.style = "box-shadow: 0 0 40px 0px rgba(255,255,255,1)";

    var y = closebtn_element.getBoundingClientRect().bottom + window.pageYOffset; 
    window.scrollTo({top: y, behavior: 'smooth'});

    window.onresize = function() {
        iframe_element.style.height = `${window.innerHeight}px`;
    }
    
}

function close_canvas() {
    var main_body_element = document.getElementById("main_body");
    var canvas_element = document.getElementById("canvas");
    var iframe_element = document.getElementById("expanded_iframe");
    var background_iframe_element = document.getElementById("background_iframe");
    var look_link_element = document.getElementById("look_link");
    video_list = document.querySelectorAll("video");
    video_list.forEach(element => element.style = "");
    iframe_element.src = "";
    canvas_element.style.display = "none";
    background_iframe_element.style.display = "block";
    look_link_element.click();

    main_body_element.style.display = "block";

}	

function link_action(a) {

    if (a.id == "footer_link") {
        window.scrollTo(0,0);
    }
    else {
        var background_iframe_element = document.getElementById("background_iframe");
        var link_section_element = document.getElementById("link_section");
        var canvas_container_element = document.getElementById("canvas");
        var look_text_element = document.getElementById("look_text");
        var footer_element = document.getElementById("footer");
        image_list = document.querySelectorAll("img");
        image_list.forEach(element => element.style = "");
        if (a.id == "links_link") {
            canvas_container_element.style.display = "none";
            link_section_element.style.display = "block";
            look_text_element.style.display = "block";
            footer_element.style.display = "block";
            background_iframe_element.style.display = "block";
        } else if (a.id == "look_link") {
            canvas_container_element.style.display = "none";
            link_section_element.style.display = "none";
            look_text_element.style.display = "none";
            footer_element.style.display = "none";
            background_iframe_element.style.display = "none";
        }
    }

}

function scroll_action(btn) {
    var gallery_element = document.getElementById("gallery");
    if (btn.id == "right_scroll") {
        gallery_element.scrollBy({left: 330, behavior: 'smooth'});
    }
    else if (btn.id == "left_scroll") {
        gallery_element.scrollBy({left: -330, behavior: 'smooth'});
    }
}

var contact = false;
var contact_element = document.getElementById("hello");

function hello() {
    if ( contact == false ) {
        contact = true;
        let dt = 100;
        let p = 7;
        let name = 'smtsjhr';
        let address = ['@','p','m','.','m','e']
        var footer_anchor = document.getElementById("footer_link");
        for (let i = 0; i < 12+p; i++) {
            setTimeout(function() {
                if ( i<6 ) {
                    name = name.concat(address[i]);
                    footer_anchor.innerHTML = name;
                }
                else if (i < 6 + p) { }
                else if (6+p < i < 12+p) {
                    name = name.slice(0, -1);
                    footer_anchor.innerHTML = name;
                    if ( i == 11+p) {
                        contact = false;
                    }
                }          
            }, dt*(i));
        }
    }
}
