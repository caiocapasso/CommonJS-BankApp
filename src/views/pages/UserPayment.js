import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

let UserPayment = {
  isPrivate: true,
  render: async (isUserLogged) => {
    let navBar = await Navbar.render(isUserLogged);
    let footer = await Footer.render();
    let sidebar = await Sidebar.render();
    let body = renderBody(sidebar);
    let view = `
        ${navBar} 
        ${body}
        ${footer}
        `;
    return view;
  },
  after_render: async () => {},
};

const renderBody = (sidebar) => {
  return `
<main id="container" class="min-vh-100">
<p>user payment</p>
</main>
`;
};

export default UserPayment;
