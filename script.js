
var sketch_details;
var current_sketch;

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
const henURL_anchor = document.getElementById("henURL");
const NFT_element = document.getElementById("NFTlink");
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

function set_hash(id) {
    if(history.pushState) {
        history.pushState(null, null, `#${id}`);
    }
    else {
        location.hash = `#${id}`;
    }
}

function sketch_landingpage(id) {
    current_sketch = id;
    let details = sketch_details[id];
    sketch_video.poster = "GalleryThumbs/"+id+"_thumb.png";
    sketch_video.src = "GalleryThumbs/"+id+"_300.mp4";
    video_view_link.href = details["url"];
    view_link.href = details["url"];
    title_element.innerHTML = id;
    codepenURL_anchor.href = details["codepen_url"];
    githubURL_anchor.href = details["github_url"];
    if (!(details["hen_url"] == undefined) ) {
        henURL_anchor.href = details["hen_url"];
        NFT_element.style.display = "block";
    }
    else {
        henURL_anchor.href = " ";
        NFT_element.style.display = "none";
    }
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
    let video_element = document.getElementById(`${current_sketch}_img`);
    video_element.scrollIntoView({inline : "center"});
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


function scroll_action_landing(btn) {
    if (btn.id == "right_scroll_landing") {
        let new_id = next_sketch(current_sketch);
        sketch_landingpage(new_id);
        set_hash(new_id);
    }
    else if (btn.id == "left_scroll_landing") {
        let new_id = previous_sketch(current_sketch);
        sketch_landingpage(new_id);
        set_hash(new_id);
    }
}

function next_sketch(id) {
    let sketch_list = sketch_details["order"];
    let list_length = sketch_list.length;
    let current_id = id;
    let current_index = sketch_list.indexOf(current_id);
    let next_index = (current_index + 1)%list_length;
    let next_id = sketch_list[next_index];
    return next_id;
}

function previous_sketch(id) {
    let sketch_list = sketch_details["order"];
    let list_length = sketch_list.length;
    let current_id = id;
    let current_index = sketch_list.indexOf(current_id);
    let previous_index = (((current_index - 1)%list_length)+list_length)%list_length;
    let previous_id = sketch_list[previous_index];
    return previous_id;
}

var contact = false;

function hi() {
    var name_anchor = document.getElementById("name_link");
    if ( contact == false ) {
        contact = true;
        let dt = 100;
        let p = 7;
        let name = 'smtsjhr';
        let address = ['@','p','m','.','m','e','🤫']
        name_anchor.href = "mailto:smtsjhr@pm.me";
        name_anchor.rel= "noopener noreferrer";
        name_anchor.target = "_blank";
        for (let i = 0; i < 15+p; i++) {
            setTimeout(function() {
                if ( i<7 ) {
                    name = name.concat(address[i]);
                    name_anchor.innerHTML = name;
                }
                else if (i < 7 + p) { }
                else if (7+p < i < 15+p) {
                    name = name.slice(0, -1);
                    name_anchor.innerHTML = name;
                    if ( i == 14+p) {
                        contact = false;
                        name_anchor.href = "https://smtsjhr.com/";
                        name_anchor.rel= "";
                        name_anchor.target = "";
                    }
                }          
            }, dt*(i));
        }
    }
}
