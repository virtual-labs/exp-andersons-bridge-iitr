var rightconnection = false;
var datapoints1 = [];
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },

        // notice there are no dragOptions specified here, which is different from the
        // draggableConnectors2 demo.  all connections on this page are therefore
        // implicitly in the default scope.
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare2 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint2);
        },
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare3 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint3);
        },
        endpoint4 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare4 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint4);
        },
        endpoint5 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare5 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint5);
        },
        endpoint6 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare6 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint6);
        },
        endpoint7 = {
            anchor: [-8.2, 0.8, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare7 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint7);
        },
        endpoint8 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare8 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint8);
        },
        endpoint9 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare9 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint9);
        },
        endpoint10 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare10 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint11 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare11 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint11);
        },
        endpoint12 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare12 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint12);
        },
        endpoint13 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare13 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint13);
        },
        endpoint14 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare14 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint14);
        },
        endpoint15 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "yellow" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare15 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint14);
        },



        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "images/littledot.png" }],

        Connector: ["Bezier", { curviness: -70 }],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare4("ld4"),
            e5 = prepare5("ld5"),
            e6 = prepare6("ld6"),
            e7 = prepare7("ld7"),
            e8 = prepare8("ld8"),
            e9 = prepare9("ld9"),
            e10 = prepare10("ld10"),
            e11 = prepare11("ld11"),
            e12 = prepare12("ld12"),
            e13 = prepare13("ld13"),
            e14 = prepare14("ld14"),
            e15 = prepare14("ld15"),


            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });



    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);


    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_5 = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            }
        ];

        var correct_connections_2_6 = [
            {
                "source": "ld2",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld2"
            }
        ];
        var correct_connections_3_8 = [
            {
                "source": "ld3",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld3"
            }
        ];
        var correct_connections_4_7 = [
            {
                "source": "ld4",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld4"
            }
        ];
        var correct_connections_14_9 = [
            {
                "source": "ld14",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld14"
            }
        ];
        var correct_connections_15_8 = [
            {
                "source": "ld15",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld15"
            }
        ];
        var correct_connections_10_12 = [
            {
                "source": "ld10",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld10"
            }
        ];
        var correct_connections_11_13 = [
            {
                "source": "ld11",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld11"
            }
        ];



        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld2"
            },
            {
                "source": "ld3",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld3"
            },
            {
                "source": "ld4",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld4"
            },
            {
                "source": "ld14",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld14"
            },
            {
                "source": "ld15",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld15"
            },
            {
                "source": "ld10",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld10"
            },
            {
                "source": "ld11",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld11"
            },



        ];
        var actual_connections = instance.getAllConnections();

        var is_connected_1_5 = false;
        var is_connected_2_6 = false;
        var is_connected_3_8 = false;
        var is_connected_4_7 = false;
        var is_connected_14_9 = false;
        var is_connected_15_8 = false;
        var is_connected_10_12 = false;
        var is_connected_11_13 = false;



        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_5) {
                is_connected_1_5 = correct_connections_1_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_2_6) {
                is_connected_2_6 = correct_connections_2_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_3_8) {
                is_connected_3_8 = correct_connections_3_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_4_7) {
                is_connected_4_7 = correct_connections_4_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_14_9) {
                is_connected_14_9 = correct_connections_14_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_15_8) {
                is_connected_15_8 = correct_connections_15_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_10_12) {
                is_connected_10_12 = correct_connections_10_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_11_13) {
                is_connected_11_13 = correct_connections_11_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });


        if (is_connected_1_5 && is_connected_2_6 && is_connected_3_8 && is_connected_4_7 && is_connected_14_9 && is_connected_15_8 && is_connected_10_12 && is_connected_11_13 && !unallowed_connection_present) {
            alert("Correct Connections");
            rightconnection = true;

            const elements = document.querySelectorAll('.jtk-endpoint');

            elements.forEach(ele => {
                ele.style.pointerEvents = 'none';
            });

            document.getElementById("mcbb").disabled = false;
            document.getElementById("mcbb").classList.remove("disabled");

            document.getElementById('dis1').style.pointerEvents = "none";
            document.getElementById('dis2').style.pointerEvents = "none";
            document.getElementById('dis3').style.pointerEvents = "none";
            document.getElementById('dis4').style.pointerEvents = "none";
            document.getElementById('dis5').style.pointerEvents = "none";
            document.getElementById('dis6').style.pointerEvents = "none";
            document.getElementById('dis7').style.pointerEvents = "none";
            document.getElementById('dis8').style.pointerEvents = "none";
            document.getElementById('dis9').style.pointerEvents = "none";
            document.getElementById('dis10').style.pointerEvents = "none";
            document.getElementById('dis11').style.pointerEvents = "none";
            document.getElementById('dis12').style.pointerEvents = "none";
            document.getElementById('dis13').style.pointerEvents = "none";
            document.getElementById('dis14').style.pointerEvents = "none";
            document.getElementById('dis15').style.pointerEvents = "none";

            return;
        }
        else if (!unallowed_connection_present) {
            alert("Please Complete the connection");
        }
        else {
            alert("Wrong Connection");
            return;
        }
    });
});

