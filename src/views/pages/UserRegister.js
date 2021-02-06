import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

let UserRegister = {
  render: async () => {
    let navBar = await Navbar.render();
    let footer = await Footer.render();
    let view = `
    ${navBar}  
    <p>UserRegister</p>
    ${footer}
    `;
    return view;
  },
  after_render: async () => {
  },
};

export default UserRegister;
