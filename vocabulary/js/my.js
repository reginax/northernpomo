function cellEntries(json, dest, divId) {
    var table = document.createElement('table');
        table.setAttribute("id", divId + "table");                 //Assign ID to <table> from the <div> name.
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var thr;
    var tr;
    var entries = json.feed.entry;
    var cols = json.feed.gs$colCount.$t;                                  //The number of columns in the sheet.
    var link;                                                           //Teporary holder for the URL of a row.

    for (var i=0; i <cols; i++) {                                       //For the first row of cells (column titles),
        var entry = json.feed.entry[i];
        if (entry.gs$cell.col == '1') {                                     //For First Column / URL Column, (1)
            if (thr != null) {
                tbody.appendChild(thr);
            }
            thr = document.createElement('tr');                                 //Create <thr>/<tr> (???).
        }
        else {                                                              //For all other columns,
            var th = document.createElement('th');
            th.appendChild(document.createTextNode(entry.content.$t));          //Create title for each column.
            thr.appendChild(th);
        }
    }
    for (var i=cols; i < json.feed.entry.length; i++) {                 //For all remaining cells,
        var entry = json.feed.entry[i];
        if (entry.gs$cell.col == '1') {                                     //For First Column / URL Column, (1)
            if (tr != null) {
                tbody.appendChild(tr);
            }
            tr = document.createElement('tr');                                  //Create <tr>.
            hlink = entry.content.$t;                                           //Put URL content into hlink.
        }
        else if (entry.gs$cell.col == '2') {                                //For Title Column,(2)
            var td = document.createElement('td');
            if (hlink != "None") {                                              //If there is a link,
                var alink = document.createElement('a');                            //Make <a>
                alink.appendChild(document.createTextNode(entry.content.$t));       //Put content in <a>
                alink.setAttribute('href',hlink);                                   //Assign URL to <a>.
                td.appendChild(alink);                                              //Put <a> in <td>.
            }
            else {                                                              //If there is no link,
                td.appendChild(document.createTextNode(entry.content.$t));          //Put content in <td>.
            }
            tr.appendChild(td);
        }
        else {                                                              //For all other columns,
            var td = document.createElement('td');
            if (entry.content.$t != "None") {                                   //If content is not "None",
                td.appendChild(document.createTextNode(entry.content.$t));          //Output the content.
            }
            else {                                                              //Else,
                td.appendChild(document.createTextNode(""));                        //Output a blank cell.
            }
            tr.appendChild(td);
        }
    }
    $(thead).append(thr);
    $(tbody).append(tr);
    $(table).append(thead);
    $(table).append(tbody);
    $(dest).append(table);
    $(dest + "table").dataTable();

};

function importGSS(json){
   var divId = "targetdivid"                            //ID of the target <div>.
   cellEntries(json, "#" + divId, divId);
};
//
// $(document).ready(function() {
//   var folder = "./sounds";
//       $.ajax({
//         url : folder,
//         success: function (data) {
//             $(data).find("a").attr("href", function (i, val) {
//
//                 $(console.log(data));
//                 if( val.match(/\.(wav|mp3)$/) ) {
//                     $("body").append( val);
//                 }
//             });
//         }
//       });
//
//
// })
// function loadCategory(category) {
//     var myTableDiv = document.getElementById("metric_results")
//     var table = document.createElement('TABLE')
//     var tableBody = document.createElement('TBODY')
//
//     table.border = '1'
//     table.appendChild(tableBody);
//
//     var heading = new Array();
//     heading[0] = "Request Type"
//     heading[1] = "Group A"
//     heading[2] = "Groub B"
//     heading[3] = "Group C"
//     heading[4] = "Total"
//
//     var stock = new Array()
//     stock[0] = new Array("Cars", "88.625", "85.50", "85.81", "987")
//     stock[1] = new Array("Veggies", "88.625", "85.50", "85.81", "988")
//     stock[2] = new Array("Colors", "88.625", "85.50", "85.81", "989")
//     stock[3] = new Array("Numbers", "88.625", "85.50", "85.81", "990")
//     stock[4] = new Array("Requests", "88.625", "85.50", "85.81", "991")
//
//     //TABLE ROWS
//     for (i = 0; i < stock.length; i++) {
//         var tr = document.createElement('TR');
//         var res = stock[i].split("_"); // eng_np_speaker
//
//         // Add eng
//         var td = document.createElement('TD');
//         td.appendChild(document.createTextNode(res[0]));
//         tr.append(td);
//
//         // Add NP
//         np = res[1].replace(/-/g, ' ');
//         var td = document.createElement('TD');
//         td.appendChild("<td class="click_sound" onclick="audio('o_weave_(wicker_basket)_EC.wav')">jaman</td>"
//         tr.append(td);
//
//         // Add speaker
//         var td = document.createElement('TD');
//         td.appendChild(document.createTextNode(res[-1]));
//         tr.append(td);
//
//         for (j = 0; j < stock[i].length; j++) {
//             var td = document.createElement('TD')
//             td.appendChild(document.createTextNode(stock[i][j]));
//             tr.appendChild(td)
//         }
//         tableBody.appendChild(tr);
//     }
//     myTableDiv.appendChild(table)
// }