//Scripting of mcb begins


var mcboffstate = true;
var were = 240;
function mcbonoff() {

    if (rightconnection == false) {
        alert("Alert ! Please Complete the connection first.");
    }
    else {
        if (mcboffstate == true) {

            mcboffstate = false;


            document.getElementById('select_1').disabled = false;
            document.getElementById('select_2').disabled = false;
            document.getElementById('select_3').disabled = false;
            document.getElementById('select_4').disabled = false;
            document.getElementById('select_5').disabled = false;
            document.getElementById('select_6').disabled = false;
            document.getElementById('mcbb').src = "images/mcb2.png";
            document.getElementById('power').src = "images/push1.png";


        }
    }
}

//Scripting of mcb ends

//Scrypting of table begins
var op1 = document.getElementById("select_1");
var op2 = document.getElementById("select_2");
var op3 = document.getElementById("select_3");
var op4 = document.getElementById("select_4");
var op5 = document.getElementById("select_5");
var op6 = document.getElementById("select_6");


var attcounter = 1;
var readings = true;
var current_readings = 0;

function addtotable() {
    if (mcboffstate == false) {

        if (current_readings != this.value) {
            current_readings = this.value;
            readings = true;
        }
        /*if(op1.value==1&&op2.value==6&&op3.value==12&&op4.value==20&&op5.value==21&&op6.value==27 )
     {
         
          var currentVal1 = attcounter++;
var currentVal2 = 0.001;
var currentVal3 = 4400;
 
var currentVal4 = 1000;
var currentVal5 = 1500;
 var currentVal6 = 14.7 ;


 
 
 
var tr = document.createElement('tr');
var td1 = tr.appendChild(document.createElement('td'));
var td2 = tr.appendChild(document.createElement('td'));
var td3 = tr.appendChild(document.createElement('td'));
var td4 = tr.appendChild(document.createElement('td'));
var td5 = tr.appendChild(document.createElement('td'));
 var td6 = tr.appendChild(document.createElement('td'));
 
td1.innerHTML=currentVal1;
td2.innerHTML=currentVal2;
td3.innerHTML=currentVal3;
td4.innerHTML=currentVal4;
 td5.innerHTML=currentVal5;
 td6.innerHTML=currentVal6;
 



 
document.getElementById("tb1").appendChild(tr);
sound();

}
else if(op1.value==2&&op2.value==6&&op3.value==15&&op4.value==17&&op5.value==21&&op6.value==27)
     {
      
  var currentVal1 = attcounter++;
var currentVal2 = 0.002;
var currentVal3 = 1800;
 
var currentVal4 = 1000;
var currentVal5 = 1500;
var currentVal6 = 13.8;
 
 
 
 
var tr = document.createElement('tr');
var td1 = tr.appendChild(document.createElement('td'));
var td2 = tr.appendChild(document.createElement('td'));
var td3 = tr.appendChild(document.createElement('td'));
var td4 = tr.appendChild(document.createElement('td'));
var td5 = tr.appendChild(document.createElement('td'));
var td6 = tr.appendChild(document.createElement('td'));
 
td1.innerHTML=currentVal1;
td2.innerHTML=currentVal2;
td3.innerHTML=currentVal3;
td4.innerHTML=currentVal4;
 td5.innerHTML=currentVal5;
 td6.innerHTML=currentVal6;


       
 
document.getElementById("tb1").appendChild(tr);
sound();
}
else if(op1.value==3&&op2.value==6&&op3.value==11&&op4.value==17&&op5.value==21&&op6.value==27)
     {
         
            var currentVal1 = attcounter++;
var currentVal2 = 0.003;
var currentVal3 = 1100;
 
var currentVal4 = 1000;
var currentVal5 = 1500;
var currentVal6 = 14.4;
 
 
 
 
var tr = document.createElement('tr');
var td1 = tr.appendChild(document.createElement('td'));
var td2 = tr.appendChild(document.createElement('td'));
var td3 = tr.appendChild(document.createElement('td'));
var td4 = tr.appendChild(document.createElement('td'));
var td5 = tr.appendChild(document.createElement('td'));
var td6 = tr.appendChild(document.createElement('td'));
 
 
td1.innerHTML=currentVal1;
td2.innerHTML=currentVal2;
td3.innerHTML=currentVal3;
td4.innerHTML=currentVal4;
 td5.innerHTML=currentVal5;
 td6.innerHTML=currentVal6;

 
       
 
document.getElementById("tb1").appendChild(tr);
sound();

}*/

        if (attcounter < 2) {
            if (op1.value == 4 && op2.value == 7 && op3.value == 11 && op4.value == 19 && op5.value == 21 && op6.value == 27) {

                var currentVal1 = attcounter++;
                var currentVal2 = 0.004;
                var currentVal3 = 3.01;
                var currentVal4 = 1;
                var currentVal5 = 1.5;
                var currentVal6 = 42.1;

                var tr = document.createElement('tr');
                var td1 = tr.appendChild(document.createElement('td'));
                var td2 = tr.appendChild(document.createElement('td'));
                var td3 = tr.appendChild(document.createElement('td'));
                var td4 = tr.appendChild(document.createElement('td'));
                var td5 = tr.appendChild(document.createElement('td'));
                var td6 = tr.appendChild(document.createElement('td'));

                td1.innerHTML = currentVal1;
                td2.innerHTML = currentVal2;
                td3.innerHTML = currentVal3;
                td4.innerHTML = currentVal4;
                td5.innerHTML = currentVal5;
                td6.innerHTML = currentVal6;

                document.getElementById("tb1").appendChild(tr);
                alert("RIGHT COMBINATION");
                sound();
            }
            /*else if(op1.value==5&&op2.value==6&&op3.value==13&&op4.value==16&&op5.value==21&&op6.value==27)
                   {
                      
              var currentVal1 = attcounter++;
              var currentVal2 = 0.005;
              var currentVal3 = 500;
              var currentVal4 = 1000;
              var currentVal5 = 1500;
              var currentVal6 = 15;
              
              var tr = document.createElement('tr');
              var td1 = tr.appendChild(document.createElement('td'));
              var td2 = tr.appendChild(document.createElement('td'));
              var td3 = tr.appendChild(document.createElement('td'));
              var td4 = tr.appendChild(document.createElement('td'));
              var td5 = tr.appendChild(document.createElement('td'));
              var td6 = tr.appendChild(document.createElement('td'));
             
              td1.innerHTML=currentVal1;
              td2.innerHTML=currentVal2;
              td3.innerHTML=currentVal3;
              td4.innerHTML=currentVal4;
              td5.innerHTML=currentVal5;
              td6.innerHTML=currentVal6;
            
         
              document.getElementById("tb1").appendChild(tr);
              sound();
               
            }*/

            else {
                alert("WRONG COMBINATION");

                btn.onclick = function button() {

                    if (drop.style.display !== "block") {
                        drop.style.display = "block";
                    }

                    else {
                        drop.style.display = "none";
                    }

                    document.getElementById("drop").style.backgroundColor = "lightgrey";
                    document.getElementById("drop").innerHTML = "<pre> P = 1    Q = 0 \n\n X = 0    Y = 3 </pre>";
                };

            };

        }

        else {
            alert("You can add only one reading in the table.")
        }
    }
}




