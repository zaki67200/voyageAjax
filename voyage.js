window.addEventListener("DOMContentLoaded", function(event) {


            const apiList1 = document.querySelector('.container1');
            const apiList2 = document.querySelector('.container2');
            const apiList3 = document.querySelector('.container3');
            const apiList4 = document.querySelector('.container4');
            const apiList5 = document.querySelector('.container5');

            var ajx = new XMLHttpRequest();
            ajx.open('GET', 'https://arfp.eu/dataset/voyages.json', true);
            ajx.onload = function() {
                if (this.status === 200) {
                    var json = JSON.parse(this.responseText);


                    {
                        apiList1.innerHTML +=
                                              '<div class ="titre"><h1>' + json[0].titre +'</h1>'+
                                              '<h2>' +'Départ de'+' '+ json[0].depart +'</h2>'+
                                              '<h2>' +'Destination'+' '+ json[0].destination +'</h2>'+
                                              '<h3>' + json[0].nombre_jours +' '+'jours'+'</h3>'+
                                              '<h3>' + json[0].prix +' '+'€'+'</h3></div>'+
                                              '<div class ="articleBDI1">'+'</div>'+
                                              '<p>' + json[0].description +'</p>'+
                                               '<button class="favorite" type="button">'+'Lire la suite'+'</button>';



                                              apiList2.innerHTML +=
                                                                    '<div class ="titre"><h1>' + json[1].titre +'</h1>'+
                                                                    '<h2>' +'Départ de'+' '+ json[1].depart +'</h2>'+
                                                                    '<h2>' +'Destination'+' '+ json[1].destination +'</h2>'+
                                                                    '<h3>' + json[1].nombre_jours +' '+'jours'+'</h3>'+
                                                                    '<h3>' + json[1].prix +' '+'€'+'</h3></div>'+
                                                                    '<div class ="articleBDI2">'+'</div>'+
                                                                    '<p>' + json[1].description +'</p>'+
                                                                    '<button class="favorite" type="button">'+'Lire la suite'+'</button>';
                                            apiList3.innerHTML +=
                                                                    '<div class ="titre"><h1>' + json[2].titre +'</h1>'+
                                                                    '<h2>' +'Départ de'+' '+ json[2].depart +'</h2>'+
                                                                    '<h2>' +'Destination'+' '+ json[2].destination +'</h2>'+
                                                                    '<h3>' + json[2].nombre_jours +' '+'jours'+'</h3>'+
                                                                    '<h3>' + json[2].prix +' '+'€'+'</h3></div>'+
                                                                    '<div class ="articleBDI3">'+'</div>'+
                                                                    '<p>' + json[2].description +'</p>'+
                                                                    '<button class="favorite" type="button">'+'Lire la suite'+'</button>';

                                            apiList4.innerHTML +=
                                                                    '<div class ="titre"><h1>' + json[3].titre +'</h1>'+
                                                                    '<h2>'+'Départ de'+' ' + json[3].depart +'</h2>'+
                                                                    '<h2>' +'Destination'+' '+ json[3].destination +'</h2>'+
                                                                    '<h3>' + json[3].nombre_jours +' '+'jours'+'</h3>'+
                                                                    '<h3>' + json[3].prix +' '+'€'+'</h3></div>'+
                                                                    '<div class ="articleBDI4">'+'</div>'+
                                                                    '<p>' + json[3].description +'</p>'+
                                                                    '<button class="favorite" type="button">'+'Lire la suite'+'</button>';


                                            apiList5.innerHTML +=
                                                                    '<div class ="titre"><h1>' + json[4].titre +'</h1>'+
                                                                    '<h2>'+'Départ de'+' '+ json[4].depart +'</h2>'+
                                                                    '<h2>'+'Destination'+' '+json[4].destination +'</h2>'+
                                                                    '<h3>' + json[4].nombre_jours +' '+'jours'+'</h3>'+
                                                                    '<h3>' + json[4].prix +' '+'€'+'</h3></div>'+
                                                                    '<div class ="articleBDI5">'+'</div>'+
                                                                    '<p>' + json[1].description +'</p>'+
                                                                    '<button class="favorite" type="button">'+'Lire la suite'+'</button>';



                    }
                }
            };

            ajx.send();



        });
