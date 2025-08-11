"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revealSpoiler = exports.scrollToMessage = void 0;

// bất cứ khi nào người dùng nhấp vào phần tử có thuộc tính data-goto, cuộn đến thông báo đó
document.addEventListener('click', (e) => {
  const target = e.target;
  if (!target) return;

  const goto = target?.getAttribute('data-goto');

  if (goto) {
    const message = document.getElementById(`m-${goto}`);
    if (message) {
      message.scrollIntoView({ behavior: 'smooth', block: 'center' });
      message.style.backgroundColor = 'rgba(148, 156, 247, 0.1)';
      message.style.transition = 'background-color 0.5 ease';
      setTimeout(() => {
        message.style.backgroundColor = 'transparent';
      }, 1000);
    } else {
      console.warn(`Tin nhắn với ID ${goto} không tìm thấy.`);
    }
  }
});

exports.scrollToMessage = `
document.addEventListener("click", (t) => {
  let e = t.target;
  if (!e) return;

  let o = e?.getAttribute("data-goto");
  if (o) {
    let r = document.getElementById(\`m-\${o}\`);

    if (r) {
      // Cuộn mượt đến tin nhắn cần tìm
      r.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      // Tô nền tạm thời để nổi bật tin nhắn
      r.style.backgroundColor = "rgba(148, 156, 247, 0.1)";
      r.style.transition = "background-color 0.5s ease";

      setTimeout(() => {
        r.style.backgroundColor = "transparent";
      }, 1000);
    } else {
      console.warn(\`Không tìm thấy tin nhắn \${o}.\`);
    }
  }
});
`;

exports.revealSpoiler = `
const s = document.querySelectorAll(".discord-spoiler");

s.forEach((s) =>
  s.addEventListener("click", () => {
    if (s.classList.contains("discord-spoiler")) {
      // Hiện nội dung spoiler khi click
      s.classList.remove("discord-spoiler");
      s.classList.add("discord-spoiler--revealed");
    }
  })
);
`;
