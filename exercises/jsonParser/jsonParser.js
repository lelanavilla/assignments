// 

$(document).ready(function() {

            $("#getMessage").on("click", function() {
                        $.getJSON("https://api.vschool.io:6543/pokemon.json", function(json) {
                            $(".message").html(JSON.stringify(json));
                        });
                        json.forEach(function(val) {
                            var keys = Object.keys(val);
                            html += "<div class = 'todo-list>";
                            keys.forEach(function(key) {
                                html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
                            });
                            html += "</div><br>";
                            console.log(html);
                        })