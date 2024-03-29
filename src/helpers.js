export const disableScroll = (scrollY) => {
  document.body.style.position = "fixed";
  document.body.style.top = scrollY;
  document.body.style.right = 0;
  document.body.style.bottom = 0;
  document.body.style.left = 0;
};

export const enableScroll = (scrollY) => {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.right = "";
  document.body.style.bottom = "";
  document.body.style.left = "";
  document.documentElement.style.scrollBehavior = `auto`;
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  document.documentElement.style.scrollBehavior = ``;
};

export const formatDate = (
  date,
  options = {
    year: "numeric",
    month: "long",
  }
) => new Date(date).toLocaleDateString("ru-RU", options);

export async function getData(url, cb) {
  const data = await fetch(url);
  const json = await data.json();

  return cb(json);
}

export const getDate = (date) =>
  `"` +
  new Date(date.start).toLocaleDateString("ru-RU", {
    year: "numeric",
  }) +
  `"`;
