function changePassword() {
    const currentPw = document.getElementById("currentPassword").value;
    const newPw = document.getElementById("newPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert("로그인된 계정이 없습니다.");
        return;
    }

    if (currentPw !== user.password) {
        alert("현재 비밀번호가 올바르지 않습니다.");
        return;
    }

    if (newPw.length < 5) {
        alert("새 비밀번호는 5자 이상이어야 합니다.");
        return;
    }

    user.password = newPw;
    localStorage.setItem("user", JSON.stringify(user));

    alert("비밀번호 변경 완료!");
}
