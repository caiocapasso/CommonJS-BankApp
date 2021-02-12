import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

let UserTransfer = {
  isPrivate: true,
  render: async (isUserLogged) => {
    let navBar = await Navbar.render(isUserLogged);
    let footer = await Footer.render();
    let sidebar = await Sidebar.render(isUserLogged);
    let view = `
        ${navBar} 
        ${body}
        ${footer}
        `;
    return view;
  },
  after_render: async () => {},
};

const body = `
<main id="container" class="min-vh-100">

</main>
`;

export default UserTransfer;