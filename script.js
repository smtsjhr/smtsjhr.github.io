
var sketch_details;
const sketchdata_url = 'https://raw.githubusercontent.com/smtsjhr/smtsjhr.github.io/master/sketchdata.json';
const main_body_element = document.getElementById("main_body");
const background_element = document.getElementById("background");
const sketch_landing = document.getElementById("sketch_landing");
const sketch_video = document.getElementById("sketch_video");
const video_view_link = document.getElementById("video_view_link")
const view_link = document.getElementById("view_link")
const title_element = document.getElementById("title");
const codepenURL_anchor = document.getElementById("codepenURL");
const githubURL_anchor = document.getElementById("githubURL");
const link_section_element = document.getElementById("link_section");
const look_text_element = document.getElementById("look_text");
const look_link_element = document.getElementById("look_link");
const footer_element = document.getElementById("footer");
const image_list = document.querySelectorAll("img");
const video_list = document.querySelectorAll("video");
const gallery_element = document.getElementById("gallery");


document.addEventListener("DOMContentLoaded", function() {
    fetch(sketchdata_url)
        .then(response => response.json())
        .then(data => {sketch_details = data; init(sketch_details["order"]);});
});

function init(sketch_order) {
    buildGallery(sketch_order);   
    lazyVideo("video.lazy");
    hash_handler();
    window.addEventListener("hashchange", function() {
        hash_handler();
    }, false);
}

function buildGallery(sketch_order) {
    num_sketches = sketch_order.length;
    for(let i = 0; i < num_sketches; i++) {
        sketch = sketch_order[i];
        gallery_element.insertAdjacentHTML('beforeend', addSketchHTML(sketch));
    }
}

function addSketchHTML(sketchID) {
        let htmlstring = `<div class="column"><a href="#${sketchID}"><video class="lazy" autoplay muted loop playsinline alt="${sketchID}" id="${sketchID}_img" onclick="loadCanvas(this);" poster="/GalleryThumbs/${sketchID}_thumb.png"><source data-src="/GalleryThumbs/${sketchID}_300.mp4" type="video/mp4"></video></a></div>`;
        return htmlstring;
}

function lazyVideo(videoclass) {
    var lazyVideos = [].slice.call(document.querySelectorAll(videoclass));

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
}

function hash_handler() {
    var hash = window.location.hash.substring(1);
        
        if (hash.slice(hash.length - 1) == '/') {
            hash = hash.slice(0,hash.length - 1);
        }
        
        if (hash == '') {
            //do nothing
        }
        else if (hash == "links" || hash == "links/" || hash == "look" || hash == "look/") {
            set_page(hash);
        }
        else {
            sketch_landingpage(hash);
        }
}

function sketch_landingpage(id) {

    sketch_video.poster = "GalleryThumbs/"+id+"_thumb.png";
    sketch_video.src = "GalleryThumbs/"+id+"_300.mp4";
    video_view_link.href = sketch_details[id]["url"];
    view_link.href = sketch_details[id]["url"];
    title_element.innerHTML = id;
    codepenURL_anchor.href = sketch_details[id]["codepen_url"];
    githubURL_anchor.href = sketch_details[id]["github_url"];
    link_section_element.style.display = "none";
    look_text_element.style.display = "none";
    background_element.style.display = "none";
    sketch_landing.style.display = "block";
    main_body_element.style.display = "none";
    video_list.forEach(element => element.style = "");
 
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function loadCanvas(preview_video) {   
    var id = preview_video.id.replace('_img', '');
    sketch_landingpage(id);  
}

function close_canvas() {
    video_list.forEach(element => element.style = "");
    look_link_element.click();
}

function set_page(id) {
    image_list.forEach(element => element.style = "");
    if (id == "links") {
        sketch_landing.style.display = "none";
        link_section_element.style.display = "block";
        look_text_element.style.display = "block";
        footer_element.style.display = "block";
        background_element.style.display = "block";
        main_body_element.style.display = "block";
    } else if (id == "look") {
        sketch_landing.style.display = "none";
        link_section_element.style.display = "none";
        look_text_element.style.display = "none";
        footer_element.style.display = "none";
        background_element.style.display = "none";
        main_body_element.style.display = "block";
    }
}

function link_action(a) {
    var id = a.id.replace('_link', '');
    if (id == "footer") {
        window.scrollTo(0,0);
    }
    else {
        set_page(id);
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

function hi() {
    if ( contact == false ) {
        contact = true;
        let dt = 100;
        let p = 7;
        let name = 'smtsjhr';
        let address = ['@','p','m','.','m','e']
        var name_anchor = document.getElementById("name_link");
        for (let i = 0; i < 12+p; i++) {
            setTimeout(function() {
                if ( i<6 ) {
                    name = name.concat(address[i]);
                    name_anchor.innerHTML = name;
                }
                else if (i < 6 + p) { }
                else if (6+p < i < 12+p) {
                    name = name.slice(0, -1);
                    name_anchor.innerHTML = name;
                    if ( i == 11+p) {
                        contact = false;
                    }
                }          
            }, dt*(i));
        }
    }
}
