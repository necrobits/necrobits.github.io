
const org = 'neural-gi';
function displayMembers(){
    fetch(`https://api.github.com/orgs/${org}/members`)
        .then(r => r.json())
        .then(members => {
            members.forEach(m => {
                $('#team-members').append(`
<a href="${m.html_url}"><img class="member-avatar" src="${m.avatar_url}"/></a> 
`)
            });
            $('#team-members').animate({opacity: 1, bottom:10}, 700);
        });
}

particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('callback - particles.js config loaded');
});
$('#welcome-text').animate({opacity: 1, top: '39%'}, 700, function(){
    $('#welcome-text-subscript').animate({opacity: 0.5}, 500, displayMembers);
});
