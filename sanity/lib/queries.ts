export const SITEMAP_QUERY = `*[_type in ["page", "post", "serviceContent", "news"] && defined(slug.current)] {
  "href": select(
    _type == "page" => "/" + slug.current,
    _type == "post" => "/" + slug.current,
    _type == "serviceContent" => "/" + slug.current,
    _type == "news" => "/" + slug.current,
    "/" + slug.current
  ),
  _updatedAt
}`;
