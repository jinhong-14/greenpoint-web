document.addEventListener("DOMContentLoaded", () => {
  // 연도 자동 갱신
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // 서비스 소개 페이지 아이콘 클릭 감지
  const icon1 = document.getElementById("icon1");
  if (icon1) {
    icon1.addEventListener("click", () => {
      console.log("💡 GreenPoint 아이콘 클릭됨");
    });
  }
});

// ===========================
// 로그인 상태 확인 및 처리
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.querySelector(".nav__link[href='login.html']");
  const myPageLink = document.querySelector(".nav__link[href='#']");
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    // 로그인 상태면 "로그아웃"으로 변경
    if (loginLink) {
      loginLink.textContent = "로그아웃";
      loginLink.href = "#";
      loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        alert("로그아웃되었습니다.");
        window.location.reload();
      });
    }

    // 마이페이지 활성화
    if (myPageLink) {
      myPageLink.href = "mypage.html";
    }
  } else {
    // 로그아웃 상태면 로그인 링크 유지
    if (loginLink) loginLink.href = "login.html";
  }
});

localStorage.setItem(email, password);
