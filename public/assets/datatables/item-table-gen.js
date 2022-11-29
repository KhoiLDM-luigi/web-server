$(document).ready(() => {
    $('#item-table').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.13.1/i18n/vi.json"
        },
        columns: [
            {title: 'ID'},
            {title: 'Sản phẩm'},
            {title: 'Hãng sản xuất'},
            {title: 'Ngày thêm'},
            {title: 'Ngày nhập hàng'},
            {title: 'Sô lượng'}
        ]   
        //data: dataSet
    });
});