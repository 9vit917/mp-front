export const pathsPublic: { [k: string]: string } = {
  home: "/",
  productDetails: "/product/:idOrSlug",
};

export const pathsPrivate: { [k: string]: string } = {
  accountSettings: "/account-settings",
};

export const paths: { [k: string]: string } = Object.assign(
  {},
  pathsPrivate,
  pathsPublic
);

export const checkPatchMatch = (
  pathName: string,
  paths: { [k: string]: string }
) => {
  let isMatch = false;
  const allPath = Object.keys(paths).map((k) => paths[k]);
  const pathFirstSection = pathName.split("/")[1];

  allPath.forEach((p) => {
    if (p.slice(1) === pathFirstSection) isMatch = true;
  });

  return isMatch;
};
