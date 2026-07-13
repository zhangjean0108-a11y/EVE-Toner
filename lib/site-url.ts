export const siteUrl = "https://www.evetoner.net.cn";
export const socialImage = "/images/company-factory-collage.jpeg";
export const socialImageUrl = `${siteUrl}${socialImage}`;

export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${siteUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}
