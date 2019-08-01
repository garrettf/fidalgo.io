exports.onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents },
  pluginOptions,
) => {
  if (process.env.NODE_ENV !== 'production') {
    // Do nothing when running `gatsby develop`
    return;
  }
  replaceHeadComponents(withoutPageData(getHeadComponents()));
};

const withoutPageData = headComponents => {
  return headComponents.filter(headComponent => {
    if (
      headComponent.type === 'link' &&
      headComponent.props &&
      headComponent.props.href &&
      headComponent.props.href.match(/page-data.json$/)
    ) {
      return false;
    } else {
      return true;
    }
  });
};
