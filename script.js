document.addEventListener("DOMContentLoaded", () => {
  // 「送信」ボタン（例）
  const submitButton = document.getElementById("submit");
  if (submitButton) {
    submitButton.addEventListener("click", () => {
      alert("送信されました📩");
    });
  }

  // ハートのいいね切り替え
  const hearts = document.querySelectorAll(".heart");
  const whiteHeart = "./img/heart-white.svg";
  const redHeart = "./img/heart-red.svg";

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      if (heart.src.includes("heart-white.svg")) {
        heart.src = redHeart;
      } else {
        heart.src = whiteHeart;
      }
    });
  });

  // カートに追加ボタン
  const cartButtons = document.querySelectorAll(".add-cart");
  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("追加されました🛒");
    });
  });

  // 購入ボタン
  const buyButtons = document.querySelectorAll(".add-cart2");
  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("購入されました🎁お買い上げありがとうございます");
    });
  });
});
