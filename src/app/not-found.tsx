import { MainHeader } from '../components/header';

export const dynamic = 'force-static';

export default () => {
  return (
    <>
      <MainHeader
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
        fullHeight
      />
    </>
  );
};
