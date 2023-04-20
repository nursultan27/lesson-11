export const Header = () => {
  const header = document.createElement("header");
  const container = document.createElement("div");
  const wrapper = document.createElement("wrapper");
  const link = document.createElement("link");
  const logoImg = document.createElement("img");
  const createImg = document.createElement("img");

  // Добавление аттрибутов
  header.classList.add("header");
  container.classList.add("container");
  wrapper.classList.add("header-wrapper");
  link.classList.add("header-link");
  logoImg.classList.add("link__logo");
  createImg.classList.add("header-create");
  link.href = "/";
  logoImg.src = "";
  createImg.src = "";

  header.style.background = "red";

  header.append(container);
  container.append(wrapper);
  wrapper.append(link, createImg);
  link.append(logoImg);

  return header;
};

/* To do
1. Header
2. Container
3. Wrapper for Header
4. Link
5. Logo img
6. Header create
*/
// Подкл сторон.модуля
import { Header } from '../header';

// Точка входа в app
const createApp = () => {
  const header = Header()
  document.body

}

// Запуск app
createApp();

