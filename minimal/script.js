window.onload = draw;

// Globalne varijable za vreme
let hours = 10;
let minutes = 10;
let seconds = 0;
let lastUpdate = 0; // Postavi na 0

function draw() {
    let myCanvas = document.getElementById("my-canvas");
    if (myCanvas.getContext) {
        let ctx = myCanvas.getContext('2d');
        //
        // Prvo nacrtaj sat sa početnim vremenom
        drawClock(ctx);
        // Postavi lastUpdate na trenutno vreme
        lastUpdate = Date.now();
        //
        // Onda pokreni update
        update(ctx);
    } else {
        alert("Canvas is not supported.");
    }
}

function drawClock(ctx) {
    ctx.clearRect(0, 0, 300, 300);

    // Crtanje kruga
    ctx.save();
    ctx.beginPath();
    ctx.arc(150, 150, 120, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    // Računanje uglova za kazaljke
    const secondAngle = seconds * Math.PI / 30;
    const minuteAngle = minutes * Math.PI / 30;
    const hourAngle = hours * Math.PI / 6;

    // Crtanje kazaljki
    drawHand(ctx, secondAngle, 115);
    drawHand(ctx, minuteAngle, 95);
    drawHand(ctx, hourAngle, 70);
}

function update(ctx) {
    let now = Date.now();

    // Ažuriranje vremena - samo jednom u sekundi
    if (now - lastUpdate >= 1000) {
        lastUpdate = now;

        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
                if (hours >= 12) {
                    hours = 0;
                }
            }
        }
    }

    // Nacrtaj sat
    drawClock(ctx);

    requestAnimationFrame(() => {
        update(ctx);
    });
}

function drawHand(ctx, angle, length) {
    ctx.save();
    ctx.translate(150, 150);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}