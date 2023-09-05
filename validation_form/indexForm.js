const inputs = document.querySelectorAll('input');
const patterns ={
    username: /^[a-z]\d{5,8}/i,
    cellphone:/^\d{10}$/,
    password:/^[\w@-]{8,20}$/,
    email:/^[(a-z)\d\.-]+@([[a-z]\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    slug: /^[a-z]\d-$/
}
//validation function
function validate(field, regex){
    console.log(regex.test(field.value));
}
if (regex.test(field.value)){
    console.log(field.className = 'valid');
}
else {field.className = 'invalid'}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    
});
});


