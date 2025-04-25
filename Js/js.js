    const frames = [
    ["red", "pink", "white", "white", "white", "white", "white"],
    ["pink", "red", "pink", "white", "white", "white", "white"],
    ["white", "pink", "red", "pink", "white", "white", "white"],
    ["white", "white", "pink", "red", "pink", "white", "white"],
    ["white", "white", "white", "pink", "red", "pink", "white"],
    ["white", "white", "white", "white", "pink", "red", "pink"],
    ["white", "white", "white", "white", "white", "pink", "red"],
    ["white", "white", "white", "white", "pink", "red", "pink"],
    ["white", "white", "white", "pink", "red", "pink", "white"],
    ["white", "white", "pink", "red", "pink", "white", "white"],
    ["white", "pink", "red", "pink", "white", "white", "white"],
    ["pink", "red", "pink", "white", "white", "white", "white"],
    ["red", "pink", "white", "white", "white", "white", "white"]
    ];

    let cells = document.getElementsByClassName('light');
    let frame = 0;

    const animate = () => {
    let current = frames[frame];

    for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = current[i];
}

    frame++;
    if (frame >= frames.length) {
    frame = 0;
}
};

    setInterval(animate, 150);
