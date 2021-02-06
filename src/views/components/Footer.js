let Footer = {
  render: async () => {
    let view = `
        <footer class="footer mt-auto py-3 bg-light">
            <div class="container">
                <span class="text-muted">footer</span>
            </div>
        </footer>
      `;
    return view;
  },
  after_render: async () => {
    //empty
  },
};

export default Footer;
