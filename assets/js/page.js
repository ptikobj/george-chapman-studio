(function(document, window, domIsReady, undefined) {

    // Check if DOM is ready
    domIsReady(function() {

        // Debug - Write something to the console
        //console.log("DOM ready...");
        
        // Generate visible captions for images with alt text.
        // Only do this for the Writing (i.e. blog) pages
        function generateCaptions() {
            // Get the current page title
            var all = document.title.split("—");
            if (all.length > 1) {
                var title = all[1].trim().toLowerCase();
                if (title === "writing") {
                    var all = document.querySelectorAll("img[alt]:not(.dib)");
                    all = Object.keys(all).map((e)=>{return all[e];});
                    all.forEach((e)=>{
                        var p = document.createElement('p');
                        p.className = "f6 f5-ns measure typewriter";
                        p.innerText = e.alt;
                        e.parentNode.insertBefore(p, e.nextSibling);
                    });
                }
            }
        }
        generateCaptions();
        
        // Fix the CSS styling for blog posts
        function fixCSS() {
            // Title heading
            var e = document.getElementById("title");
            // DEBUG
            //if (e) { e.className = "f5 f4-m f3-l fw1 lh-copy v-top mt0"; }
            if (e) { e.className = "f5 f4-m f3-l fw1 lh-solid v-top mt0"; }
            // Date
            var e = document.querySelector("#title ~ p");
            // DEBUG
            //if (e) { e.className = "f6 f5-m f5-l typewriter"; }
            if (e) { e.className = "lh-solid"; }
            // Bibliography heading
            var e = document.getElementById("bibliography");
            if (e) { e.className = "f5 f4-m f3-l fw1 lh-copy v-top mt0"; }
            // Bibliography paragraphs
            var all = document.querySelectorAll("#bibliography ~ p");
            for (var i=0; i<all.length; i++) {
                all[i].className = "f6 f5-ns typewriter";
            }
            // Bibliography links in paragraphs
            var all = document.querySelectorAll("#bibliography ~ p > a");
            for (var i=0; i<all.length; i++) {
                all[i].className = "bb b--dashed bl-0 bt-0 br-0 black-90 hover-red link ma0 typewriter";
            }
            // Add hover/focus styling for images on 'Writing' and 'Painting' pages
            var all = document.querySelectorAll("a.writing,a.painting");
            for (var i=0; i<all.length; i++) {
                all[i].addEventListener('focus', (event) => {
                    //event.target.firstElementChild.style.webkitFilter = "invert(100%)";
                    var src = event.target.firstElementChild.src;
                    event.target.firstElementChild.src = src.replace(/white.jpg/g, "red.jpg");
                });
                all[i].addEventListener('blur', (event) => {
                    //event.target.firstElementChild.style.webkitFilter = "";
                    var src = event.target.firstElementChild.src;
                    event.target.firstElementChild.src = src.replace(/red.jpg/g, "white.jpg");
                });
                all[i].firstElementChild.addEventListener('mouseover', (event) => {
                    var src = event.target.src;
                    event.target.src = src.replace(/white.jpg/g, "red.jpg");
                });
                all[i].firstElementChild.addEventListener('mouseout', (event) => {
                    var src = event.target.src;
                    event.target.src = src.replace(/red.jpg/g, "white.jpg");
                });
            }
        }
        fixCSS();

        // Underline the Writing nav link if we're on a blog post, and do
        // the same for Painting nav link when we're on a painting page
        function underlineCurrentPage() {
            // Get the current page title
            var all = document.title.split("—");
            if (all.length > 1) {
                var title = all[1].trim().toLowerCase();
                if (title === "writing") {
                    var el = document.querySelector(`nav a[href*=${title}]`);
                    if (el) {
                        el.classList.add("pb1");
                        el.classList.add("bb");
                        el.classList.add("bw1");
                    }
                } else if (title === "paintings") {
                    var el = document.querySelector(`nav a[href*=${title}]`);
                    if (el) {
                        el.classList.add("pb1");
                        el.classList.add("bb");
                        el.classList.add("bw1");
                    }
                }
            }
        }
        underlineCurrentPage();
        
        // Cycle through the images on the landing page
        /*
        var images = ["DSC_0752_edit.jpg", "DSC_0766_edit.jpg"];
        function changeImage() {
            var img = document.querySelector("img");
            var src = img.src.split("/");
            src = src[src.length-1];
            var idx = images.indexOf(src);
            idx = (idx+1) % images.length;
            img.src = `assets/img/${images[idx]}`;
            setTimeout(changeImage, 3000);
        }
        changeImage();
        */

   });

})(document, window, domIsReady);
