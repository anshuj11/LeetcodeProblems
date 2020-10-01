var arrangeWords = function(text) {
    text = text.toLowerCase().split(' ')
    text.sort( (a,b) => a.length - b.length)
    text = text.join(' ')
    let a = text[0]
    a = a.toUpperCase()
    text = a + text.slice(1)
    return text
};
