function openWindow() {
    myWindow = window.open(person.fullName);
} 
    const person = {
        fullName = "Makabongwe",
        surname = "Metuso",
        occupation = "Software Developer",
        company = [UVU Africa: Capaciti],
        fullDetail = function details (){
            return "'My name is ' this.fullName + ' ' + this.surname + ', and I'm a ' + this.occupation + 'at' + this.company"
        }
    };
    function myFunction() {
        let person = prompt("Please enter your name", "Harry Potter");
        if (person != null) {
          document.getElementById("demo").innerHTML =
          "Hello " + person + "! How are you today?";}}
