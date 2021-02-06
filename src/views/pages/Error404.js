let Error404 = {
  render: async () => {
    let view = `<p>ERROR 404: Page not found</p>`;
    return view;
  },
  after_render: async () => {
    //empty
  },
};

export default Error404;
