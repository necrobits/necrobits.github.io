const org = 'necrobits';

function displayMembers() {
    fetch(`https://api.github.com/orgs/${org}/members`)
        .then(r => r.json())
        .then(members => {
            members.forEach(m => {
                $('#team-members').append(`
<a href="${m.html_url}"><img class="member-avatar" src="${m.avatar_url}"/></a> 
`)
            });
            $('#team-members').animate({opacity: 1, bottom: 20}, 500);
        });
}

function startAnimation(onComplete) {
    const bgFull = $('#anim_bg_full');
    const bgSlashed = $('#anim_bg_slashed');
    const ninja = $('#anim_ninja');
    const text = $('#anim_text');
    bgFull.css('top', '+=100px');
    ninja.css('left', '+=50px');
    bgFull.animate({opacity: 1, top: '-=100px'}, 1000, function () {
        ninja.animate({opacity: 1, left: '-=50px'}, 500, function () {
            bgSlashed.animate({opacity: 1}, 10, function () {
                bgFull.animate({opacity: 0}, 300, function () {
                    text.animate({opacity: 1}, 1000, function () {
                        if (onComplete) {
                            onComplete();
                        }
                    });
                });
            })
        });
    });
}

particlesJS.load('particles-js', 'particles-config.json', function () {
    console.log('callback - particles.js config loaded');
    startAnimation(displayMembers);
});

