import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

let UserLogin = {
  render: async () => {
    let navBar = await Navbar.render();
    let footer = await Footer.render();
    let view = `
    ${navBar}  
    <p>UserLogin</p>
    ${footer}
    `;
    return view;
  },
  after_render: async () => {
  },
};

export default UserLogin;
