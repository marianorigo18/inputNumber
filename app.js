document.addEventListener('DOMContentLoaded', () => {
    capturaElements();
})

const capturaElements = () => {
    const form = document.querySelector('#form');
    asignarEnvent(form);
}

const asignarEnvent = (form) => {
    form.addEventListener('submit', saludar);
}

const saludar = (e) => {
    e.preventDefault();
    console.log(e.target.children[0].value);
    form.reset();
}
/*quiero agregar un Event listener be able to asignement evenet all buttons*/