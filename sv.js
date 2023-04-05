lst = [];
curItem = null;
$(function () {
    getStudents();
});

function getStudent() {
    fetch("http://localhost:3000/students")
        .then(res => {
            return res.json();
        })

        .then(data => {

            lst = [];
            data.array.forEach((sv, i) => {
                sv.STT = i + 1;
                lst.push(sv);

            });
            if (sv.lenght > 0) {
                $("#tbodySV").html("");
                $("#svTemplate").tmpl("lst").appendTo("#tbodySV");
            }

        })
        .catch(err => {
            str = "<caption>Erro....</caption>";
            $("#tbodySV").html(str);
        });
}