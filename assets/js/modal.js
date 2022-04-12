// Function to update the artwork modal image and captions
// Accepts the img element to update the modal with
// and the modal element as arguments
updateArtworkModal = function(el, modal) {

    // Check whether target element is the link or the image node
    if (el.nodeName === "A") {
      var img = el.querySelector("img");
    } else {
      var img = el;
    }

    // Populate the caption spans (title, year, medium, size)
    modal.querySelector("img").src = img.src;
    modal.querySelector("img").alt = img.alt;
    modal.querySelector("img").dataset.index = img.dataset.index;
    var all = modal.querySelectorAll(".artwork-title,.artwork-year,.artwork-medium,.artwork-size");
    for (var i = 0; i < all.length; i++) {
        if (all[i].classList.contains("artwork-title")) {
            all[i].innerText = img.dataset.title;
        }
        else if (all[i].classList.contains("artwork-year")) {
            all[i].innerText = img.dataset.year;
        }
        else if (all[i].classList.contains("artwork-medium")) {
            all[i].innerText = img.dataset.medium;
        }
        else if (all[i].classList.contains("artwork-size")) {
            all[i].innerText = img.dataset.size;
        }
    }

};

// Function to close artwork modal if open
closeArtworkModal = function () {
        
    // Find the modal, check that it's not hidden
    var modal = document.getElementById("artwork-modal-container");
    if (!modal.classList.contains("dn")) {
        modal.classList.add("dn");
        modal.setAttribute("aria-modal", "false")

        // Remove the image src and caption info
        modal.querySelector("img").setAttribute("src", "");
        modal.querySelector("img").dataset.index = "";
        modal.querySelector(".artwork-title").innerText = "";
        modal.querySelector(".artwork-year").innerText = "";
        modal.querySelector(".artwork-medium").innerText = "";
        modal.querySelector(".artwork-size").innerText = "";

        // Show the background page, both visually and with ARIA
        var gallery = document.getElementById("gallery");
        if (gallery.classList.contains("dn")) {
            gallery.classList.remove("dn");
            gallery.removeAttribute("aria-hidden", "true");
        }
        if (!gallery.classList.contains("flex")) {
            gallery.classList.add("flex");
        }
        
        // Restore focus to the last element that had it
        if (document.querySelector(".last-focus")) {
            var target = document.querySelector(".last-focus");
            target.classList.remove("last-focus");
            target.focus();
        }
    }
};

// Function to open artwork modal if closed
// Also updates the image and caption using the src and alt text
// of the <img> that spawned the modal
openArtworkModal = function (el) {

    // Find the modal, check that it's currently hidden
    var modal = document.getElementById("artwork-modal-container");
    if (modal.classList.contains("dn")) {
        
        // Update the modal with the new image
        updateArtworkModal(el, modal);

        // Place class on element that triggered event
        // so we know where to restore focus when the modal is closed
        el.classList.add("last-focus");

        // Hide the background page, both visually and with ARIA
        var gallery = document.getElementById("gallery");
        if (!gallery.classList.contains("dn")) {
            gallery.classList.add("dn");
            gallery.setAttribute("aria-hidden", "true");
        }
        if (gallery.classList.contains("flex")) {
            gallery.classList.remove("flex");
        }

        // Add the classes and attributes to make the modal visible
        modal.classList.remove("dn");
        modal.setAttribute("aria-modal", "true");
        modal.querySelector("img").focus();
    }
    
};

// Function to cycle forwards or backwards through modal images
cycleArtworkModalImage = function(direction) {
        
    // Find the modal, the current image and all other available images
    var modal = document.querySelector("[aria-modal='true']");
    var currImg = modal.querySelector("img");
    var allImgs = document.querySelectorAll("#gallery img");

    // Error check: if we can't find any images, exit the function
    if (allImgs.length < 1) {
        return;
    }

    // Error check: if the modal is hidden, exit the function
    if (modal.classList.contains("hidden")) {
        return;
    }

    // Check current modal image index
    var currIdx = parseInt(currImg.dataset.index);

    // If the image is the last one in the collection,
    // reset the counter and show the first image
    if (direction === NEXT_IMAGE) {
        if (currIdx === allImgs.length) {
            currIdx = 1;
        } else {
            currIdx++;
        }
    } else {
        if (currIdx === 1) {
            currIdx = allImgs.length;
        } else {
            currIdx--;
        }
    }
    
    // Update the modal
    nextImg = allImgs[currIdx-1];
    updateArtworkModal(nextImg, modal);
};
