"use strict"

window.addEventListener('load', function () {

  console.log("DOM ready...");
  // Generate visible captions for images with alt text.
  // Only do this for the Writing (i.e. blog) pages
  function generateCaptions() {
    // Get the current page title
    let all = document.title.split("—");
    if (all.length > 1) {
      let title = all[1].trim().toLowerCase();
      if (title === "writing") {
        all = document.querySelectorAll("img[alt]:not(.dib)");
        all = Object.keys(all).map((e)=>{return all[e];});
        all.forEach((e)=>{
          let p = document.createElement('p');
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
    let e = document.getElementById("title");
    if (e) { e.className = "f5 f4-m f3-l fw1 lh-solid v-top mt0"; }
    // Date
    e = document.querySelector("#title ~ p");
    if (e) { e.className = "lh-solid"; }
    // Bibliography heading
    e = document.getElementById("bibliography");
    if (e) { e.className = "f5 f4-m f3-l fw1 lh-copy v-top mt0"; }
    // Bibliography paragraphs
    let all = document.querySelectorAll("#bibliography ~ p");
    for (var i=0; i<all.length; i++) {
      all[i].className = "f6 f5-ns typewriter";
    }
    // Bibliography links in paragraphs
    all = document.querySelectorAll("#bibliography ~ p > a");
    for (var i=0; i<all.length; i++) {
      all[i].className = "bb b--dashed bl-0 bt-0 br-0 black-90 hover-red link ma0 typewriter";
    }
    // Add hover/focus styling for images on 'Writing' and 'Painting' pages
    all = document.querySelectorAll("a.writing,a.painting");
    for (var i=0; i<all.length; i++) {
      all[i].addEventListener('focus', (event) => {
        let src = event.target.firstElementChild.src;
        event.target.firstElementChild.src = src.replace(/white.jpg/g, "red.jpg");
      });
      all[i].addEventListener('blur', (event) => {
        let src = event.target.firstElementChild.src;
        event.target.firstElementChild.src = src.replace(/red.jpg/g, "white.jpg");
      });
      all[i].firstElementChild.addEventListener('mouseover', (event) => {
        let src = event.target.src;
        event.target.src = src.replace(/white.jpg/g, "red.jpg");
      });
      all[i].firstElementChild.addEventListener('mouseout', (event) => {
        let src = event.target.src;
        event.target.src = src.replace(/red.jpg/g, "white.jpg");
      });
    }
  }
  fixCSS();

  // Underline the Writing nav link if we're on a blog post, and do
  // the same for Painting nav link when we're on a painting page
  function underlineCurrentPage() {
    // Get the current page title
    let el = null;
    let all = document.title.split("—");
    if (all.length > 1) {
      let title = all[1].trim().toLowerCase();
      if (title === "writing" || title === "paintings" || title === "exhibitions") {
        el = document.querySelector(`nav a[href*=${title}]`);
        if (el) {
          el.classList.add("pb1");
          el.classList.add("bb");
          el.classList.add("bw1");
        }
      }
    } else {
      el = document.querySelector(`nav a[href*='index.html']`);
      if (el) {
        el.classList.add("pb1");
        el.classList.add("bb");
        el.classList.add("bw1");
      }
    }
  }
  underlineCurrentPage();

});

var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.georgechapman.studio"]);
_paq.push(["setDomains", ["*.georgechapman.studio","*.gnchapman.com"]]);
_paq.push(["enableCrossDomainLinking"]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://matomo.gnchapman.com/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