var e = document.getElementById("select_1");
var strUser = e.options[e.selectedIndex].value;
var value = 0;
e.onchange = function () {
    value = this.value;

    if (this.value == 1) {


        range911();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 440;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }
    if (this.value == 2) {

        range912();


        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 438;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);


    }
    if (this.value == 3) {


        range913();

        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 435;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);

    }

    if (this.value == 4) {

        range914();
    }


    if (this.value == 5) {

        range915();

        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 425;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);


    }


};
var i = document.getElementById("select_2");
var strUser = i.options[i.selectedIndex].value;
var value = 0;
i.onchange = function () {
    value = this.value;

    if (this.value == 6) {


        range916();

        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 420;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);

    }
    if (this.value == 7) {
        range917();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 410;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);


    }
    if (this.value == 8) {


        range918();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 400;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }

    if (this.value == 9) {


        range919();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 390;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }
    if (this.value == 10) {


        range920();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 408;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }

};
var j = document.getElementById("select_3");
var strUser = j.options[j.selectedIndex].value;
var value = 0;
j.onchange = function () {
    value = this.value;

    if (this.value == 11) {


        range921();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 407;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }
    if (this.value == 12) {

        range922();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 340;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);


    }
    if (this.value == 13) {


        range923();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 400;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }
    if (this.value == 14) {


        range924();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 403;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }
    if (this.value == 15) {


        range925();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 340;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }


};


