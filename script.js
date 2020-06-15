const iframe_details = {
    "RippleMoire": {
        "url": "https://smtsjhr.github.io/RippleMoire/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/JjjGGgb",
        "github_url": "https://github.com/smtsjhr/RippleMoire"
    },
    "2-ColoredLiner": {
        "url": "https://smtsjhr.github.io/2-ColoredLiner/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/oNgdeZV",
        "github_url": "https://github.com/smtsjhr/2-ColoredLiner"
    },
    "CircleWeb": {
        "url": "https://smtsjhr.github.io/CircleWeb/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/YzyRweW",
        "github_url": "https://github.com/smtsjhr/CircleWeb"
    },
    "Hall_1": {
        "url": "https://smtsjhr.github.io/Hall_1/",
        "codepen_url": "https://codepen.io/smtsjhr/details/LYVdweb",
        "github_url": "https://github.com/smtsjhr/Hall_1"
    },
    "Hall_2": {
        "url": "https://smtsjhr.github.io/Hall_2/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/XWXKGrY",
        "github_url": "https://github.com/smtsjhr/Hall_2",
        "style": "background-color: black;"
    },
    "RecWaver": {
        "url": "https://smtsjhr.github.io/RecWaver/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/YzyRweW",
        "github_url": "https://github.com/smtsjhr/RecWaver"
    },
    "CircleWorm": {
        "url": "https://smtsjhr.github.io/CircleWorm/",
        "codepen_url": "https://codepen.io/smtsjhr/details/LYVrKaa",
        "github_url": "https://github.com/smtsjhr/CircleWorm"
    },
    "CheckerWarp": {
        "url": "https://smtsjhr.github.io/CheckerWarp/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/NWGNpZE",
        "github_url": "https://github.com/smtsjhr/CheckerWarp"
    },
    "BubbleRing": {
        "url": "https://smtsjhr.github.io/BubbleRing/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/BaNvEwE",
        "github_url": "https://github.com/smtsjhr/BubbleRing"
    },
    "RecSlicer": {
        "url": "https://smtsjhr.github.io/RecSlicer/",
        "codepen_url": "https://codepen.io/smtsjhr/details/ExjEOyd",
        "github_url": "https://github.com/smtsjhr/RecSlicer",
        "style": "background-color: white;"
    },
    "FocusGrid": {
        "url": "https://smtsjhr.github.io/FocusGrid/",
        "codepen_url": "https://codepen.io/smtsjhr/details/ZEGLQjb",
        "github_url": "https://github.com/smtsjhr/FocusGrid",
        "style": "background-color: white;"
    },
    "FocusGrid_2": {
        "url": "https://smtsjhr.github.io/FocusGrid_2/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/yLNvJyE",
        "github_url": "https://github.com/smtsjhr/FocusGrid_2",
        "style": "background-color: white;"
    },
    "HarmonicSpiral": {
        "url": "https://smtsjhr.github.io/HarmonicSpiral/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/zYxjzrK",
        "github_url": "https://github.com/smtsjhr/HarmonicSpiral",
        "style": "background-color: white;"
    },
    "PixelWave": {
        "url": "https://smtsjhr.github.io/PixelWave/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/VwYxpVw",
        "github_url": "https://github.com/smtsjhr/PixelWave"
    },
    "PointChoreo": {
        "url": "https://smtsjhr.github.io/PointChoreo/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/PoqjbYO",
        "github_url": "https://github.com/smtsjhr/PointChoreo"
    },
    "PolyArch": {
        "url": "https://smtsjhr.github.io/PolyArch/",
        "codepen_url": "https://codepen.io/smtsjhr/pen/VwYxgZY",
        "github_url": "https://github.com/smtsjhr/PolyArch"
    },
    "PolyField": {
        "url": "https://smtsjhr.github.io/PolyField/",
        "codepen_url": "https://codepen.io/smtsjhr/details/xxbaBVv",
        "github_url": "https://github.com/smtsjhr/PolyField"
    }
};

function loadCanvas(imgs) {
    var iframe_element = document.getElementById("expanded_iframe");
    var section_element = document.getElementById("expanded_section");
    var title_element = document.getElementById("title");
    var codepenURL_anchor = document.getElementById("codepenURL");
    var githubURL_anchor = document.getElementById("githubURL");
    var link_section_element = document.getElementById("link_section");
    var look_text_element = document.getElementById("look_text");
    var background_iframe_element = document.getElementById("background_iframe")
    iframe_element.src = iframe_details[imgs.id]["url"];
    iframe_element.style = iframe_details[imgs.id]["style"];
    title_element.innerHTML = imgs.id;
    codepenURL_anchor.href = iframe_details[imgs.id]["codepen_url"];
    githubURL_anchor.href = iframe_details[imgs.id]["github_url"];
    link_section_element.style.display = "none";
    look_text_element.style.display = "none";
    background_iframe_element.style.display = "none";
    section_element.parentElement.style.display = "block";
    image_list = document.querySelectorAll("img");
    image_list.forEach(element => element.style = "");
    imgs.style = "box-shadow: 0 0 40px 0px rgba(255,255,255,1)";
}

function close_canvas() {
    var canvas_element = document.getElementById("canvas");
    var iframe_element = document.getElementById("expanded_iframe");
    var background_iframe_element = document.getElementById("background_iframe");
    var gallery_link_element = document.getElementById("gallery_link");
    image_list = document.querySelectorAll("img");
    image_list.forEach(element => element.style = "");
    iframe_element.src = "";
    canvas_element.style.display = "none";
    background_iframe_element.style.display = "block";
    gallery_link_element.click();    
}	

function link_action(a) {
    var background_iframe_element = document.getElementById("background_iframe");
    var link_section_element = document.getElementById("link_section");
    var canvas_container_element = document.getElementById("canvas");
    var look_text_element = document.getElementById("look_text");
    image_list = document.querySelectorAll("img");
    image_list.forEach(element => element.style = "");
    if (a.id == "links_link") {
        canvas_container_element.style.display = "none";
        link_section_element.style.display = "block";
        look_text_element.style.display = "block";
        background_iframe_element.style.display = "block";
    } else if (a.id == "gallery_link") {
        canvas_container_element.style.display = "none";
        link_section_element.style.display = "none";
        look_text_element.style.display = "none";
        background_iframe_element.style.display = "block";
    }
}

function scroll_right() {
    var gallery_element = document.getElementById("gallery");
    gallery_element.scrollBy({left: 330, behavior: 'smooth'});  
}

function scroll_left() {
    var gallery_element = document.getElementById("gallery");
    gallery_element.scrollBy({left: -330, behavior: 'smooth'});  
}

function scroll_action(btn) {
    
    if (btn.id == "right_scroll") {
        scroll_right();
    }
    else if (btn.id == "left_scroll") {
        scroll_left();;
    }
}

