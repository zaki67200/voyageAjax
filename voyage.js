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
                                              '<h1>' + json[0].titre +'</h1>'+
                                              '<h2>' + json[0].depart +'</h2>'+
                                              '<h2>' + json[0].destination +'</h2>'+
                                              '<h2>' + json[0].nombre_jours +'</h2>'+
                                              '<h2>' + json[0].prix +'</h2>'+
                                              '<img src="newyork.jpg" alt="NewYork" >'+
                                              '<p>' + json[0].description +'</p>';



                                              apiList2.innerHTML +=
                                                                    '<h1>' + json[1].titre +'</h1>'+
                                                                    '<h2>' + json[1].depart +'</h2>'+
                                                                    '<h2>' + json[1].destination +'</h2>'+
                                                                    '<h2>' + json[1].nombre_jours +'</h2>'+
                                                                    '<h2>' + json[1].prix +'</h2>'+
                                                                    '<img src="marakech.jpg" alt="Marakech" >'+
                                                                    '<p>' + json[1].description +'</p>';
                                            apiList3.innerHTML +=
                                                                    '<h1>' + json[2].titre +'</h1>'+
                                                                    '<h2>' + json[2].depart +'</h2>'+
                                                                    '<h2>' + json[2].destination +'</h2>'+
                                                                    '<h2>' + json[2].nombre_jours +'</h2>'+
                                                                    '<h2>' + json[2].prix +'</h2>'+
                                                                    '<img src="reunion.jpg" alt="Reunion" >'+
                                                                    '<p>' + json[2].description +'</p>';

                                            apiList4.innerHTML +=
                                                                    '<h1>' + json[3].titre +'</h1>'+
                                                                    '<h2>' + json[3].depart +'</h2>'+
                                                                    '<h2>' + json[3].destination +'</h2>'+
                                                                    '<h2>' + json[3].nombre_jours +'</h2>'+
                                                                    '<h2>' + json[3].prix +'</h2>'+
                                                                    '<img src="tchernobly.jpg" alt="Tchernobly" >'+
                                                                    '<p>' + json[3].description +'</p>';


                                            apiList5.innerHTML +=
                                                                    '<h1>' + json[4].titre +'</h1>'+
                                                                    '<h2>' + json[4].depart +'</h2>'+
                                                                    '<h2>' + json[4].destination +'</h2>'+
                                                                    '<h2>' + json[4].nombre_jours +'</h2>'+
                                                                    '<h2>' + json[4].prix +'</h2>'+
                                                                   '<img src="athenes.jpg" alt="Athenes" >'+
                                                                  '<p>' + json[4].description +'</p>';



                    }
                }
            };

            ajx.send();



        });
