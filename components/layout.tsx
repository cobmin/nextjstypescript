import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import Navbar from './navbar';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  title?: string;
  description?: string;
  imageUrl?: string;
};

const Layout = ({ children, title, description, imageUrl }: Props) => {
  return (
    <>
      <Meta title={title} description={description} imageUrl={imageUrl} />
      <div className="min-h-screen bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text pb-4">
        <Alert />
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
