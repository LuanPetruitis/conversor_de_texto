     var text = document.getElementById('texto');
     var campo = document.getElementById('campo');

     function convertMaiusc() {
         var string = text.value.toUpperCase();
         campo.innerHTML += `
                <div>
                    <p>${string}</p>
                </div>
            `;
     };

     function convertMinusc() {
         var string = text.value.toLowerCase();
         campo.innerHTML += `
                <div>
                    <p>${string}</p>
                </div>
            `;
     };

     function primeiraMaiusc() {
         var string = text.value.split(" ").map((string) => string[0].toUpperCase() + string.slice(1).toLowerCase());

         campo.innerHTML += `
                    <div>
                        <p>${string.join(' ')}</p>
                    </div>
                `;

     };