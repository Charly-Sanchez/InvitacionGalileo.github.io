// Efecto gradiente animado al texto principal, NO iluminación letra por letra
// El efecto ahora solo se controla por CSS, así que el JS no manipula el texto

const btnHorario = document.getElementById('btnHorario');
const modalHorario = document.getElementById('modalHorario');
const modalBg = document.getElementById('modalBg');
const closeModal = document.getElementById('closeModal');

btnHorario.addEventListener('click', function(e) {
    modalHorario.style.display = 'block';
});

modalBg.addEventListener('click', function(e) {
    if (e.target === modalBg) {
        cerrarModalHorario();
    }
});

closeModal.addEventListener('click', cerrarModalHorario);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarModalHorario();
        cerrarModalImagen();
    }
});

function cerrarModalHorario() {
    modalBg.style.opacity = '0';
    setTimeout(() => {
        modalHorario.style.display = 'none';
        modalBg.style.opacity = '1';
    }, 300);
}

// Imagen modal
const btnVerImagen = document.getElementById('btnVerImagen');
const modalImagen = document.getElementById('modalImagen');
const modalBgImagen = document.getElementById('modalBgImagen');
const closeImagen = document.getElementById('closeImagen');

btnVerImagen.addEventListener('click', () => {
    modalImagen.style.display = 'block';
    setTimeout(() => modalBgImagen.style.opacity = '1', 10);
});

modalBgImagen.addEventListener('click', (e) => {
    if (e.target === modalBgImagen) {
        cerrarModalImagen();
    }
});

closeImagen.addEventListener('click', cerrarModalImagen);

function cerrarModalImagen() {
    modalBgImagen.style.opacity = '0';
    setTimeout(() => {
        modalImagen.style.display = 'none';
    }, 300);
}

// Dibujos arcoiris y círculos decorativos
function dibujarSemicirculos(canvas, colores, lineWidths) {
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const radioExterno = canvas.width;
    const radios = [
        radioExterno - lineWidths[0] / 2,
        radioExterno - lineWidths[0] - lineWidths[1] / 2,
        radioExterno - lineWidths[0] - lineWidths[1] - lineWidths[2] / 2
    ];

    const centroX = canvas.width;
    const centroY = canvas.height;

    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(centroX, centroY, radios[i], Math.PI, Math.PI * 1.5);
        ctx.strokeStyle = colores[i];
        ctx.lineWidth = lineWidths[i];
        ctx.shadowColor = colores[i];
        ctx.shadowBlur = 12;
        ctx.stroke();
    }
    ctx.shadowBlur = 0;
}

function dibujarCirculos(canvas, colores, lineWidths) {
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const radioExterno = canvas.width * 0.35;
    const radios = [
        radioExterno,
        radioExterno * 0.7,
        radioExterno * 0.4
    ];

    const centroX = canvas.width * 0.5;
    const centroY = canvas.height * 0.5;

    for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(centroX, centroY, radios[i], 0, Math.PI * 2);
        ctx.strokeStyle = colores[i];
        ctx.lineWidth = lineWidths[i];
        ctx.shadowColor = colores[i];
        ctx.shadowBlur = 10;
        ctx.stroke();
    }
    ctx.shadowBlur = 0;
}

const colores = ['#FFE501', '#FFFFFF', '#FFE501'];
const lineWidths = [12, 26, 12];

function dibujarTodo() {
    dibujarSemicirculos(document.getElementById('arcoiris'), colores, lineWidths);
    dibujarCirculos(document.getElementById('circulos'), colores, lineWidths);
}

window.addEventListener('load', dibujarTodo);
window.addEventListener('resize', dibujarTodo);