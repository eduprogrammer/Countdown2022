This is a project that provides a countdown to the new year (2022)
with Javascript, CSS and HTML5 technologies.

This project has a template file (template.html),
for you see how the countdown works.

You can reuse the javascript file in your projects
for implement custom counters.

#For use that, you must read the following instructions:

    1. Copy the HTML code from the project inside the <header> tag on your HTML page and before the close tag. Eg.:

        (...)
        <header>
            <div class="new_year_counter">
                <table class="nyc_table" cellspacing="0">
                    <tr>
                        <th class="tits" colspan="3">Contagem Regressiva - 2022</th>                        
                    </tr>
                    <tr>
                        <th colspan="3" class="remain">Falta(m)</th>
                    </tr>
                    <tr>
                        <td class="nyc_n" id="nyc_hour">00</td>
                        <td class="nyc_n" id="nyc_min">00</td>
                        <td class="nyc_n" id="nyc_sec">00</td>
                    </tr>
                    <tr>
                        <td class="nyc_sub">Hora(s)</td>
                        <td class="nyc_sub">Minuto(s)</td>
                        <td class="nyc_sub">Segundo(s)</td>
                    </tr>
                    <tr>
                        <th colspan="3" class="credit">Ver Página Oficial</th>
                    </tr>
                </table>
            </div>
        </header>

    2. Place the following instructions inside the <head> tag of your HTML page and before the close tag. Eg.:

    (...)
    <head>
        <link rel="stylesheet" type="text/css" href="new_year_style.css">
        <script src="new_year_counter.js" type="text/javascript"></script>
    </head>
    (...)

    3. Add the following files to your CSS and JS folders. If you with to place them
        on another directory, just change the path above in subitem 3.

        CSS: new_year_style.css (Download it in the project folder);
        Javascript: new_ear_counter.js (Download it in the project folder).

    4. In your main HTML page, copy and paste the following code in the <body> tag:

        (...)
        <body>
            let countYear = new CountNewYear();

            countYear.remains(function (hr, min, sec) {
        
                (action1)    

            }, function () {
                (action3)
            });

        </body>
        (...)

    5. Replace the (action1) with your desired action: Eg.:
            
            document.getElementById('your_element_id').innerText = hr; (this places the hour content on your html id).

            hr: hour
            min: minute
            sec: second

    6. Replace the (action2) with your function to celebrate the new year arrival.

*/

Copyright 2021. Eduardo Programador
All rights reserved