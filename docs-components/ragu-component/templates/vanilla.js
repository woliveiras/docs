export function getVanillaRaguComponent(url) {
  return `<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/ragu-dom@latest/install.js" crossorigin="anonymous"></script>
</head>
<body>
  <ragu-component src="${url}"></ragu-component>
</body>
</html>`;
}
