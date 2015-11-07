window.onload = function() {
//document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('homegen-btn').addEventListener('click',
        function() {
            var min = parseInt(document.getElementById('homegen-min').value);
            var max = parseInt(document.getElementById('homegen-max').value);
            var rand = new Uint32Array(1);
            window.crypto.getRandomValues(rand);

            var result = rand[0]%(max-min+1)+min;
            var span = document.getElementById('homegen-result');
            var txt = document.createTextNode(result)
            span.innerText = txt.textContent;
        }
    );
};
