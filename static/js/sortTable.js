$(document).ready(function() {
        let lastcnt = 0;
        let cnt;
        chkNewScan();

        function chkNewScan() {
            countAllDayScan();
            setTimeout(chkNewScan, 1000);
        }

        function countAllDayScan() {
            $.ajax({
                url: '/countAllDayScan',
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    cnt = data.rowcount;
                    if (cnt > lastcnt) {
                        reloadTable();
                    }

                    lastcnt = cnt;
                },
                error: function(result){
                    console.log('no result!')
                }
            })
        }

        function reloadTable() {
            $.ajax({
                url: '/loadDataAll',
                type: 'GET',
                dataType: 'json',
                success: function(response){
                    var tr = $("#scandata");
                    tr.empty();

                    $.each(response, function(index, item) {
                        if (item.length > 0) {
                            for (let i = 0; i < item.length; i++) {
                                tr.append('<tr>'+
                                                '<td>'+item[i][1]+'</td>'+
                                                '<td>'+item[i][2]+'</td>'+
                                                '<td>'+item[i][3]+'</td>'+
                                                '<td>'+item[i][4]+'</td>'+
                                                '<td>'+item[i][5]+'</td>'+
                                           '</tr>');
                            }
                        }
                    });
                },
                error: function(result){
                    console.log('no result!')
                }
            });
        }
    });
    document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

});


// Поиск в таблице по имени
function myFunction() {
  // Объявить переменные
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}