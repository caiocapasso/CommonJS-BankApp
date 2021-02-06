let Footer = {
  render: async () => {
    let view = `
        <footer class="footer mt-auto py-3 bg-light pt-5 text-center">
            <div class="container">
                <span class="text-muted">meu pé de laranja lima ©2021</span>
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