var m = document.getElementById("select_4");
var strUser = m.options[m.selectedIndex].value;
var value = 0;
m.onchange = function () {
    value = this.value;

    if (this.value == 16) {


        range926();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 160;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);


    }
    if (this.value == 17) {

        range927();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 160;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }
    if (this.value == 18) {


        range928();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 160;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);




    }
    if (this.value == 19) {


        range929();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 160;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }
    if (this.value == 20) {


        range930();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 160;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }
};
var m = document.getElementById("select_5");
var strUser = m.options[m.selectedIndex].value;
var value = 0;
m.onchange = function () {
    value = this.value;

    if (this.value == 21) {


        range931();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 390;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);


    }
    if (this.value == 22) {

        range932();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 300;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);


    }
    if (this.value == 23) {


        range933();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 310;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);




    }
    if (this.value == 24) {


        range934();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 320;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }
    if (this.value == 25) {


        range935();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 330;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }
};



var k = document.getElementById("select_6");
var strUser = k.options[k.selectedIndex].value;
var value = 0;
k.onchange = function () {
    value = this.value;

    if (this.value == 26) {


        range936();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 340;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);


    }
    if (this.value == 27) {

        range937();
        let audioCtx = new AudioContext();



        let oscillator = audioCtx.createOscillator();

        oscillator.frequency.value = 360;
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
        setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

        oscillator.connect(audioCtx.destination);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 3);



    }

};




var range91 = document.querySelector('#knob1');
var range92 = document.querySelector('#knob2');
var range93 = document.querySelector('#knob3');
var range94 = document.querySelector('#knob4');
var range95 = document.querySelector('#knob5');
var range96 = document.querySelector('#knob6');

function range911() {
    range91.style.transform = 'rotate(86deg)';

}
function range912() {
    range91.style.transform = 'rotate(116deg)';

}
function range913() {
    range91.style.transform = 'rotate(147deg)';

}
function range914() {
    range91.style.transform = 'rotate(178deg)';

}
function range915() {
    range91.style.transform = 'rotate(208deg)';

}
function range916() {
    range92.style.transform = 'rotate(56deg)';

}
function range917() {
    range92.style.transform = 'rotate(86deg)';

}
function range918() {
    range92.style.transform = 'rotate(116deg)';

}
function range919() {
    range92.style.transform = 'rotate(147deg)';

}
function range920() {
    range92.style.transform = 'rotate(179deg)';

}
function range921() {
    range93.style.transform = 'rotate(56deg)';

}
function range922() {

    range93.style.transform = 'rotate(179deg)';

} function range923() {

    range93.style.transform = 'rotate(210deg)';

} function range924() {

    range93.style.transform = 'rotate(271deg)';

}
function range925() {
    range93.style.transform = 'rotate(301deg)';

}
function range926() {

    range94.style.transform = 'rotate(56deg)';

}
function range927() {

    range94.style.transform = 'rotate(86deg)';
}
function range928() {

    range94.style.transform = 'rotate(116deg)';
}
function range929() {

    range94.style.transform = 'rotate(147deg)';
}
function range930() {

    range94.style.transform = 'rotate(179deg)';
}
function range931() {

    range95.style.transform = 'rotate(56deg)';
}
function range932() {

    range95.style.transform = 'rotate(86deg)';
}
function range933() {

    range95.style.transform = 'rotate(116deg)';
}
function range934() {

    range95.style.transform = 'rotate(147deg)';
}
function range935() {

    range95.style.transform = 'rotate(179deg)';
}
function range936() {

    range96.style.transform = 'rotate(56deg)';
}
function range937() {

    range96.style.transform = 'rotate(301deg)';
}


function sound() {
    let oscillator = audioCtx.createOscillator();


    oscillator.frequency.value = 100;
    setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 1000);
    setTimeout(() => oscillator.frequency.value *= Math.pow(2, 1 / 12), 2000);

    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 3);
}

//Balanced Condition Js

