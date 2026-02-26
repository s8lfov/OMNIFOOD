function cleanInput(text) {
  return text
    .replace(/</g, "&lt;") // < → &lt;
    .replace(/>/g, "&gt;") // > → &gt;
    .replace(/"/g, "&quot;") // " → &quot;
    .replace(/'/g, "&#039;"); // ' → &#039;
}

const userComment = "<script>alert('XSS')</script>";
const safeComment = cleanInput(userComment);
