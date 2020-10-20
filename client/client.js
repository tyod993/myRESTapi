console.log("Hello world");

const form = document.querySelector('form');
const loading = document.querySelector('.loading');

loading.style.display = 'none';

form.addEventListener('submit', async (event) =>{
    event.preventDefault();
    const formData = new FormData(form);

    const liftName = formData.get('name');
    const reps = formData.get('reps');
    const rir = formData.get('rir');
    const set = formData.get('set');

    loading.style.display = '';
    form.style.display = 'none';

    const input = {
        liftName, reps, rir, set,
    };

    console.log(input);

    await fetch(('http://localhost:5000/save'), {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(input),
        headers: {'Content-Type' : 'application/json'},
    })
    
})