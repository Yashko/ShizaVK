// ==UserScript==
// @name         Shiza
// @version      0.1
// @author       Yashko
// @match        http*://vk.com/*
// ==/UserScript==
(function() {
    document.body.addEventListener("DOMSubtreeModified", function(e) {
        if (document.getElementById('shiza')) { return; }
        var userID = vk.id;
        var ava = document.getElementById('profile_photo_link');
        var datPageID = ava.getAttribute('href').split('photo')[1].split('_')[0];
        if (userID == datPageID) {
            var actions = document.getElementById('profile_actions');
            var el = document.createElement('div');
            el.innerHTML = '<a href="/im?sel=' + userID + '" id="shiza"><button class="flat_button profile_btn_cut_left">Send a message</button></a>';
            actions.insertBefore(el, actions.firstChild);
        }
    });
})();