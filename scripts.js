function loadContent(hash) {
    if (hash === '') {
        hash = 'home'
    }
    $('section').load('pages/' + hash + '.html')
}

$(window).on('hashchange', function() {
    loadContent(location.hash.slice(1))
})

var url = window.location.href
var hash = url.substring(url.indexOf('#') + 1)

if (hash == url) {
    hash = 'home'
}

$('header').load('pages/header.html')
$('section').load('pages/' + hash + '.html')