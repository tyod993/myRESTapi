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
        "liftname" :liftName, "reps":reps, "rir":rir, "set":set,
    };

    console.log(input);

    fetch(('http://localhost:5000/save'), {
        method: 'POST',
        //mode: 'no-cors',
        //credentials: "omit",
        body: JSON.stringify(input),
        headers: {'Content-Type' : 'application/json'},
    });
    /*.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
*/
    
})