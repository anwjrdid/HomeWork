function changeNickname() {
    const newNick = document.getElementById("newNickname").value.trim();

    if (newNick === "") {
        alert("새 닉네임을 입력하세요.");
        return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert("로그인된 계정이 없습니다.");
        return;
    }

    user.nickname = newNick;
    localStorage.setItem("user", JSON.stringify(user));

    alert("닉네임이 변경되었습니다!");
    location.reload();
}
