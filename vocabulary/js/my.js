function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable2");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
$(document).ready(function() {
  var folder = "./sounds";
      $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {

                $(console.log(data));
                if( val.match(/\.(wav|mp3)$/) ) {
                    $("body").append( val);
                }
            });
        }
      });


})
function loadCategory(category) {
    var myTableDiv = document.getElementById("metric_results")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')

    table.border = '1'
    table.appendChild(tableBody);

    var heading = new Array();
    heading[0] = "Request Type"
    heading[1] = "Group A"
    heading[2] = "Groub B"
    heading[3] = "Group C"
    heading[4] = "Total"

    var stock = new Array()
    stock[0] = new Array("Cars", "88.625", "85.50", "85.81", "987")
    stock[1] = new Array("Veggies", "88.625", "85.50", "85.81", "988")
    stock[2] = new Array("Colors", "88.625", "85.50", "85.81", "989")
    stock[3] = new Array("Numbers", "88.625", "85.50", "85.81", "990")
    stock[4] = new Array("Requests", "88.625", "85.50", "85.81", "991")

    //TABLE ROWS
    for (i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        var res = stock[i].split("_"); // eng_np_speaker

        // Add eng
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(res[0]));
        tr.append(td);

        // Add NP
        np = res[1].replace(/-/g, ' ');
        var td = document.createElement('TD');
        td.appendChild("<td class="click_sound" onclick="audio('o_weave_(wicker_basket)_EC.wav')">jaman</td>"
        tr.append(td);

        // Add speaker
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(res[-1]));
        tr.append(td);

        for (j = 0; j < stock[i].length; j++) {
            var td = document.createElement('TD')
            td.appendChild(document.createTextNode(stock[i][j]));
            tr.appendChild(td)
        }
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}
