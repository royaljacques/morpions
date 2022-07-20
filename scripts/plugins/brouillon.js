jQuery.fn.morpion = function () {

    let games =
            [
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " "
            ];
    $('#replay').click(function () {
        $('.cell').empty();
        $("#grid").removeClass('won');
        games =
            [
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " "
            ];
    });
    function verifyOne(element) {
        let result = 0;
        for (let index = 0; index < 6; index++) {
        }
        if (result >= 3) return true;
    }

    function getVerifyVictory(games, element) {
        let verif = verifyOne(element, games);

    }
    function arrayComplet(games) {
        return games.indexOf(0) === -1;
    }
    let par = 1;
    let j_1 = "Joueur 1";
    let point_j1 = 0;
    let point_j2 = 0;
    $("#currentPlayer").text(j_1);
    let j_2 = "Joueur 2";

    }
    $(".cell").click(function () {
        let index;
        par === 1 ? playerOne() : playerTwo()
        function playerOne() {
            if ($(this).text() === "") {
                let index = $(".cell").index(this);
                upDateArray(games, index, "X");
                if (getVerifyVictory(games, "X")) {
                    $("#grid").addClass("won");
                    $(".win-display").text("Le joueur 1 a gagné !");
                    point_j1++;
                    $("#playerOne").text(point_j1);

                } else {
                    if (arrayComplet(games)) {
                        $("#grid").addClass("won");
                        $(".win-display").text(" Match nul !");
                    }
                }
                $("#currentPlayer").text(j_2);
                $(this).text("X");
                par++;
            }
        }
        function playerTwo(){
            if ($(this).text() === "") {
                let index = $(".cell").index(this);
                upDateArray(games, index, "O");
                if (getVerifyVictory(games, "O")) {
                    $("#grid").addClass("won");
                    $(".win-display").text("Le joueur 2 a gagné !");
                    point_j2++;
                    $("#playerTwo").text(point_j2);
                } else {
                    if (arrayComplet(games)) {
                        $("#grid").addClass("won");
                        $(".win-display").text(" Match nul !");
                    }
                }
                $("#currentPlayer").text(j_1);
                $(this).text("O");
                par++;
            }
        }
    });
}
$('#grid').morpion();