let Footer = {
  render: async () => {
    let view = `
    <footer class="footer mt-auto bg-warning">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6">
          <p class="fs-5 mb-0">Thunder<i class="fas fa-poo-storm"></i>Bank ©2021</p>
        </div>
        <div class="col-6">
          <p class="fs-3 mb-0 text-end"><i class="fab fa-facebook-square m-2"></i><i class="fab fa-instagram-square m-2"></i><i class="fab fa-youtube-square m-2"></i><i class="fab fa-twitter-square m-2"></i><i class="fab fa-linkedin m-2"></i> </p>
        </div>
      </div>
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
