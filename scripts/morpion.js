$.fn.morpion = function () {
    let games =
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
    $('#replay').click(function () {
        $('.cell').empty();
        $("#grid").removeClass('won');
        games =
            [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ];
    });
    function updateGame(games, index, val) {
        games[index] = val;
    }
    function verifyOneLigne(element, games) {
        let result = 0;
        for (let index = 0; index < 3; index++) {
            if (element === games[index]) {
                result++;
            }
        }
        if (result >= 3) {
            for (let index = 0; index < 3; index++) {
            }
            return true;
        }
    }
    function verifytwoLigne(element, games) {
        let result = 0;
        for (let index = 3; index <= 5; index++) {
            if (element === games[index]) {
                result++;
            }
        }
        if (result >= 3) return true;

    }
    function verifythreeLigne(element, games) {
        let result = 0;
        for (let index = 6; index <= 9; index++) {
            if (element === games[index]) {
                result++;
            }
        }
        if (result >= 3) return true;
    }
    function verifyverticaloneLigne(element, games) {
        let result = 0;
        for (let index = 0; index <= 6; index = index + 3) {
            if (element === games[index]) {
                result++;
            }
        }
        if (result >= 3) return true;
    }
    function verifyverticaltwoLigne(element, games) {
        let result = 0;
        for (let index = 1; index <= 7; index = index + 3) {
            if (element === games[index]) {
                result++;
            }
        }
        if (result >= 3) return true;
    }
    function verifyverticalthreeLigne(element, games) {
        let result = 0;
        for (let index = 2; index <= 8; index = index + 3) {
            if (element === games[index]) {
                result++;
            }
        }
        if (result >= 3) return true;
    }
    function verifyverticaltfourLigne(element, games) {
        let result = 0;
        for (let index = 0; index <= 8; index = index + 4) {
            if (element === games[index]) {
                result++;
            }
        }
        if (result >= 3) return true;
    }
    function verifyverticaltfiveLigne(element, games) {
        let result = 0;
        for (let index = 2; index <= 6; index = index + 2) {
            if (element === games[index]) {
                result++;
            }
        }
        if (result >= 3) return true;
    }
    function getVerifyVictory(games, element) {
        let verif = verifyOneLigne(element, games);
        if (verif)return true;
        verif = verifytwoLigne(element, games);
        if (verif)return true;
        verif = verifythreeLigne(element, games);
        if (verif)return true;
        verif = verifyverticaloneLigne(element, games);
        if (verif)return true;
        verif = verifyverticaltwoLigne(element, games);
        if (verif)return true;
        verif = verifyverticalthreeLigne(element, games);
        if (verif)return true;
        verif = verifyverticaltfourLigne(element, games);
        if (verif)return true;
        verif = verifyverticaltfiveLigne(element, games);
        if (verif)return true;
    }
    function arrayComplet(games) {
        return games.indexOf(0) === -1 ? true : false;
    }
    let par = 1;
    let j_1 = "Joueur 1";
    let point_j1 = 0;
    let point_j2 = 0;
    $("#currentPlayer").text(j_1);
    let j_2 = "Joueur 2";
    $(".cell").click(function () {
        let index;
        if (par & 1) {
            if ($(this).text() === "") {
                let index = $(".cell").index(this);
                updateGame(games, index, "X");
                if (getVerifyVictory(games, "X", $(this))) {
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
                $(this).color = "blue"
                par++;
            }
        } else {
            if ($(this).text() === "") {
                let index = $(".cell").index(this);
                updateGame(games, index, "O");
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