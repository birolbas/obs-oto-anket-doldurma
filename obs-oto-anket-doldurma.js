function markAllFrames(win) {
    try {
        var radios = win.document.querySelectorAll('input[type="radio"][value="5"]');
        radios.forEach(function (radio) {
            radio.checked = true;
            radio.dispatchEvent(new Event('click', { bubbles: true }));
            radio.dispatchEvent(new Event('change', { bubbles: true }));
        });
        if (radios.length > 0) {
            console.log(win.location.href, '->', radios.length, 'soru işaretlendi');
        }
    } catch (e) {
        // cross-origin frame, erişilemiyor, atla
    }
    for (var i = 0; i < win.frames.length; i++) {
        markAllFrames(win.frames[i]);
    }
}
markAllFrames(window.top);
