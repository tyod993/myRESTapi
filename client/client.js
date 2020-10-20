console.log("Hello world");

const form = document.querySelector('form');
const loading = document.querySelector('.loading');

loading.style.display = 'none';

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    loading.style.display = '';
    form.style.display = 'none';
    const formData = FormData(form);

    const liftName = formData.get('name');
    const reps = formData.get('reps');
    const rir = formData.get('rir');
    const set = formData.get('set');

    const input = {
        liftName, reps, rir, set,
    };

    
})